import { Router } from "express";
import { authorsController } from "../controllers/authors.controllers";


class AuthorsRoutes {

    public router: Router = Router();

    constructor() {


        this.router.get('/:id',authorsController.getUser);
        this.router.get('/', authorsController.getUsers);
        this.router.post('/', authorsController.setUsers);
        this.router.delete('/:id', authorsController.deleteUsers);
        this.router.put('/:id', authorsController.putUsers);
    }

}


export const authorsRoutes = new AuthorsRoutes();
