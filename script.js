// Fonctionnalité 1
var footerElt = document.getElementsByTagName("footer")[0];
var clickNumber = 0;
footerElt.addEventListener("click", function() {
    console.log("clic");
    console.log("clic numéro " + ++clickNumber);
});

// Fonctionnalité 2 
var menuElt = document.getElementById('navbarHeader');
var menuBtn = document.getElementsByClassName('navbar-toggler')[0];
menuBtn.addEventListener("click", function() {
    menuElt.classList.toggle("collapse");
});

//Fonctionnalité 3
var firstcard = document.getElementsByClassName('card')[0];
var firstcardBtn = firstcard.getElementsByClassName('btn-outline-secondary')[0];
firstcardBtn.addEventListener('click', ChangeColorFirstCard)
function ChangeColorFirstCard() {
    firstcard.style.color = 'red';
}

// Fonctionnalité 4
var secondcard = document.getElementsByClassName('card')[1];
var secondcardBtn = secondcard.getElementsByClassName('btn-outline-secondary')[0];
secondcardBtn.addEventListener('click', ChangeColorSecondCard)
function ChangeColorSecondCard() {
    if (secondcard.style.color === 'green'){ 
        secondcard.style.color = '' ; 
    } else {
        secondcard.style.color = 'green';
    }
}

//Fonctionnalité 5
var navbar = document.getElementsByTagName("header")[0];
var linkBootstrap = document.styleSheets[0]
var onNavbar = function(){
    if (document.styleSheets[0].disabled === true) {
    document.styleSheets[0].disabled = false;
  } else{
    document.styleSheets[0].disabled = true;
  }
}
navbar.addEventListener("dblclick", onNavbar);