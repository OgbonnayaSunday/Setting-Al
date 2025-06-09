// let preloader = document.getElementById ("preloader");
// let gridAutoFit = document.querySelector ("gridAutoFit")

// window.addEventListener ("load", function (){
//     if (preloader.style.display === "none" || gridAutoFit.style.display ==="") {
//             preloader.style.display = "block"
//             setTimeout ("preloader", "3000")


//     } else {
//         preloader.style.display = "none";
        
//     }
// })


    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower = faster

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target + "+"; // Add the plus sign after completion
            }
        };

        updateCount();
    });







// functions command for buttons

let project1 = document.getElementById("project1");
if (project1) {
  project1.addEventListener("click", function() {
    window.location.href = "Project.html";
  });
}

let whiteBtn = document.getElementById("white-btn");
if (whiteBtn) {
  whiteBtn.addEventListener("click", function() {
    window.location.href = "About.html";
  });
}

let transparentBtn = document.getElementById("transparent-btn");
if (transparentBtn) {
  transparentBtn.addEventListener("click", function() {
    window.location.href = "Contact.html";
  });
}

let btn1 = document.getElementById("btn1");
if (btn1) {
  btn1.addEventListener("click", function() {
    window.location.href = "About.html";
  });
}

let btn2 = document.getElementById("btn2"); 
if (btn2) {
  btn2.addEventListener("click", function() {
    window.location.href = "Service.html";
  });
}

let btn3 = document.getElementById("btn3");
if (btn3) {
    btn3.addEventListener("click", function() {
    window.location.href = "About.html";
})
}

let testimony = document.getElementById("testimony");
if (testimony) {
  testimony.addEventListener("click", function() {
    window.location.href = "Service.html";
  });
}

let contactUs = document.getElementById("contact-us");
if (contactUs) {
  contactUs.addEventListener("click", function() {
    window.location.href = "Contact.html";
  });
}

let getInTouch = document.getElementById("get-in-touch");
if (getInTouch) {
    getInTouch.addEventListener("click", function() {
    window.location.href = "About.html";
})
}

let btn5 = document.getElementById("btn5");
if (btn5) {
  btn5.addEventListener("click", function() {
    window.location.href = "Service.html";
  });
}

// functions command for buttons end
















// button toggle-down

let toggleBtn1 = document.getElementById ("toggleBtn1");
let togglePara1 = document.getElementById ("togglePara1");

let toggleBtn2 = document.getElementById ("toggleBtn2");
let togglePara2 = document.getElementById ("togglePara2");

let toggleBtn3 = document.getElementById ("toggleBtn3");
let togglePara3 = document.getElementById ("togglePara3");

let toggleBtn4 = document.getElementById ("toggleBtn4");
let togglePara4 = document.getElementById ("togglePara4");

let toggleBtn5 = document.getElementById ("toggleBtn5");
let togglePara5 = document.getElementById ("togglePara5");

let toggleBtn6 = document.getElementById ("toggleBtn6");
let togglePara6 = document.getElementById ("togglePara6");

let toggleBtn7 = document.getElementById ("toggleBtn7");
let togglePara7 = document.getElementById ("togglePara7");

let toggleBtn8 = document.getElementById ("toggleBtn8");
let togglePara8 = document.getElementById ("togglePara8");

toggleBtn1.addEventListener ("click", function (){
    if (togglePara1.style.display === "none" || togglePara1.style.display === "") {
        togglePara1.style.display = "block";
        toggleBtn1.innerHTML = "What services do you offer"
    } else {
        togglePara1.style.display = "none";
        toggleBtn1.textContent = "What services do you offer";
    }

})
toggleBtn2.addEventListener ("click", function (){
    if (togglePara2.style.display === "none" || togglePara2.style.display === "") {
        togglePara2.style.display = "block";
        toggleBtn2.innerHTML = "Do you build custom websites and applications"
    } else {
        togglePara2.style.display = "none";
        toggleBtn2.textContent = "Do you build custom websites and applications";
    }
})
toggleBtn3.addEventListener ("click", function (){
    if (togglePara3.style.display === "none" || togglePara3.style.display === "") {
        togglePara3.style.display = "block";
        toggleBtn3.innerHTML = "Can you help with computer repairs and upgrades?"
    } else {
        togglePara3.style.display = "none";
        toggleBtn3.textContent = "Can you help with computer repairs and upgrades?";
    }
})
toggleBtn4.addEventListener ("click", function (){
    if (togglePara4.style.display === "none" || togglePara4.style.display === "") {
        togglePara4.style.display = "block";
        toggleBtn4.innerHTML = "Do you offer networking and UT infrastructure setup?"
    } else {
        togglePara4.style.display = "none";
        toggleBtn4.textContent = "Do you offer networking and UT infrastructure setup?";
    }
})
toggleBtn5.addEventListener ("click", function (){
    if (togglePara5.style.display === "none" || togglePara5.style.display === "") {
        togglePara5.style.display = "block";
        toggleBtn5.innerHTML = "Do you provide IT consultancy for schools and businesses?"
    } else {
        togglePara5.style.display = "none";
        toggleBtn5.textContent = "Do you provide IT consultancy for schools and businesses?";
    }
})
toggleBtn6.addEventListener ("click", function (){
    if (togglePara6.style.display === "none" || togglePara6.style.display === "") {
        togglePara6.style.display = "block";
        toggleBtn6.innerHTML = "How long does it take to complete a web project?"
    } else {
        togglePara6.style.display = "none";
        toggleBtn6.textContent = "How long does it take to complete a web project?";
    }
})
toggleBtn7.addEventListener ("click", function (){
    if (togglePara7.style.display === "none" || togglePara7.style.display === "") {
        togglePara7.style.display = "block";
        toggleBtn7.innerHTML = "What kind of post-project support do you offer?"
    } else {
        togglePara7.style.display = "none";
        toggleBtn7.textContent = "What kind of post-project support do you offer?";
    }
})
toggleBtn8.addEventListener ("click", function (){
    if (togglePara8.style.display === "none" || togglePara8.style.display === "") {
        togglePara8.style.display = "block";
        toggleBtn8.innerHTML = "How do i request a service or get a quote?"
    } else {
        togglePara8.style.display = "none";
        toggleBtn8.textContent = "How do i request a service or get a quote?";
    }
})





//     function ($) {
//     "use strict";

//     Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner();
    
    
//     // Initiate the wowjs
//     new WOW().init();


//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
//         } else {
//             $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
//         }
//     });
// }
