const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navFragment = document.createDocumentFragment();

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


document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        threshold: 0
    };
    const observer = new IntersectionObserver (function(entries, observer){
        for (entry of entries){
           if (entry.isIntersecting) {
               console.log(entry.target);
               entry.target.classList.add('active');}
            else {
                entry.target.classList.remove('active')};
           }; 
        }, options);
    
        for (section of sections) {
            observer.observe(section)};

});





/* const eventLi = () => {
    for (section of sections) {

    a.addEventListener('click', () => {
        section.scrollIntoView({behavior: "smooth"});
      });
    }

}

eventLi (); */




/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

