import { Request, Response } from "express";
import { Users } from "../models/Users.model";


class UsersController {


  public async getUser(req: Request, res: Response) {

    try {

      const id = req.params;
      console.log(id);

      const user = await Users.findByPk(Number(id.id), { raw: true });

      res.send(user);

    } catch (error) {
      res.send(error);
    }

  }

  public async getUsers(req: Request, res: Response) {

    try {

      const user = await Users.findAll();

      res.send(user);

    } catch (error) {
      res.send(error);
    }

  }


  public async setUsers(req: Request, res: Response) {

    try {
      const request = req.body;
      const newUser = await Users.create(request);

      res.send(newUser);

    } catch (error) {
      res.send(error);
    }

  }


  public async putUsers(req: Request, res: Response) {

    try {

      const user = await Users.update(
        {
         
          name: req.body.name,
          email: req.body.email
        },
        {
          where: {
            id: req.params.id
          }
        }
      );

      res.json(user);


    } catch (error) {
      res.send(error);
    }

  }




  public async deleteUsers(req: Request, res: Response) {

    try {

      const user = await Users.destroy({
        where: {
          id: Number(req.params.id)
        }
      });

      console.log(req.params.id);
      
      res.sendStatus(200);



    } catch (error) {
      res.send(error);
    }

  }







}

export const usersController = new UsersController();