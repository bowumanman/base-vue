module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "no-console": 1, //不允许出现console语句
        "no-dupe-args": 2, //函数定义的时候不允许出现重复的参数
        "no-dupe-keys": 2, //对象中不允许出现重复的键
        "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
        "no-empty": 1, //不允许出现空的代码块
        "no-redeclare": 2, //不允许变量重复声明
        "no-var": 0, //使用let和const代替var
        "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
        "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}], //函数定义时括号前的空格
        "space-unary-ops": [2, { "words": true, "nonwords": false}], //一元运算符前后不要加空格
    }
}
