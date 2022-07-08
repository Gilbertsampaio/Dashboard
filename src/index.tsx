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
          user: 'Gilbert',
          atendimento: 198,
          negociacao: 180,
          naoSeAplica: 39,
          perdidos: 11,
          agendados: 67,
          aproveitamento: 22,
          comparacao: 59,
          ganhos: 39,
          desempenho: 75
        },
        {
          id: 2,
          user: 'Marcio',
          atendimento: 235,
          negociacao: 114,
          naoSeAplica: 89,
          perdidos: 161,
          agendados: 687,
          aproveitamento: 242,
          comparacao: 19,
          ganhos: 37,
          desempenho: 71
        },
        {
          id: 3,
          user: 'Sampaio',
          atendimento: 138,
          negociacao: 280,
          naoSeAplica: 32,
          perdidos: 12,
          agendados: 27,
          aproveitamento: 22,
          comparacao: 53,
          ganhos: 33,
          desempenho: 35
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