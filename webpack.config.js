const path = require("path");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry :"./src/index.js",
    mode:"development",
    output: {
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader']   //loader从右向左处理
            // },
            {
                test:/\.(sc|c|sa)ss$/,
                use:['style-loader',
                {
                    loader:"css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                      ident: 'postcss',
                      sourceMap: true,
                      plugins: loader => [
                        require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                      ]
                    }
                  },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    }
}