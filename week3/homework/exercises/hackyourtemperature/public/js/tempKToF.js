const tempKToF = (k) => {
  const f = (k - 273.15) * 1.8 + 32;

  return f;
};
module.exports = tempKToF;
