import express from "express";
import {indexRoutes} from "./routes/index.routes";
import {booksRoutes} from "./routes/books.routes";

const app = express();

app.set('port', 4200);

app.use(express.json());

app.use('/books', booksRoutes.router);
app.use('/', indexRoutes.router);

app.listen(app.get('port'), () => {

    console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});