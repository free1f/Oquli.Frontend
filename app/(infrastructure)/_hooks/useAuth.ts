'use client'
import { retrieveLocalStorage } from '../_utils/localStorage'
  
const useAuth = () => {
	
	const getUser = async () => {
		const user = 	await retrieveLocalStorage('user')
			return user.email
		}
  
    return {
      getUser
    }
  }
  
  export default useAuth
  