function ExpenseTracker({
    setAmount,
    setType,
    handleAddTransaction,
    transaction,
    amount,
    type,
  }) {
    const totalIncome = transaction.reduce(
      (acc, transaction) =>
        transaction.type === "income" ? acc + Number(transaction.amount) : acc,
      0
    );
  
    const totalExpense = transaction.reduce(
      (acc, transaction) =>
        transaction.type === "expense" ? acc + Number(transaction.amount) : acc,
      0
    );
  
    const balanceAmount = totalIncome - totalExpense;
  
    return (
      <div className="flex flex-col justify-center items-center p-6 space-y-6 max-w-lg mx-auto">
        {/* Summary Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-4 w-full">
          <div className="p-4 px-5 border border-purple-600 rounded-md shadow-lg text-center flex-1">
            <h1 className="text-lg font-medium text-gray-700">Total Income</h1>
            <h1 className="text-2xl font-bold text-green-600">${totalIncome}</h1>
          </div>
          <div className="p-4 px-5 border border-purple-600 rounded-md shadow-lg text-center flex-1">
            <h1 className="text-lg font-medium text-gray-700">Total Expense</h1>
            <h1 className="text-2xl font-bold text-red-600">${totalExpense}</h1>
          </div>
          <div
            className={`p-4 px-5 border border-purple-600 rounded-md shadow-lg text-center flex-1 ${
              balanceAmount > 0 ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <h1 className="text-lg font-medium text-gray-700">Balance</h1>
            <h1
              className={`text-2xl font-bold ${
                balanceAmount > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              ${balanceAmount}
            </h1>
          </div>
        </div>
  
        {/* Input Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Add Amount"
            className="p-3 border border-gray-300 rounded-md shadow-md flex-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-md flex-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button
            onClick={handleAddTransaction}
            className="bg-purple-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-purple-700 transition-all flex-1"
          >
            Submit
          </button>
        </div>
  
        {/* Transactions List */}
        <div className="mt-6 w-full">
          {transaction.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <h1 className="font-semibold text-xl text-gray-700">
                  {index + 1}. ${data.amount}
                </h1>
                <h1
                  className={`font-bold text-xl ${
                    data.type === "income" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {data.type}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default ExpenseTracker;
  