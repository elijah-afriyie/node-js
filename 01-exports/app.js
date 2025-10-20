const userInfo = require('./userInfo');

userInfo.getFullName({
	firstName: 'Kirk',
	lastName: 'Logan',
});

userInfo.isAdult({
	age: 28,
})

userInfo.isAdult({
	age: 12,
})