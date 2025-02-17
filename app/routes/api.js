import Router from 'express'
const router = Router()

import AuthController from '../controllers/authcontroller.js';
import UserController from '../controllers/usercontroller.js';
import ShipmentController from '../controllers/shipmentcontroller.js';
import verifyToken from '../middlewares/authjwt.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)

router.get('/shipments', ShipmentController.index)
router.post('/shipments', [verifyToken], ShipmentController.create)
router.put('/shipments/:id', [verifyToken], ShipmentController.update)
router.delete('/shipments/:id', [verifyToken], ShipmentController.delete)

export default router
