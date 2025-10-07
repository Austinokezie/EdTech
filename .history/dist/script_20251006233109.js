





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

//  const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           console.log(entry)
//           if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//           } else {
//             entry.target.classList.remove('show');
//           }

//         });
//       });

//       const hiddenElements = document.querySelectorAll('.hidden');
//       hiddenElements.forEach((el) => observer.observe(el));




    //    window.addEventListener('scroll', reveal);

    // function reveal(){
    //     var reveals = document.querySelectorAll('.reveal');

    //     for(var i = 0; i < reveals.length; i++){
    //       var windowheight = window.innerHeight;
    //       var revealtop = reveals[i].getBoundingClientRect().top;
    //       var revealpoint = 150;

    //       if(revealtop < windowheight - revealpoint){
    //         reveals[i].classList.add('active');

    //       }

    //       else{
    //         reveals[i].classList.remove('active');
    //       }
    //     }
    // }

  


  // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

//   // Select all testimonial cards
// const cards = gsap.utils.toArray(".reveal");

// cards.forEach((card, index) => {
//     // Alternate directions: left, up, right
//     const directions = [
//       { x: -100, y: 0 },  // card 1 slides from left
//       { x: 0, y: 100 },   // card 2 slides up
//       { x: 100, y: 0 }    // card 3 slides from right
//     ];

//     const dir = directions[index % directions.length]; // cycle through directions

//     gsap.from(card, {
//       scrollTrigger: {
//         trigger: card,
//         start: "top 85%", // start animation when card enters viewport
//         toggleActions: "play none none reverse"
//       },
//       opacity: 0,
//       x: dir.x,
//       y: dir.y,
//       duration: 1,
//       ease: "power3.out",
//       delay: index * 0.2 // staggered delay
//     });
// });



// window.addEventListener('scroll', reveal);
// function reveal(){
//         var reveals = document.querySelectorAll('.reveal');

//         for(var i = 0; i < reveals.length; i++){
//           var windowheight = window.innerHeight;
//           var revealtop = reveals[i].getBoundingClientRect().top;
//           var revealpoint = 150;

//           if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');

//           }

//           else{
//             reveals[i].classList.remove('active');
//           }
//         }
//       }

