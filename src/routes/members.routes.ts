import { Router } from 'express'
import MemberController from '../controllers/MemberController'


const router = Router()
const memberController = new MemberController()

router.post('/members', memberController.create)
router.get('/members', memberController.index)
router.get('/members/:id', memberController.findById)
router.delete('/members/:id', memberController.delete)

export default router
