class RequestHandler {
    echo(req,res) {
        res.send(req.params.value)
    }
}
const requestHandler = new RequestHandler()
module.exports = requestHandler
