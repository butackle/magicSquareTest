/**
 * 魔方陣オブジェクトを生成する
 *
 */
const createMagicSquareObject = (testData = "") => {
	const rows = testData.trim().split("\n").map((row) => {
		const trimRow = row.trim();
		return trimRow.split(/\s+/g)
	});

	const magicSquare = rows.map((row, rowIndex) => row.map((cell, columnIndex) => {
		const value = Number(cell);
		if (!Number.isInteger(value)) {
			throw new Error(`Invalid value: ${cell} at row: ${rowIndex + 1}, column: ${columnIndex + 1}`);
		}

		return {
			value,
			cell,
			row: rowIndex,
			column: columnIndex
		}
	}));


	return magicSquare.flat();
}

module.exports = createMagicSquareObject