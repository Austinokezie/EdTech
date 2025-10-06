
// select the menu toggle button (the hamburger icon)
// const menuToggle = document.getElementById("menu-toggle");

// Select the navigation links container
// const navlinks = document.getElementById("nav-links");

// // Add a click event listener to the menu button
// menuToggle.addEventListener("click", ()=>{
//      // Toggle the visibilty of the navigation links
//     // If hidden, tailwind's `hidden` class hides it, removing it

//     navlinks.classList.toggle('hidden');

//     //optionally toggle animation class 

//     // navlinks.classList.toggle("animate-slidedown");
//      navlinks.classList.toggle("bg-white");

//     // toggle between hamburger and close icon
//     const icon = menuToggle.querySelector("i");
//     icon.classList.toggle("fa-bars");  //Hamburger icon
//     icon.classList.toggle("fa-xmark"); //close icon
// });





//variable declaration for bar id
const bar = document.getElementById('bar');

const close = document.getElementById('close');

//variable declaration fornav id
const nav = document.getElementsByClassName('navbar');

// Condition to check if the navbar is opened or not by clicking on the bar
if (bar){
    // when bar is clicked an event trigers
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

// if close icon is clicked, remove the sidenav
if (close){
    // when bar is clicked an event trigers
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
