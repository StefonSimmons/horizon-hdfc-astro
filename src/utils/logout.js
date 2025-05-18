
/**
 * Logout function to remove the token from the cookie and redirect to the auth page.
 * @param {Function} navigate - The navigate function to redirect the user.
*/
export const addLogoutListener = (navigate) => {
    document.querySelector('button#logout').addEventListener('click', () => {
        const cookieName = 'horizonToken' 
        const cookie = document.cookie.split('; ')
        const tokenIndex = cookie.findIndex(row => row.startsWith(`${cookieName}=`))

        if (tokenIndex !== -1) {
            // Token found in cookie. Remove the token from the cookie
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
            navigate('/auth')
        }
    })
}