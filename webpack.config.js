'use strict';
const path = require('path');
//Plugins 
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
//Node Path 
const nodeModulesPath = path.join(__dirname, 'node_modules');
// Web application root directory
const webRootPath = path.resolve(__dirname);
const srcPath = path.join(__dirname,'src');
const appPath = path.join(srcPath, 'app');

// Path where files will be copied over 
const distPath =   path.join(webRootPath, 'dist');
// Define paths for libraries, javascript & css 
const libsPath= path.join(distPath,'libs');
const jsPath = path.join(distPath, 'js');
const cssPath = path.join(distPath, 'css');
module.exports = {
    context: appPath,
    optimization: {
        minimize: true
    },
    entry: {        
        main: './main.ts' 
    },
    output: {
        publicPath: distPath,
        path: jsPath,
        filename: '[name].js'
    },
    module: { //this section you add the plugins
       rules:[
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: [
                 { loader: "style-loader" },
                 { loader: "css-loader" },
                 {loader:"sass-loader"}
            ]
            }
       ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [  
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(nodeModulesPath,'/jquery/'),
                    to: path.join(libsPath,'/jquery/') 
                },
                {
                    from: path.join(nodeModulesPath,'/bootstrap/'), 
                    to: path.join(libsPath,'/bootstrap/') 
                },
                {
                    from: path.join(nodeModulesPath,'/toastr/'), 
                    to: path.join(libsPath,'/toastr/') 
                },
                {
                    from: path.join(srcPath,'/images/'), 
                    to: path.join(distPath,'/images/') 
                },
                {
                    from: path.join(srcPath,'/css/'), 
                    to: path.join(distPath,'/css/') 
                }
            ]
        })  
    ]
};