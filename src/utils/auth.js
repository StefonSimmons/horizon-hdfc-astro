/**
 * Verify if the user is logged in
 * @param {Object} actions used to call the action handlers from the client
 * @param {Function} callAction used to call an Action handler directly from your Astro component
 * @param {string} token jsonwebtoken stored in browser cookies
 * @returns {boolean} true if the user is verified, false otherwise
 */
export const verifyUser = async (actions, callAction, token) => {
    if (!token) return false // no token found

    const {data, error} = await callAction(actions.verifyUser, {token})

    // user is not verified
    if(error){
        console.log(error)
        return false
    }

    // user is potentially verified. could be true or false
    return !!data?.user.user
}



/**
 * Logout function to remove the token from the cookie and redirect to the auth page.
 * @param {Function} navigate - The navigate function to redirect the user.
*/
export const addLogoutListener = (navigate) => {
    document.querySelector('button#logout').addEventListener('click', () => {
        const cookieName = "horizonToken"
        const cookie = document.cookie.split('; ')
        const tokenIndex = cookie.findIndex(row => row.startsWith(`${cookieName}=`))

        if (tokenIndex !== -1) {
            // Token found in cookie. Remove the token from the cookie
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
            navigate('/')
        }
    })
}