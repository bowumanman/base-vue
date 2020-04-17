let url;
switch(process.env.NODE_ENV) {
    case 'development':
        url = 'http://119.254.13.176:8004/capsys-jlgq-test';
        break;
    case 'test':
        url = 'http://119.254.13.176:8004/capsys-jlgq-test';
        break;
    case 'prod':
        url = 'http://119.254.13.176:8004/capsys-jlgq-test';
        break;
    default: 
        url = 'http://119.254.13.176:8004/capsys-jlgq-test';           
}
export default url;