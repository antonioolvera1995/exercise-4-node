import { Router } from "express";
import { bookAuthorsController } from "../controllers/bookauthors.controllers";


class BookAuthorsRoutes {

    public router: Router = Router();

    constructor() {


        this.router.get('/:id',bookAuthorsController.getUser);
        this.router.get('/', bookAuthorsController.getUsers);
        this.router.post('/', bookAuthorsController.setUsers);
        this.router.delete('/:id', bookAuthorsController.deleteUsers);
        this.router.put('/:id', bookAuthorsController.putUsers);
        this.router.get('/authors/:id/books', bookAuthorsController.getAllBooks);

    }

}


export const bookAuthorsRoutes = new BookAuthorsRoutes();
