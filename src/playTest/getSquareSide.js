const initSquare = require("./_initSquare");

/**
 * 正方形の一辺の長さを取得する
 *
 */
const getSquareSide = (magicSquare = initSquare) => {
	const row = Math.max(...magicSquare.map(({row}) => row));
	const column = Math.max(...magicSquare.map(({column}) => column));
	if (row !== column) {
		console.error("error magic square", magicSquare);
		throw new Error(`row and column should be the same: ${row} !== ${column}`)
	}

	return row; // 0から始まるので実際より一つ少ない
}

module.exports = getSquareSide