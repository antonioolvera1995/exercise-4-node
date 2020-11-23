import { Router } from "express";
import { booksController } from "../controllers/books.controllers";


class BooksRoutes {

    public router: Router = Router();

    constructor() {


        this.router.get('/:id',booksController.getUser);
        this.router.get('/', booksController.getUsers);
        this.router.post('/', booksController.setUsers);
        this.router.delete('/:id', booksController.deleteUsers);
        this.router.put('/:id', booksController.putUsers);
    }

}


export const booksRoutes = new BooksRoutes();
