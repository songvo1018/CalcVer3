function calculate() {  
  p = {
    size : parseFloat(document.getElementById('size').value),
    width : parseFloat(document.getElementById('width').value),
    thick : parseFloat(document.getElementById('thick').value),
    color : document.getElementById('color').value,
    profile : document.getElementById('profile').checked,
  };
  let sizeCoef = (function (size, thick) {
    if (thick > 1.7) {
      return ((size + thick) * 3.14) + 0.4;
    } else if (thick == 1.2) {
      return ((size + (thick - 0.2)) * 3.14)
    } else {
      return (size + thick) * 3.14;
    }
  })(p.size, p.thick);
  let widthCoef = (function (sizeCoef, width) {
    if (width > 6) {
      return (sizeCoef + 0.4);
    } else if (width > 4) {
      return (sizeCoef + 0.2);
    } else if (width < 4 && width > 2) {
      return sizeCoef;
    } else {
      return (sizeCoef - 0.3);
    }
  })(sizeCoef, p.width);
  let colorCoef = (function (widthCoef, color) {
    if (color === 'White') {
      return widthCoef + 0.3;
    } else if (color === 'Red') {
      return widthCoef;
    } else if (color === 'Lemon') {
      return widthCoef - 0.25;
    }
  })(widthCoef, p.color);
  let profileCoef = (function (colorCoef, profile) {
    if (profile) {
      return colorCoef - 0.2
    } else {
      return colorCoef;
    }
  })(colorCoef, p.profile);
  let res = {
    length: profileCoef.toFixed(2),
    size: p.size,
    width: p.width,
    thick: p.thick,
    color: p.color,
    profile: p.profile
  };
console.log(res)

}
let go = document.getElementById('calculate');
if (go) {
  document.querySelector('#calculate').addEventListener('click', calculate);
}

