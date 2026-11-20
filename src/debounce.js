// Trailing-edge debounce that relies on setTimeout alone.
//
// underscore 1.13's _.debounce also compares timestamps from the Date.now it
// captured when it was loaded. Specs fake setTimeout and Date.now
// (advanceClock), so _.debounce never sees enough time pass and does not fire
// there. This keeps the behavior of underscore 1.9's _.debounce.
module.exports = function debounce(func, wait) {
  let timeout = null;

  const debounced = function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};
