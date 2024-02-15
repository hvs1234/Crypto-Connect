// Auto Type Name

var Type = new Typed(".auto-type",{
    strings: ["Build with your creativity","Analyze your marketing skills","Enchance your experience"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Crpto Data

var btc = document.querySelector('#bitcoin')
var eth = document.querySelector('#ethereum')
var doge = document.querySelector('#dogecoin')

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {},
};

$.ajax(settings).done(function(response){
    btc.innerHTML = `${response.bitcoin.usd}$`;
    eth.innerHTML = `${response.ethereum.usd}$`;
    doge.innerHTML = `${response.dogecoin.usd}$`;
});

// Scroll To Top

const scrollTop = document.querySelector('.scroll-top');
scrollTop.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
})