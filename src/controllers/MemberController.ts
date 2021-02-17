/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Member from '../models/Member'

class MemberController {
  async create (req: Request, res: Response) {
    const repository = getRepository(Member)

    const { name, email, password } = req.body

    const memberVerify = await repository.findOne({ where: { email } })
    
    if ( memberVerify) {
      return res.sendStatus(409)
    }

    const memberSaved = await repository.save(req.body)

    return res.status(201).json(memberSaved)
    }

  async index (req: Request, res: Response) {
    const repository = getRepository(Member)

    const MemberListAll = await repository.find()

    return res.json(MemberListAll)
  }
  
  async findById (req: Request, res: Response) {
    const repository = getRepository(Member)

    const memberId = parseInt(req.params.id)
    
    const memberFindId = await repository.findOne({ id: memberId })
   
    if (!memberFindId) {
      return res.sendStatus(404)
    }

    return res.status(200).json(memberFindId)
  }
  
  async delete (req: Request, res: Response) {
    const repository = getRepository(Member)

    const memberId = parseInt(req.params.id)

    await repository.delete( memberId )

    return res.sendStatus(204)

  }
}

export default MemberController
