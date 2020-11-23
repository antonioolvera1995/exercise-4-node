import { Request, Response } from "express";
import { Authors } from "../models/authors.models";
import { BookAuthors } from "../models/bookauthors";
import { Books } from "../models/books.model";



class BookAuthorsController {


  public async getUser(req: Request, res: Response) {

    try {

      const id = req.params;
      console.log(id);

      const user = await BookAuthors.findByPk(Number(id.id), { raw: true });

      res.send(user);

    } catch (error) {
      res.send(error);
    }

  }

  public async getUsers(req: Request, res: Response) {

    try {

      const user = await BookAuthors.findAll();

      res.send(user);

    } catch (error) {
      res.send(error);
    }

  }


  public async setUsers(req: Request, res: Response) {

    try {
      const request = req.body;
      const newUser = await BookAuthors.create(request);

      res.send(newUser);

    } catch (error) {
      res.send(error);
    }

  }


  public async putUsers(req: Request, res: Response) {

    try {

      const user = await BookAuthors.update(
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

      const user = await BookAuthors.destroy({
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


  public async getAllBooks(req: Request, res: Response) {

    try {




      const awesomeCaptain = await Authors.findAll({
        where: {
          id: Number(req.params.id),
        },
         include:Books
      });
      
      // const user = await BookAuthors.findAll({
      //   where: {
      //     id: Number(req.params.id),
      //   },

      // });

      console.log(req.params.id);

      res.send(awesomeCaptain);



    } catch (error) {

      console.log(error);
      res.send(error);
    }

  }




}



export const bookAuthorsController = new BookAuthorsController();