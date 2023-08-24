function calculateNumber(type, a, b) {
  const val1 = Math.round(a);
  const val2 = Math.round(b);

  switch (type) {
    case 'SUM':
      return val1 + val2;
    case 'SUBTRACT':
      return val1 - val2;
    case 'DIVIDE':
      if (val2 === 0) return 'Error';
      return val1 / val2;
    default:
  }
  return 0;
}
module.exports = calculateNumber;
