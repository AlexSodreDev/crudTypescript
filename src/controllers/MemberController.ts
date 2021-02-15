/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Member from '../models/Member'

class MemberController {
  async create (req: Request, res: Response) {
    console.log('MemberController:create')
    const repository = getRepository(Member)
    const memberSaved = await repository.save(req.body)
    return res.status(201).json(memberSaved)
  }

  async index (req: Request, res: Response) {
    res.json("MemberController:index")
  }
}
export default MemberController
