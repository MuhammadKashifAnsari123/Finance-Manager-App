import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExpenseTracker from './components/ExpenseTracker'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [transaction, setTransaction] = useState([]);

  const handleAddTransaction = () => {
      setTransaction([...transaction, { amount, type }]);
      setAmount('');
      setType("income")
  }
return (
<>  
  <ExpenseTracker 
  amount={amount}
  type={type}
  setAmount={setAmount}
  setType={setType}
  handleAddTransaction={handleAddTransaction}
  transaction={transaction}
  />
</>

)
}

export default App
