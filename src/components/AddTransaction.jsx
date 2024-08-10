import { useContext, useState } from 'react';
import TransactionList from './TransactionList';
import ThemeContext from '../contexts/ThemeContext';

export default function AddTransaction() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('Income');
  const [transactions, setTransactions] = useState([]);
  const theme = useContext(ThemeContext).theme;

  function addTransaction(e) {
    e.preventDefault();
    setTransactions([...transactions, { date, description, amount, type }]);
    setDate('');
    setDescription('');
    setAmount(0);
    setType('Income');
  }

  function deleteTransaction(index) {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  }

  return (
    <div className={`${theme}-theme m-3`}>
      <h2>Add Transaction</h2>
      <form className="mb-5" onSubmit={addTransaction}>
        <div className="d-flex flex-column align-items-start mb-2">
          <label htmlFor="date" className="mb-1">Date:</label>
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="d-flex flex-column align-items-start mb-2">
          <label htmlFor="description" className="mb-1">Description:</label>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="d-flex flex-column align-items-start mb-2">
          <label htmlFor="amount" className="mb-1">Amount:</label>
          <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="d-flex flex-column align-items-start mb-4">
          <label htmlFor="type" className="mb-1">Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}