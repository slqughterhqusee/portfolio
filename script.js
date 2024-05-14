
//initial setup
let index = 0;

//basic functions
function getId(id) {
    console.log('the id is: ' + id);
    return document.getElementById(id);
};

function isHidden(id) {
    console.log('is id hidden: ' + id);
    let theElement = document.getElementById(id);
    console.log('the element is: ' + theElement)
    return theElement.classList.contains("hidden");
}; 


document.addEventListener("DOMContentLoaded", function () {

    //grab necessary id's
    const linkElements = document.querySelectorAll('[id^="link-"]');

    //log them for troubleshooting
    console.log("Number of link elements found:", linkElements.length);

    linkElements.forEach(function (link) {
        //make sure all necessary ids are logged
        console.log("Adding event listener to element with ID:", link.id);

        link.addEventListener("click", function (event) {
            console.log("Clicked on element with ID:", this.id);
            event.preventDefault();

            //redirect to new page based on click
            switch (this.id) {
                case "link-juriexpi":
                    window.location.href = '/landing-pages/jurassic-expeditions.html';
                    console.log('Navigating to Jurassic Expeditions page');
                    break;
                case "link-rpo":
                    window.location.href = '/landing-pages/ready-player-one.html';
                    console.log('Navigating to Ready Player One page');
                    break;
                case "link-bruxist":
                    window.location.href = '/landing-pages/bruxist.html';
                    console.log('Navigating to Bruxist page');
                    break;
                case "link-as":
                    window.location.href = '/landing-pages/allegories-short.html';
                    console.log('Navigating to Allegories Short page');
                    break;
                case "link-allegories":
                    window.location.href = '/landing-pages/allegories.html';
                    console.log('Navigating to Allegories page');
                    break;
                case "link-budgcalc":
                    window.location.href = '/landing-pages/budget-calculator.html';
                    console.log('Navigating to Budget Calculator page');
                    break;
                case "link-myopic":
                    window.location.href = '/landing-pages/myopic.html';
                    console.log('Navigating to Myopic page');
                    break;
                case "link-slowsaga":
                    window.location.href = '/landing-pages/slow-saga.html';
                    console.log('Navigating to Slow Saga page');
                    break;
                default:
                    console.log("Unknown element ID:", this.id);
            }
        });
    })
});


//same logic as previous for different buttons^^^
document.addEventListener("DOMContentLoaded", function () {

    const navElements = document.querySelectorAll('[id^="nav-"]');

    console.log("Number of link elements found:", navElements.length);

    navElements.forEach(function (link) {
        console.log("Adding event listener to element with ID:", link.id);
        link.addEventListener("click", function (event) {
            console.log("Clicked on element with ID:", this.id);
            event.preventDefault();
            switch (this.id) {
                case "nav-about":
                    window.location.href = '/about.html';
                    break;

                case "nav-proj":
                    window.location.href = '/portfolio.html';
                    break;

                case "nav-contact":
                    window.location.href = '/contact.html';
                    break;

                case "nav-home":
                    window.location.href = '/index.html';
                    break;

                case "nav-resume":
                    window.location.href = '/resume.html';
                    break;
                    
                default:
                    console.log("Unknown element ID:", this.id);
            }
        });
    })
});

//same logic as previous for singular button
document.addEventListener("DOMContentLoaded", function () {

    const navElements = document.querySelectorAll('[id^="con-"]');

    console.log("Number of link elements found:", navElements.length);

    navElements.forEach(function (link) {
        console.log("Adding event listener to element with ID:", link.id);
        link.addEventListener("click", function (event) {
            console.log("Clicked on element with ID:", this.id);
            event.preventDefault();
            switch (this.id) {
                case "con-card":
                    window.open('https://www.linkedin.com/in/icarus-wedekind/', "_blank", "noopener, noreferrer");
                    break;
                default:
                    console.log("Unknown element ID:", this.id);
            }
        });
    })
});


function aFastCarousel(carouselId, idx = 0) {
    let nextButton = document.querySelector(`.${carouselId}-but > #allFor`);
    let prevButton = document.querySelector(`.${carouselId}-but > #allBack`);
    let cSlides = document.querySelectorAll(`#${carouselId} > .slide`);
    
    if (idx >= cSlides.length) {
        idx = 0;
    }
    if (idx < 0) {
        idx = cSlides.length - 1;
    }
    
    cSlides.forEach(slide => slide.classList.add('hidden'));
    cSlides[idx].classList.remove('hidden');

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        aFastCarousel(carouselId, idx + 1);
    });
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        aFastCarousel(carouselId, idx - 1);
    });
}

// Example usage:
aFastCarousel('carousel');