class helloController {
    async index(req , res) {
        return res.json('ola mundo')
    }
}

export default new helloController()