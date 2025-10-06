
// select the menu toggle button (the hamburger icon)
const menuToggle = document.getElementById("menu-toggle");

// Select the navigation links container
const navlinks = document.getElementById("nav-links");

// Add a click event listener to the menu button
menuToggle.addEventListener("click", ()=>{
     // Toggle the visibilty of the navigation links
    // If hidden, tailwind's `hidden` class hides it, removing it

    navlinks.classList.toggle('hidden');

    //optionally toggle animation class 

    // navlinks.classList.toggle("animate-slidedown");
     navlinks.classList.toggle("bg-white");

    // toggle between hamburger and close icon
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");  //Hamburger icon
    icon.classList.toggle("fa-xmark"); //close icon
});
