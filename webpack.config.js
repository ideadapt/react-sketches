var path = require('path');

module.exports = {
    entry: [
      //'webpack/hot/dev-server',
      //'webpack-dev-server/client?http://localhost:8000',
      path.resolve(__dirname, 'app/main.tsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [{
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        exclude: /node_modules/
        },{
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },{
        test: /\.scss$/,
        loader: 'style!css!sass'
      },{
        test: /\.tsx$/,
        loader: 'ts-loader'
      }]
    },
    ts:{
      compilerOptions:{
        jsx: 'react'
      }
    }
};
