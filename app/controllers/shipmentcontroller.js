import Shipment from '../models/shipment.js'

const ShipmentController = {
    async index(req, res) {
        try {
            ShipmentController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const shipments = await Shipment.findAll()
        res.status(200)
        res.json({
            success: true,
            data: shipments
        })
    },
    async create(req, res) {
        try {
            ShipmentController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const shipment = await Shipment.findOne({
            where: { shipmentId: req.body.shipmentId }
        })
        if(shipment) {
            res.status(400)
            res.json({
                success: false,
                message: 'Error! Shipment already exists!'
            })
            return
        }
        const newshipment = {
            shipmentId: req.body.shipmentId,
            sentDate: req.body.sentDate,
            endDate: req.body.endDate,
            addressee: req.body.addressee,
            targetCity: req.body.targetCity
        }
        const result = await Shipment.create(newshipment);

        res.status(201).json({
            succes: true,
            data: result
        })

    },
    async update(req, res) {
        try {
            ShipmentController.tryUpdate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryUpdate(req, res) {
        const shipment = await Shipment.findOne({
            where: { shipmentId: req.body.shipmentId }
        })
        if(!shipment) {
            res.status(404)
            res.json({
                success: false,
                message: 'Error! Shipment not found!'
            })        
        }
        shipment.shipmentId = req.body.shipmentId
        shipment.sentDate = req.body.sentDate
        shipment.endDate = req.body.endDate
        shipment.addressee = req.body.addressee
        shipment.targetCity = req.body.targetCity
        await shipment.save()
        res.status(200)
        res.json({
            success: true,
            message: 'Shipment updated!'
        })
    },
    async delete(req, res) {
        try {
            ShipmentController.tryDelete(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDelete(req, res) {
        const shipment = await Shipment.findOne({
            where: { id: req.params.id }
        })
        if(!shipment) {
            res.status(404)
            res.json({
                success: false,
                message: 'Error! Shipment not found!'
            })
        }
        await shipment.destroy()
        res.status(200)
        res.json({
            success: true,
            message: 'Shipment deleted!'
        })
    }
}

export default ShipmentController