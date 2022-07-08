import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transacao {
    id: number,
    user: string,
    atendimento: number,
    negociacao: number,
    naoSeAplica: number,
    perdidos: number,
    agendados: number,
    aproveitamento: number,
    comparacao: number,
    ganhos: number,
    desempenho: number
}
interface TransacaoInput {
    user: string,
    atendimento: number,
    negociacao: number,
    naoSeAplica: number,
    perdidos: number,
    agendados: number,
    aproveitamento: number,
    comparacao: number,
    ganhos: number,
    desempenho: number
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transacoes: Transacao[];
    createTransaction: (Transacao: TransacaoInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    useEffect(() => {
        api.get('transacoes')
            .then(response => setTransacoes(response.data.transacaos))
    }, []);

    async function createTransaction(transacaoInput: TransacaoInput) {
        const response = await api.post('/transacoes', {
            ...transacaoInput,
            createdAt: new Date(),
        })
        const { transacao } = response.data;

        setTransacoes([
            ...transacoes, 
            transacao,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transacoes, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}