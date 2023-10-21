import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['inudwiudjwinsmkallaancnbxtreea'] }));

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
