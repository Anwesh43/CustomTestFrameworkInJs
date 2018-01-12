class TestCase{
    constructor(tag,cb) {
        this.cb = cb
        this.tag = tag
    }
    test() {
        try {
            this.cb()
            return true
        }
        catch(e) {
            return false
        }
    }
}
class TestCaseRunner  {
    constructor(spec) {
        this.cases = []
        this.spec = spec
        this.failed = 0
        this.success = 0
    }
    it(tag,cb) {
        this.cases.push(new TestCase(tag,cb))
    }
    run() {
        setTimeout(()=>{
            console.log("starting testcases")
            this.startTestLoop()
        },1000)
    }
    startTestLoop() {
        const interval  = setInterval(()=>{
            if(this.cases.length > 0) {
                const testCase = this.cases[0]
                if (testCase.test()) {
                    console.log(`Testcase ${testCase.tag} has passed \u2713`)
                    this.success++
                }
                else {
                    console.log(`Testcase ${testCase.tag} has failed \u00D7`)
                    this.failed++
                }
                this.cases.splice(0,1)
            }
            else {
                clearInterval(interval)
                console.log(`test cases passed ${this.success}`)
                console.log(`test cases failed ${this.failed}`)
            }
        },1000)
    }
}
module.exports = TestCaseRunner
