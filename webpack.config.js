//由于webpack是基于node构建的，所有webpack文件中，任何合法的node代码都支持
const path = require("path");
// 导入自动生成HTMl文件的插件
let htmlWebpackPlugin = require('html-webpack-plugin');
//1.向外暴露一个配置对象
module.exports = {
    //配置打包模式为开发模式
    mode:'development',
    //使用webpack打包哪一个文件
    entry: path.join(__dirname,'./src/index.js'),
    //将打包好的文件输出到哪一个目录
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'main.js'//指定输出文件的名称
    },
    //配置命令参数的第二种方式
    devServer:{
        open:true,//自动打开浏览器
        port:5000,
        contentBase:'src',//指定托管的根目录
        hot:true//启用热更新第一步
    },
    plugins:[//所有webpack插件都配置在这里
        // new webpack.HotModuleReplacementPlugin()
        // new htmlWebpackPlugin({
        //     //指定模板文件的路径
        //     template:path.join(__dirname,'./src/index.html'),
        //     //设置生成在内存中页面的名称
        //     fiename:'index.html'
        // })
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        })
    ],
    //配置所有第三方node模块的
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|jpeg|svg)$/, use: ['url-loader?limit=28340&name=[hash:8][name].[ext]']},

            //base64编码的图片:①针对于简单的②减少一次http的请求
            //参数① ?limit=图片大小的字节 若超过此字节-->就不会转成base64编码格式了
            //hash值:32位 可以看成身份证,DNA，解决唯一
            //参数② name=[name],[ext]显示自己的图片名字
            //解决图片名不重复，配置hash值 name=[hash:8][name].[ext]
            //配置字体图标路径
            {test:/\.(ttf|woff2|woff|eot|svg)$/,use:['url-loader']},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            //注意:配置babel的loader规则时，必须把node_modules排除，防止把node_modules中的js也转换了
            { test: /\.vue$/, use: 'vue-loader' },
            //配置less
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        ]
    },
    //配置 修改Vue被导入时包的路径
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}