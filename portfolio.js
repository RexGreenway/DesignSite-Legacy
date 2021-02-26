
const window_size = window.matchMedia("(min-width: 800px)");

function openNav() {
    document.getElementById("sidebar").style.width = "100%";

};

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
};

// function openNav() {
//     if (window_size.matches) {
//         document.getElementById("opacity").style.display = "none";
//         document.getElementById("navbar").style.width = "100%";
//     } else {
//         document.getElementById("sidebar").style.width = "100%";
//     }
// };

// function closeNav() {
//     document.getElementById("sidebar").style.width = "0";
// };



if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    afterLoaded();
};

function afterLoaded() {
    const logo = document.getElementById("logo");

    window.onscroll = function() {
        if (window_size.matches) {
            scrollFunction();
        } else { 
            logo.classList.add("bigLogo");
        }
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            logo.classList.remove("bigLogo");
        } else {
            logo.classList.add("bigLogo");
        }
    };
};
