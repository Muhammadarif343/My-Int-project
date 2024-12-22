const wraper = document.querySelector(".sliderwraper")
const menuItems = document.querySelectorAll(".menuitem");
const products = [
    {
        id: 1,
        title: "Face Cream",
        price: 50,
        Img: "./img/cream.webp",
    },
    {
        id: 2,
        title: "FaceWash",
        price: 25,
        Img: "./img/slidr2.png",
    },
    {
        id: 3,
        title: "Serums",
        price: 35,
        Img: "./img/slider3.webp",
    },
    {
        id: 4,
        title: "Hair Oil",
        price: 30,
        Img: "./img/slidr4-removebg.png",
    },
    {
        id: 5,
        title: "Shampoo",
        price: 23,
        Img: "./img/slider5-removebg-preview.png",
    },
]
let choosenproduct = products[0]

const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproducttypes = document.querySelectorAll(".type");
menuItems.forEach((item , index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wraper.style.transform = `translateX(${-100 * index}vw)`
        // Change the choosen products
        choosenproduct = products[index];
        // Change text of current title
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$" + choosenproduct.price;
        currentproductimg.src = choosenproduct.Img
        })
    });
        //  Open and close payment Card
        const productbutton = document.querySelector(".productbutton");
        const close = document.querySelector(".close");
        const payment = document.querySelector(".payment");
        productbutton.addEventListener("click",()=>{
            payment.style.display="flex"
        })
        close.addEventListener("click",()=>{
            payment.style.display="none"
        })