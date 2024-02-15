// Animated Counter

const workdata = document.querySelector('.section-work');

const workObserver = (entries) => {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    const countNum = document.querySelectorAll('.counter-numbers');
    const speed = 120;
    countNum.forEach((curEle) => {
        const updateNum = () => {
            const target = parseInt(curEle.dataset.number);
            const initial = parseInt(curEle.innerText);
            const increment = Math.trunc(target / speed);
            if (initial < target) {
                curEle.innerText = `${initial + increment}+`;
                setTimeout(updateNum,5);    
            }
            else {
                curEle.innerText = `${target}+`;
            }
        };
        updateNum();
    });
};

const workObserve = new IntersectionObserver(workObserver, {
    root: null,
    threshold: 0,
});
workObserve.observe(workdata);

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