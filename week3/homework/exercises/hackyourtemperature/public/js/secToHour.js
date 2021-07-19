function secToHours(sec) {
  sec = Math.abs(sec);
  return (sec / 3600).toFixed(1);
}
module.exports = secToHours;
