let cart = document.querySelectorAll(".cart-btn");
let product = [
    {
        name: 'Iphone 14',
        price: '$999',
        incart: 0

    },
    {
        name: 'Iphone 14 Pro',
        price: '$1099',
        incart: 0

    },
    {
        name: 'Iphone 14 Promax',
        price: '$1299',
        incart: 0

    },
    {
        name: 'Pink Shirt',
        price: '$12.00',
        size: 'M',
        incart: 0

    },
    {
        name: 'Polo Shirt',
        price: '$12.00',
        size: 'M',
        incart: 0

    },
    {
        name: 'White Shirt',
        price: '$12.00',
        size: 'M',
        incart: 0

    }
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers){
        document.querySelector('.icons span').textContent = productNumbers;
    }
}


function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector('.icons span').textContent = productNumbers + 1; 
  } else{
    localStorage.setItem("cartNumbers", 1);
    document.querySelector('.icons span').textContent = 1;
  }

}

onLoadCartNumbers();