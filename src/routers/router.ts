import * as express from "express"
import UserController from "../controllers/UserController"
import TransactionController from "../controllers/TransactionController"
import AuthMiddleware from "../middlewares/AuthMiddleware";
import WalletController from "../controllers/WalletController";
import CategoryController from "../controllers/CategoryController";
import upload from "../middlewares/UploadMiddleware"
import path from "path"

const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post("/logout", AuthMiddleware.logout)
router.get('/users', UserController.find)

router.post('/addtrans', AuthMiddleware.AuthTi, TransactionController.addTransaction)
router.get('/transactions', TransactionController.find)
router.get('/transaction/:id', AuthMiddleware.AuthTi, TransactionController.findById)
router.get("/findByUserId", AuthMiddleware.AuthTi, TransactionController.findByUserId)
router.get("/findLastMonthTransaction", AuthMiddleware.AuthTi, TransactionController.findLastMonthTransaction)
router.get("/findThisMonthTransaction", AuthMiddleware.AuthTi, TransactionController.findThisMonthTransaction)
router.get("/findFutureTransaction", AuthMiddleware.AuthTi, TransactionController.findFutureTransaction)

router.post("/addCategory", AuthMiddleware.AuthTi, upload.single('image'), CategoryController.addCategory)
router.get("/findCategoryByUserId", AuthMiddleware.AuthTi, CategoryController.findCategoryByUserId)
router.get('/category', CategoryController.findCategory)


router.get("/findWallet", AuthMiddleware.AuthTi, WalletController.findWallet)

router.use("/uploads", express.static(path.join(__dirname, "uploads")))

export default router