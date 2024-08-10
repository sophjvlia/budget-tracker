import { formatDate } from '../utils/formatDate'; 

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul className="list-group mt-4">
        {transactions.map((item, index) => (
          <li key={index} className={`d-flex justify-content-between py-3 list-group-item ${item.type === 'Income' ? 'list-group-item-primary' : 'list-group-item-warning'}`}>
            <div>
              <strong>{formatDate(item.date)}</strong><em className="ms-2">{item.type}</em><br/>
              {item.description} - RM{item.amount}
            </div>
            <button type="button" className="btn btn-danger ms-auto" onClick={() => deleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}