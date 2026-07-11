// Pure function – easy to unit test
function add(a, b) {
  return a + b;
}

// Expose it globally for browser use and export for Node.js tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add };
}
