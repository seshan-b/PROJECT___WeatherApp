const cityForm = document.querySelector('form')

const card = document.querySelector('.card')

const details = document.querySelector('.details')

const time = document.querySelector('img.time')

const icon = document.querySelector('.icon img')

const updateUI = (data) => {
	// Assign variables
	// const cityDetailsInfo = data.cityDetails
	// const weatherDetailsInfo = data.weatherDetails
	// Destructuring the above object properties so that you don't have to reassign it
	// within the scope of this variable.
	const { cityDetails, weatherDetails } = data
	console.log('Log destructured cityDetails object: ', cityDetails)
	console.log('Log destructured weatherDetails object: ', weatherDetails)

	// Update details template
	details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;c</span>
        </div>
    
    `
	// Update the night / day icon images
	const iconSource = `images/icons/${weatherDetails.WeatherIcon}.svg`
	icon.setAttribute('src', iconSource)

	// let timeSource = null
	// if(weatherDetails.IsDayTime) {
	//     timeSource = 'images/day.svg'
	// } else {
	//     timeSource = 'images/night.svg'
	// }

	// Convert the above to a ternary operator.
	// const result = condition ? 'value 1' : 'value 2'

	let timeSource = weatherDetails.IsDayTime
		? 'images/day.svg'
		: 'images/night.svg'
	time.setAttribute('src', timeSource)

	// Remove the d-none bootstrap class if present
	if (card.classList.contains('d-none')) {
		card.classList.remove('d-none')
	}
}

const updateCity = async (city) => {
	
	// Test
	console.log('Access city: ', city)
	

	// Assign variables
	const cityDetails = await getCity(city)
	const weatherDetails = await getWeather(cityDetails.Key)

	return {
		// cityDetails: cityDetails,
		// weatherDetails: weatherDetails

		// Object Shorthand Notation - instead of the above

	}
}

cityForm.addEventListener('submit', (e) => {
	// Prevent default
	e.preventDefault()

	// Assign variables
})
