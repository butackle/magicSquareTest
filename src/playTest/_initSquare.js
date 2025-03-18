// 形の代わり

const initSquare = [{value: 0, row: 0, column: 0, cell: "0"}];

const freezeInitSquare = Object.freeze(initSquare.map((s) => Object.freeze(s)));

module.exports = freezeInitSquare