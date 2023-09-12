import { delPath } from "./script/utils/delpath";
import { run } from './script/utils/run';
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "./script/utils/paths";
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';

export const removeDist = () => {
    console.log('remove dist');
    return delPath(`${pkgPath}/logui`);
}
export const buildStyle = () => {
    return src(`${componentPath}/src/**/**.less`)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(dest(`${pkgPath}/logui/lib/src`))
        .pipe(dest(`${pkgPath}/logui/es/src`))
}
//打包组件
export const buildComponent = async () => {
    run('pnpm run build', componentPath);
};
export default series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
);