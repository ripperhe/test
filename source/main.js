var a = require('./a');

$log.info('test main 已加载');

function test(x) {
    console.log(x);
    $log.info('test 方法被调用');
}

function calla(x) {
    a.go(x);
}