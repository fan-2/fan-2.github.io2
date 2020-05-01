//覆盖默认webpack打包配置
const {override, fixBabelImports, addLessLoader} = require("customize-cra");

const path = require("path");
//配置sourceMap
const sourceMapConfig = config => {
    config.devtool = "cheap-module-source-map";
    return config;
};

//配置打包输入位置
const outputConfig = config => {
    config.output.path = path.resolve(__dirname, "./");
    return config;
}
module.exports = override(
    // outputConfig,
    sourceMapConfig,
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        // modifyVars: {'@primary-color': '#ff8727'}  //这里用来配置主题颜色
    })
);
