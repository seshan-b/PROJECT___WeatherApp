// https://developer.accuweather.com/
// username: seshanb
// email: seshan.b@gmail.com

const apiKey = 'ifINfoGkGEN5EjqVkuAUkzBbr4nqLVTH'

// Get weather information
const getWeather = async (locationId) => {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
	const query = `${locationId}?apikey=${apiKey}`

	const getResponse = await fetch(base + query)
	const data = await getResponse.json()

	console.log('Response data: ', data)

	return data[0]
}

// Get city information
const getCity = async (city) => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
	const query = `?apikey=${apiKey}&q=${city}`

	const getResponse = await fetch(base + query)

	const data = await getResponse.json()

	console.log('Response data: ', data)

	return data[0]
}

// Testing Api
getCity('auckland')
.then(data => {
    return getWeather(data.Key)
})
.then(data => {
    console.log('Data from weather Api:', data)
})
.catch(error => console.log(error.message))


