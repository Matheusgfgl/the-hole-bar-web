export const setWithExpiry = (key: string, value: string ) => {
	const now = Date.now()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now + 86400 * 1000, // 86400 seconds multiplied by 1000 milliseconds
	}

	localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry =  (key: string) =>  {

	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null

	if (!itemStr)
		return null

	const item = JSON.parse(itemStr)

	const now = Date.now()
	// compare the expiry time of the item with the current time

	if (now > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)

		return null
	}

	return item.value
}

