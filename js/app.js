//JS
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
/* making the sections active on scroll and 
highlighting the menubar using intersection observer
*/
const activeSection = () => {
    const options = {
        root: null,
        threshold: 0.5
    };
    const observer = new IntersectionObserver (function(entries, observer) {
        const links=Array.from(document.getElementById('navbar__list').children)
        const a_menu = document.querySelector('a').getAttribute('href').slice(1);
        entries.forEach((entry) => {
            for(link of links){
                console.log(entry.target.dataset.nav)
                console.log(link.children[0].textContent )
                if (entry.isIntersecting ) {
                    console.log(entry.isIntersecting);
                    entry.target.classList.add('active');
                    // document.querySelector('a').classList.remove('menu__link');
                    if(entry.target.dataset.nav == link.children[0].textContent){
                        link.classList.add('menu_active');
                    }else{
                        link.classList.remove('menu_active')
                    }
                 }
                 else {
                     entry.target.classList.remove('active')
                    //  document.querySelector('a').classList.add('menu__link')
                } 
             }
            }
       
        )
    }, options);
        sections.forEach((section) => {
            observer.observe(section)});
};

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
        activeSection();
    });
});
}

scrollToAnchor();
