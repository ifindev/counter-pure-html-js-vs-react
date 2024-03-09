// #region STATE
let count = 0;
// #endregion

// #region RENDERERS
function renderCounter() {
  const countElem = document.getElementById('count');
  countElem.innerText = count;
}

function render() {
  renderCounter();
}

render();
// #endregion

// #region ACTIONS
function handleAdd() {
  count += 1;
  render();
}

function handleSubstract() {
  count -= 1;
  render();
}
// #endregion
