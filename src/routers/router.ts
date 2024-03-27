import UserController from "../controllers/UserController";
import PersonController from "../controllers/PersonController";
import * as express from "express"
import upload from "../middlewares/UploadMiddleware"
import PartaiController from "../controllers/PartaiController";
import path from "path";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = express.Router()

router.get('/users', UserController.find)
router.get('/user/:id', UserController.findById)
router.post('/adduser', UserController.addUser)
router.put('/updateuser/:id', UserController.updateUser)
router.delete('/deleteuser/:id', UserController.deleteUser)

// ----------------------------------------------------------

router.post('/register', PersonController.register)
router.post('/login', PersonController.login)

// ----------------------------------------------------

router.get('/partai/:id', AuthMiddleware.AuthTi, PartaiController.findByID)
router.post('/addpartai', AuthMiddleware.AuthTi, upload.single('logo'), PartaiController.addPartai)
router.put('/uploadpartai/:id', AuthMiddleware.AuthTi, upload.single('logo'), PartaiController.updatePartai)
router.delete('/deletepartai/:id', AuthMiddleware.AuthTi, PartaiController.deletePartai)

router.use('/uploads', express.static(path.join(__dirname, 'uploads')))

export default router