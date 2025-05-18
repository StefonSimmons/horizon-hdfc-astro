import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const server = {
    getUser: defineAction({
        accept: 'form',
        input: z.object({
            passcode: z.string(),
        }),
        handler: async ({passcode}) => {
            // bcrypt.hash(passcode, saltRounds=10, function(err, hash) {
            //     console.log("DIGEST::",passcode,"--",hash)
            // });
            const hash = import.meta.env.SECRET_PROD_DIGEST || import.meta.env.SECRET_DEV_DIGEST || ""
            const result = await bcrypt.compare(passcode, hash)

            if(!result){
                throw new ActionError({
                    code: "UNAUTHORIZED",
                    message: "Invalid passcode."
                })
            }

            // else return success
            const token = jwt.sign({ user: "horizon_shareholder" }, import.meta.env.JWT_SECRET, {
                expiresIn: '7d',
            });
            
            return {
                code: "Authorized",
                message: "Passcode is valid.",
                token: token,
            }
        },
    }),
    verifyUser: defineAction({
        accept: 'json',
        input: z.object({
            token: z.string(),
        }),
        handler: async ({token}) => {
            // Verify the token
            try {
                const decoded = jwt.verify(token, import.meta.env.JWT_SECRET);
                return {
                    code: "Authorized",
                    message: "Token is valid.",
                    user: decoded,
                }
            } catch (err) {
                throw new ActionError({
                    code: "UNAUTHORIZED",
                    message: "Invalid token.",
                })
            }
        }
    })
}