import {create} from 'dva-core';
import createLoading from 'dva-loading';
import models from '@/model';

const app = create();

models.forEach(model => {
  app.model(model);
});

app.use(createLoading());

app.start();

export default app._store;
