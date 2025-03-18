import * as fs from "node:fs";
import * as path from "node:path";
import readStdin from "./src/readStdin.js";
import getFolderFileFullPathList from "./src/getFolderFileFullPathList.js";
import playTest from "./src/playTest/index.js";

const outputMode = (input_mode, args = []) => console.log({input_mode}, ...args);
const playTestForPath = (testPath = "") => {
	const testData = fs.readFileSync(testPath, "utf-8");
	playTest(testData);
}

// 標準入力が渡された場合
if (!process.stdin.isTTY) {
	const value = await readStdin();
	outputMode("stdin");
	console.log(value)
	playTest(value);

	process.exit(0);
}

// 引数が渡された場合
const testPathArgv = process.argv[2];
const testPath = path.isAbsolute(testPathArgv) ? testPathArgv : path.join(process.cwd(), testPathArgv);
if (!fs.existsSync(testPath)) {
	console.error(`Error: test path not found: ${testPath}`);
	process.exit(1);
}

const testPathStatus = fs.statSync(testPath);

// フォルダモード
if (testPathStatus.isDirectory()) {
	outputMode("directory", [testPath]);
	getFolderFileFullPathList(testPath).forEach((fullPath) => {
		console.log("====================================================================================")
		console.log("test file: ", fullPath);
		playTestForPath(fullPath);
	});
}

// ファイルモード
if (testPathStatus.isFile()) {
	outputMode("file", [testPath]);
	playTestForPath(testPath);
}





