function calculate() {
  
  parameter = (function checkParameter() {
    let size = document.getElementById('size').value;
    let width = document.getElementById('width').value;
    let thick = document.getElementById('thick').value;
    let color = document.getElementById('color').value;
    let profile = document.getElementById('profile').checked;
    return console.log([size, width, thick, color, profile])
  });
  parameter();
  let sizeCoef = (function (size, thick) {
    if (thick > 1.7) {
      return ((size + thick) * 3.14) + 0.4;
    } else {
      return (size + thick) * 3.14;
    }
  })
console.log(sizeCoef);

}
let go = document.getElementById('calculate');
if (go) {
  document.querySelector('#calculate').addEventListener('click', calculate);
}


