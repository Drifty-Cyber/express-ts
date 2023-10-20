import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    mesage: 'Working Route',
  });
});

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
