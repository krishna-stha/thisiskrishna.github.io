function clicked1(){
    console.log("You are on Home.")
}

function clicked2(){
    console.log("You are on About section.")
}

function clicked3(){
    console.log("You are on Projects.")
}

function clicked4(){
    console.log("You are on Contacts.")
}

function social(){
    console.log("You are on contacts.")
}

//this is to make nav bar sticky with js

// window.onscroll = function() {
//     stickFunction()
// };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
// var still = document.body.scrollTop

// function stickFunction() {
//     navbar.classList.add("sticky");

// }

//sticky social medias icons
window.onscroll = function () {
    myFunction();
};
function myFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1000) {
        document.getElementById("myP").className = "slideUp";
    }
}

//showing content on scroll
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealtop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
else{
    reveals[i].classList.remove('active');
}
    }
}

//welcome back alert
// function setCookie(cname,cvalue,exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires=" + d.toGMTString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

// function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//       alert("Welcome again " + user);
//     } else {
//        user = prompt("Please enter your name:","");
//        if (user != "" && user != null) {
//          setCookie("username", user, 30);
//        }
//     }
//   }

let navOpen = false;
      const showNav = () => {
        navOpen = !navOpen;
        const menu = document.getElementById("link-container");
        const closeBtn = document.getElementById("menu-burger");
        if (navOpen) {
          menu.classList.add("show-menu");
          closeBtn.classList.add("close");
        } else {
          menu.classList.remove("show-menu");
          closeBtn.classList.remove("close");
        }
      };

      const cursor = document.querySelector('.hello');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// modals
var modal = document.getElementById("myModal");
var btn = document.getElementById("first");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var mode = document.getElementById("myModal2");
var btnz = document.getElementById("second");
var stop = document.getElementsByClassName("close2")[0];
btnz.onclick = function() {
  mode.style.display = "block";
}
stop.onclick = function() {
  mode.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == mode) {
    mode.style.display = "none";
  }
}