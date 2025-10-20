function getFullName(user) {
	const person = {
		firstName: user.firstName,
		lastName: user.lastName,
	}
	console.log(`${person.firstName} ${person.lastName}`)
}

function isAdult(user) {
	const userAge = {
		age: user.age,
	}
	if(userAge.age >= 18) {
		console.log('yes, is adult')
	} else {
		console.log('no, isn\'t adult')
	}
}

module.exports = {
	getFullName,
	isAdult
}