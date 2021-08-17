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
    const observer = new IntersectionObserver (function(entries, observer) {
        const a_menu = document.querySelector('a').getAttribute('href').slice(1);
        entries.forEach((entry) => {
            console.log(entry.target.id)
            console.log(a_menu)
           if (entry.isIntersecting && entry.target.id === a_menu) {
               console.log(entry.target);
               entry.target.classList.add('active');
               document.querySelector('a').classList.remove('menu__link');
               document.querySelector('a').classList.add('menu_active');
            }
            else {
                entry.target.classList.remove('active')
                document.querySelector('a').classList.add('menu__link')
               document.querySelector('a').classList.remove('menu_active')} 
        })
    }, options);
    
        sections.forEach((section) => {
            
            observer.observe(section)});

});

};

activeSection();

/* Scrolling the links to the appropriate sections with
the smooth scroll behavior */

const scrollToAnchor = () => {

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionid = menuLink.getAttribute('href');
        const section = document.querySelector(sectionid);
        section.scrollIntoView({behavior: "smooth"});
    });
});

}

scrollToAnchor();

