import * as express from 'express'
import { Request, Response } from 'express'
import CustomerController from '../controllers/CustomerController'
import ProductController from '../controllers/ProductController'
import TransactionController from '../controllers/TransactionController'
import verifyToken from '../middleware/VerifyToken'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!")
})

router.post("/register", CustomerController.register)
router.post("/login", CustomerController.login)
router.get("/customers", CustomerController.find)
router.patch("/customer/:id", CustomerController.update)
router.delete("/customer/:id", CustomerController.delete)

router.get("/product", ProductController.find)
router.post("/product", ProductController.create)
router.patch("/product/:id", ProductController.update)
router.delete("/product/:id", ProductController.delete)

router.get("/transaction", verifyToken, TransactionController.find)
router.post("/transaction", verifyToken, TransactionController.create)
router.post("/transaction/:id", verifyToken, TransactionController.update)
router.post("/transaction/:id", verifyToken, TransactionController.delete)

export default router
