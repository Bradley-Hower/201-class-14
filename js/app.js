'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'));
    } else {
      this.allProducts.push(new Product(productNames[i]));
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let stringifiedarraydata = JSON.stringify(this.allProducts);
  localStorage.setItem('storedproductsstring',stringifiedarraydata);
}

AppState.prototype.loadItems = function () {
  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let pulledarraydata = localStorage.getItem('storedproductsstring');
  let parsedarraydata = JSON.parse(pulledarraydata);

  if (parsedarraydata){
    for(let i = 0; i < parsedarraydata.length; i++){
      if (parsedarraydata[i].name === 'sweep'){
        let reconstruct_png_productobject = new Product(parsedarraydata[i].name, 'png');
        reconstruct_png_productobject.timesClicked = parsedarraydata[i].timesClicked;
        reconstruct_png_productobject.timesShown = parsedarraydata[i].timesShown;
        this.allProducts.push(reconstruct_png_productobject);
      } else {
        let reconstruct_productobject = new Product(parsedarraydata[i].name);
        reconstruct_productobject.timesClicked = parsedarraydata[i].timesClicked;
        reconstruct_productobject.timesShown = parsedarraydata[i].timesShown;
        this.allProducts.push(reconstruct_productobject);
      }
    }
  } else {
    this.instantiateProducts();
  }

}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
