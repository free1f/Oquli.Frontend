export const PublicRoutes = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/sign-up',
    FORGOT_PASSWORD: '/forgot-password',
    SET_NEW_PASSWORD: '/set-new-password',
    RETRIEVE: '/retrieve',
    CHANGE_PASSWORD: '/change-password',
    STYLE_GUIDE: 'style-guide'
}
  
export const AliasRouter = {
    HOME: 'Home',
    LOGIN: 'login',
    SIGNUP: 'Sign Up',
    FORGOT_PASSWORD: 'Forgot Password',
    SET_NEW_PASSWORD: 'Set New Password',
    RETRIEVE: 'Retrieve',
    CHANGE_PASSWORD: 'Change Password',
    STYLE_GUIDE: 'Style Guide'
}

export const protectedRoutes = [
    PublicRoutes.CHANGE_PASSWORD
]
  