import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import bcrypt from 'bcrypt';

export const server = {
    getUser: defineAction({
        accept: 'form',
        input: z.object({
            passcode: z.string(),
        }),
        handler: async ({ passcode }) => {
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
            return {
                code: "Authorized",
                message: "Passcode is valid.",
            }
        },
    })
}