import {create} from 'dva-core';
import createLoading from 'dva-loading';
import Models from '@/model';

const app = create();

Models.forEach(model => {
  app.model(model);
});

app.use(createLoading());

app.start();

export default app._store;
