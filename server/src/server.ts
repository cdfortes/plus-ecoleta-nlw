import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();
const port = 3333;

app.use(express.json())
app.use(routes)


app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// eslint-disable-next-line no-console
app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
