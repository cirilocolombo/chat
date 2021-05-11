import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body

    const usersService = new UsersService

    const users = await usersService.create(email)

    return res.json(users)
  }
}

export { UsersController }