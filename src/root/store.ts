import {create} from 'dva-core';
import createLoading from 'dva-loading';
import createLogger from 'dva-logger';
import models from '@/model';

const app = create();

models.forEach(model => {
  app.model(model);
});

app.use(createLoading());
app.use(createLogger());

app.start();

export default app._store;
