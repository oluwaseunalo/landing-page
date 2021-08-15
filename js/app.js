// Defining the Global Variables
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navFragment = document.createDocumentFragment();

// Building the navigation menu
const navBar = () => {
    for (section of sections) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList = 'menu__link';
        const lineId = section.id;
        const lineData = section.dataset.nav;
        a.setAttribute('href', `#${lineId}`);
        a.textContent = lineData;
        li.appendChild(a);
        navFragment.appendChild(li);  
    }
        nav.appendChild(navFragment);
        
}

navBar();

/* making the sections active on scroll using intersection observer
with the focus on performance*/

const activeSection = () => {

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        threshold: 0.5
    };
    const observer = new IntersectionObserver (function(entries, observer){
        for (entry of entries){
           if (entry.isIntersecting) {
               console.log(entry.target);
               entry.target.classList.add('active');
            }
            else {
                entry.target.classList.remove('active')};
           }; 
        }, options);
    
        for (section of sections) {
            observer.observe(section)};

});

};

activeSection();


const scrollToAnchor = () => {

const menuLinks = document.querySelectorAll('.menu__link');

for (menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        menuLink.scrollIntoView({behavior: "smooth"});
    });
}

};

scrollToAnchor();