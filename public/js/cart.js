/* <!-- RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 
Author: Nguyen Tung Bao Thach (s3929174), Van Duc Tri (s3978233), Nguyen Duong Truong Thinh (s3914412)
/* Acknowledgement: Acknowledge the resources that you use show in the report. --> */ 

let cart = document.querySelectorAll(".cart-btn");
let product = [
    {
        name: "iPhone 14 Pro Max",
        price: $1099,
        id: 1,
        image: "pro1.png",
        incart: 0

    },
    {
        name: "Samsung Galaxy Z Fold4",
        price: $799,
        id: 2,
        image: "pro2.png",
        incart: 0

    },
    {
        name: "OPPO Find N2 Flip",
        price: $890,
        id: 3,
        image: "pro3.png",
        incart: 0

    },
    {
        name: "Harman Kardon Aura Studio 3 Bluetooth Speaker",
        price: $250,
        id: 4,
        image: "pro4.png",
        incart: 0

    },
    {
        name: "Marshall Acton III Bluetooth Speaker",
        price: $300,
        id: 5,
        image: "pro5.png",
        incart: 0

    },
    {
        name: "Samsung Sound Tower ST90B/XV",
        price: $300,
        id: 6,
        image: "pro6.png",
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