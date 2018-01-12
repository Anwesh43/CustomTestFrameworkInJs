const TestCaseRunner = require('./TestCaseRunner')
const testCaseRunner = new TestCaseRunner("Testing StringUtil")
const StringUtil = require('./StringUtil')
const assert = {
    deepEqual(val1,val2) {
        if(val1 !== val2) {
            throw "not matching"
        }
    }
}
testCaseRunner.it("concatWithSpaceBetween",function(){
    assert.deepEqual(StringUtil.concatWithSpaceBetween("hello","world"),"hello world")
})
testCaseRunner.it("joinWithSeparator",function(){
    assert.deepEqual(StringUtil.joinWithSeparator(["hello","world"],","),"hello,world")
})
testCaseRunner.it("split",function(){
    assert.deepEqual(StringUtil.split("hello,world",",") , ["hello world"])
})
testCaseRunner.it("captializeWord",function(){
    assert.deepEqual(StringUtil.captializeWord("hello") , "Hello")
})
testCaseRunner.it("capitalizeSentence",function(){
    assert.deepEqual(StringUtil.capitalizeSentence("hello world more in it") , "hello world")
})
testCaseRunner.run()
