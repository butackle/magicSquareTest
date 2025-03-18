import * as fs from 'fs';
import * as path from 'path';

/**
 * フォルダ内のファイルのフルパスリストを取得する
 *
 */
const getFolderFileFullPathList = (testPath) => {
	const folderContentList = fs.readdirSync(testPath, {withFileTypes: true});
	const folderFileList = folderContentList.filter(dirent => dirent.isFile());
	return folderFileList.map(dirent => path.join(testPath, dirent.name))
}

export default getFolderFileFullPathList