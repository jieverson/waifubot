exports.testSomething = function(test) {
    test.expect(1);
    test.ok(false, "this assertion should pass");
    test.done();
};