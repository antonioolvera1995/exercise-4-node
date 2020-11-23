import { Request, Response } from "express";
import { Books } from "../models/books.model";


class BooksController {


  public async getUser(req: Request, res: Response) {

    try {

      const id = req.params;
      console.log(id);

      const user = await Books.findByPk(Number(id.id), { raw: true });

      res.send(user);

    } catch (error) {
      res.send(error);
    }

  }

  public async getUsers(req: Request, res: Response) {

    try {

      const user = await Books.findAll();

      res.send(user);

    } catch (error) {
      res.send(error);
    }

  }


  public async setUsers(req: Request, res: Response) {

    try {
      const request = req.body;
      const newUser = await Books.create(request);

      res.send(newUser);

    } catch (error) {
      res.send(error);
    }

  }


  public async putUsers(req: Request, res: Response) {

    try {

      const user = await Books.update(
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

      const user = await Books.destroy({
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

export const booksController = new BooksController();