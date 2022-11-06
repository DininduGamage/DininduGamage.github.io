var typed = new Typed(".typing", {
    strings: ["Programmer", "Web Developer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Programmer", "Web Developer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 620) {
        mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}