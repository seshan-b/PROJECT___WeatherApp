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
}

const updateCity = async (city) => {
	// Assign variables
}

cityForm.addEventListener('submit', (e) => {
	// Prevent default
	e.preventDefault()

	// Assign variables
})
