const assert = require("node:assert");

const createMagicSquareObject = require("./createMagicSquareObject");
const getSquareSide = require("./getSquareSide");
const getCalculateLog = require("./getCalculateLog");
const initSquare = require("./_initSquare");

// 和を計算する
const calcSum = (magicSquare = initSquare) => magicSquare.reduce((acc, {value}) => acc + value, 0);


/**
 * 魔方陣のテスト
 *
 */
const playTest = (testData = "") => {
	// 魔方陣の計算をするためのオブジェクトを作成
	const magicSquare = createMagicSquareObject(testData);

	// 正方形の辺の長さを取得
	const squareSide = getSquareSide(magicSquare);
	console.log(`The length of the square is ${squareSide + 1}`);

	// 行・列の和を取得
	const calcLog = [];
	for (let i = 0; i <= squareSide; ++i) {
		// 行の部分の和を取得
		const testRow = magicSquare.filter(({row}) => row === i);
		const rowSum = calcSum(testRow);
		calcLog.push(getCalculateLog(`row${i}`, rowSum, testRow))

		// 列の部分の和を取得
		const testColumn = magicSquare.filter(({column}) => column === i);
		const columnSum = calcSum(testColumn);
		calcLog.push(getCalculateLog(`column${i}`, columnSum, testColumn))
	}

	// 対角線の部分の和を取得
	const testDiagonal1 = magicSquare.filter(({row, column}) => row === column);
	const diagonal1Sum = calcSum(testDiagonal1);
	calcLog.push(getCalculateLog("diagonal1", diagonal1Sum, testDiagonal1))
	const testDiagonal2 = magicSquare.filter(({row, column}) => row + column === squareSide);
	const diagonal2Sum = calcSum(testDiagonal2);
	calcLog.push(getCalculateLog("diagonal2", diagonal2Sum, testDiagonal2))

	// 結果を表示
	calcLog.sort((a, b) => a.label.localeCompare(b.label));
	console.table(calcLog);

	// 値が正しいかどうかを確認
	const isAllEqual = calcLog.every(({sum}, _, logs) => sum === logs[0].sum);
	if (isAllEqual) {
		console.log(" ------ This a magic square!!! ------ ");
	} else {
		console.warn(" ------ This is not a magic square... ------ ");
	}
}

module.exports = playTest