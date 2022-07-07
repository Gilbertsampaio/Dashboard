import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transacao: Model,
  },

  seeds(server) {
    server.db.loadData({
      transacaos: [
        {
          id: 1,
          title: 'Registro nº 1',
          type: 'colocada',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Registro nº 2',
          type: 'retirada',
          category: 'Dev',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00')
        },
        {
          id: 3,
          title: 'Registro nº 3',
          type: 'retirada',
          category: 'Dev',
          amount: 8300,
          createdAt: new Date('2021-02-14 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transacoes', () => {
      return this.schema.all('transacao');
    })

    this.post('/transacoes', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transacao', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/