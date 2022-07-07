import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NovoModalTransacao } from "./components/novoModalTransacao";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from '../src/hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [inNewTransationModalOpen, setInNewTransationModalOpen] = useState(false);

  function abrirModalTransacao() {
    setInNewTransationModalOpen(true);
  }

  function fecharModalTransacao() {
    setInNewTransationModalOpen(false);
  }

  return (
    <TransactionProvider>

      <Header onAbrirModalTransacao={abrirModalTransacao} />

      <Dashboard />

      <NovoModalTransacao 
        isOpen={inNewTransationModalOpen} 
        onRequestClose={fecharModalTransacao}
      />

      <GlobalStyle />
      
    </TransactionProvider>
  );
}