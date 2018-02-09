var webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:
                [{ 
                    loader: "babel-loader",
                    query: {
                        presets: ["latest", "stage-0", "react"]
                    }
                }],
                exclude: /node_modules/,

            }
        ]
    }
}