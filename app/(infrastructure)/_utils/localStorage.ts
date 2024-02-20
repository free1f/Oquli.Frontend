export const clearLocalStorage = async (key: string): Promise<void> => {
	await new Promise((resolve, reject) => {
		try {
			localStorage.removeItem(key)
			resolve(undefined)
		} catch (error) {
			reject(error)
		}
	})
}
    
export const persistLocalStorage = async <T>(key: string, data: T): Promise<void> => {
	await new Promise((resolve, reject) => {
		try {
			localStorage.setItem(key, JSON.stringify({ ...data }))
			resolve(undefined)
		} catch (error) {
			reject(error)
		}
	})
}

export const retrieveLocalStorage = (key: string) => {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : null
}