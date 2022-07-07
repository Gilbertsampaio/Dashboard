import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transacao {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string;
    createdAt: string;
}

//type TransacaoInput = Omit<Transacao, 'id' | 'createdAt'>;
//type TransacaoInput = Pick<Transacao, 'title' | 'amount' | 'type'| 'category'>;

interface TransacaoInput {
    title: string,
    amount: number,
    type: string,
    category: string;
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