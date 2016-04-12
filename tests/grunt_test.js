exports.testPass = function(test){  
    test.ok(true, "this assertion should pass");
    test.done();
};

exports.testFail = function(test) {
    test.ok(false, "this assertion should fail");
    test.done();
};