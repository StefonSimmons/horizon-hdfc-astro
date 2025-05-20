
/**
 * Verify if the user is logged in
 * @param {Object} actions 
 * @param {Function} navigate 
 */
export const verifyUser = (actions, navigate) => {
    const token = getToken()
    const navItems = document.querySelectorAll('.navbar-nav .nav-link')
    const logoutBtn = document.querySelector('button#logout')
    if (!token) {
        // If no token, disable navigation items and redirect to auth page
        disableNav(navItems, logoutBtn)

        if(window.location.pathname !== '/auth'){
            navigate('/auth')
        }

        return
    }
    actions.verifyUser({token}).then(res => {
        // Check if the user is logged in
        if(!res.data.user.user){
            disableNav(navItems, logoutBtn)
            navigate('/auth')
        }
    }).catch(err => {
        console.log(err)
        disableNav(navItems, logoutBtn)
        navigate('/auth')
    })
}

/**
 * Disable navigation items
 * @param {Object} navItems: list of navigation items
 * @param {Object} logoutBtn: logout button
 */
function disableNav (navItems, logoutBtn) {
    navItems.forEach(item => {
        item.classList.add('disabled')
    })
    logoutBtn.classList.add('d-none')
}

/**
 * Get token from cookies
 * @param {string} tokenName: name of the token to get
 * @returns token
 */
function getToken (tokenName="horizonToken") {
    const cookie = document.cookie
    const token = cookie.split('; ').find(row => row.startsWith(`${tokenName}=`))?.split('=')[1]
    return token
}