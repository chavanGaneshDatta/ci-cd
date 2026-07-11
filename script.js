document.getElementById('calc-btn').addEventListener('click', () => {
  const result = add(5, 3); // calls the function from utils.js
  document.getElementById('demo').textContent = `Result: ${result}`;
});
