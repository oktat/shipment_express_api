import Thing from '../models/thing.js'

const ThingController = {
    async index(req, res) {
        try {
            ThingController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const things = await Thing.findAll()
        res.status(200)
        res.json({
            success: true,
            data: things
        })
    }
}

export default ThingController