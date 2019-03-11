let isCalculated = false;
let btnsIds = ['btn0', 'btn1', 'btnSum', 'btnSub', 'btnMul', 'btnDiv'];

document.getElementById('btns').addEventListener('click', (event) => {
  let target = event.target;
  let res = document.getElementById('res');

  if (btnsIds.includes(target.id)) {
    if (isCalculated) res.innerHTML  = '';
    isCalculated = false;
    res.innerHTML = res.innerHTML + target.innerHTML;
  }

  if (target.id === 'btnClr') {
    res.innerHTML = '';
  }

  if (target.id === 'btnEql') {
    isCalculated = true;
    let result = res.innerHTML.replace(/[01]+/g, (substring) => {
      return parseInt(substring, 2);
    });
    res.innerHTML = Math.floor(eval(result)).toString(2);
  }
});

