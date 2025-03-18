/**
 * 標準入力を読み込む
 *
 */
const readStdin = async () => {
	const buffers = [];

	for await (const chunk of process.stdin) {
		buffers.push(chunk)
	}

	const buffer = Buffer.concat(buffers)

	return buffer.toString()
}

module.exports = readStdin;