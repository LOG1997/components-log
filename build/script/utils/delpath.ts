import fs from 'fs'
import { resolve } from 'path'
import { pkgPath } from './paths'

const stayFiles = ['package.json', 'README.md'];

export const delPath = async (path: string) => {
    let files: string[] = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(async (file) => {
            const curPath = resolve(path, file);
            if (fs.statSync(curPath).isDirectory()) {
                if (file != 'node_modules') {
                    await delPath(curPath);
                }

            }
            else {
                if (!stayFiles.includes(file)) {
                    fs.unlinkSync(curPath);
                }
            }
        })
        if (path != `${pkgPath}/logui`) fs.rmdirSync(path);
    }
}