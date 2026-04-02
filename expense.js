const expenses = [];

function addExpense() {
  const item = document.getElementById('item').value.trim();
  const amount = Number(document.getElementById('amount').value);

  if (!item || amount <= 0) {
    alert('Please enter a valid item and amount.');
    return;
  }

  expenses.push({ item, amount });
  renderExpenses();

  document.getElementById('item').value = '';
  document.getElementById('amount').value = '';
}

function renderExpenses() {
  const list = document.getElementById('expenseList');
  const total = document.getElementById('total');
  list.innerHTML = '';

  let sum = 0;

  expenses.forEach(expense => {
    sum += expense.amount;
    const li = document.createElement('li');
    li.textContent = `${expense.item}: $${expense.amount.toFixed(2)}`;
    list.appendChild(li);
  });

  total.textContent = `Total Spent: $${sum.toFixed(2)}`;
}