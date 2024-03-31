import * as express from "express"
import UserController from "../controllers/UserController"
import TransactionController from "../controllers/TransactionController"
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/users', UserController.find)

router.post('/add-tr', AuthMiddleware.AuthTi, TransactionController.addTransaction)
router.get('/transactions', TransactionController.find)
router.get('/transaction/:id', AuthMiddleware.AuthTi, TransactionController.findById)
router.get('/transaction/user/:id', AuthMiddleware.AuthTi, TransactionController.findByUserId)

export default router