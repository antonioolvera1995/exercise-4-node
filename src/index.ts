import express from "express";
import {indexRoutes} from "./routes/index.routes";
import {booksRoutes} from "./routes/books.routes";
import { authorsRoutes } from "./routes/authors.routes";
import { bookAuthorsRoutes } from "./routes/bookauthors.routes";

const app = express();

app.set('port', 4200);

app.use(express.json());

app.use('/bookauthors', bookAuthorsRoutes.router);
app.use('/authors', authorsRoutes.router);
app.use('/books', booksRoutes.router);
app.use('/users', indexRoutes.router);

app.listen(app.get('port'), () => {

    console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});