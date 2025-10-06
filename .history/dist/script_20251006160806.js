





//variable declaration for bar id
const bar = document.getElementById('fa-bars');

const close = document.getElementById('close');

//variable declaration for navbar class
const nav = document.querySelector('.navbar');

// Condition to check if the navbar is opened or not by clicking on the bar
bar.addEventListener("click", ()=>{
    nav.classList.add("active");
});

// if close icon is clicked, remove the sidenav
close.addEventListener("click", (e)=>{
    e.preventDefault();
    nav.classList.remove("active");
});
