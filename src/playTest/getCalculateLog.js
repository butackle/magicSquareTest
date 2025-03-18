const initSquare = require("./_initSquare");

const getCalculateLog = (label = "", sum = 0, testValues = initSquare) => {
	return {
		label,
		sum,
		addends: testValues.map(({value}) => value).join()
	}
}

module.exports = getCalculateLog