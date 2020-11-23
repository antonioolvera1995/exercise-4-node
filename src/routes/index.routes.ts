import { Router } from "express";
import { usersController } from "../controllers/users.controllers";


class Index {

    public router: Router = Router();

    constructor() {


        this.router.get('/:id', usersController.getUser);
        this.router.get('/', usersController.getUsers);
        this.router.post('/', usersController.setUsers);
        this.router.delete('/:id', usersController.deleteUsers);
        this.router.put('/:id', usersController.putUsers);
    }

}


export const indexRoutes = new Index();
