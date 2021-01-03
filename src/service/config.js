let url;
switch(process.env.NODE_ENV) {
    case 'development':
        url = 'http://testcqcy.capsys.cn';
        break;
    case 'test':
        url = 'http://testcqcy.capsys.cn';
        break;
    case 'prod':
        url = 'http://testcqcy.capsys.cn';
        break;
    default: 
        url = 'http://testcqcy.capsys.cn';           
}
export default url + '/cq-chanye';