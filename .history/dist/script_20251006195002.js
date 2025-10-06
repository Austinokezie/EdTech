





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


window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 20) {
    header.style.backdropFilter = "blur(14px)";
    header.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
  } else {
    header.style.backdropFilter = "blur(10px)";
    header.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  }
});
