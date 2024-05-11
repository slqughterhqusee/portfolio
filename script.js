var carouselImg = {
    allegories: ["/images/allegories/allegories-designs.png", "/images/allegories/allegories-lineup.png", "/images/allegories/shiem-full.png", "/images/allegories/tea-full.png", "/images/allegories/jhim-trad.png", "/images/allegories/nox-full.png", "/images/allegories/jhim-full.png", "/images/allegories/costa-full.png"],
    bruxist: ["/images/bruxist/bruxist-lineup.png", "/images/bruxist/lenen-full.png", "/images/bruxist/x-full.png", "/images/bruxist/muya-full.png", "/images/bruxist/yamar-full.png"],
    myopic: ["/images/myopic/myopic-lineup.png", "/images/myopic/chibi-lineup.png", "/images/myopic/caba-hair.gif", "/images/myopic/bhuqi-costume.png", "/images/myopic/bhuqi-makeup.png"]
}

var carouselDesc = {
    allegories: ["A collection of redesigns for the main characters I have designed in Allegories so far. Their outfits mainly consist of naturally obtained dyes and fabrics.", "A lineup of all characters I've created for Allegories. This sheet displays headshots of both parents and their children.", "The original design of Shiem. While he initially stood wildly out of place, I updated his look and kept the leather.", "A piece drawn of Tea which displays her killing the Able Eyes. The song Whore of Babylon (Zheani) heavily inspired this piece, and lyrics can be seen scattered along the frame of the drawing.", "This is a multimedia traditionally drawn piece of Jhim, also killing the Able Eyes. It was a combination of perspective practice, coloring practice, and lining practice. I then later made some slight edits digitally.", "A dramatic piece of Nox's secondary design. This is a frame taken from a short animatic they were featured in.", `A dramatic piece of Jhim that was originally also part of a short animatic. This sketch is one of the first drawings to ease me into becoming comfortable with backgrounds and focal points instead of being so cluttered..`, "Costa's original design. This was a lot more green based and very uncohesive compared to his current one."],

    bruxist: ["A collection of headshots of the current cast of Bruxist. These are meant to be nonstylised to show realistic features of the characters, since in most pieces they're all very stylized (hence Pinball not being blacked out and X not having their mask). X (top row, far right) has been edited since this piece.", "The protagonist of Bruxist, Lenen. This piece was originally a frame from an animation I was working on, but have since scrapped.", "X holding Lenen in their palm. Funnily enough, I made this piece before watching Blade Runner 2049, which has a scene similar to this concept. Lenen and X have a kind of tense romance, which I tried to portray through the intense power dissonance between them&mdash;mortal and god.", "This piece is part of a collection, but is by far my proudest out of the remaining three. I had originally wanted to have a piece that felt intimately intimidating, like the one between X and Lenen. Eventually, I ended up working this into an actual scene.", "One of the first sketches for Bruxist I ever did. Most of the first drawings for this story were done in a small handheld green notebook in my English class."],

    myopic: ["A collection of the initial sketches of the main trio. I was aiming to have their clothes reflect cyberpunk elements, but also look familiar, which I obtained by through a combination of common cotton texturing and glossy material.", "Some cuter chibis of the main trio.", "A collection of possible hair choices for Caba. Since she's an android, her hair is easily replacable, and I had a lot of fun playing around with the concept of how she'd utilize that to her advantage as a thief.", "Some costume designs for culturally important theater.", "Some makeup designs inspired by the theatre, seen in popular fashion."],
}


//initial setup
let index = 0;

//basic functions
function getId(id) {
    return document.getElementById(id);
};

function isHidden(id) {
    return getId(id).classList.contains("hidden");
};

//make sure index is correct
console.log("Starting index", index);

function carouselData(key, carousel, carCap) {

    //grab necessary ID's
    let curCarousel = getId(carousel);
    let curCap = getId(carCap);

    //update images
    curCarousel.innerHTML = `<img src=${carouselImg[key][index]}>`;
    curCap.innerHTML = `<p> <small> ${carouselDesc[key][index]} </small> </p>`;

    // Use modulo to cycle through images
    index = (index + (carouselImg[key].length)) % (carouselImg[key].length);

    if (index === 0) {
        if (isHidden(getId(`${key}Placeholder`)))
            getId(`${key}Placeholder`).classList.remove('hidden');
    }
    else if (!isHidden(getId(`${key}Placeholder`))) {
        getId(`${key}Placeholder`).classList.add('hidden');
    }
};

function carouselDiscriminator() {
    const allCarousel = getId("allCarousel");
    const bruxCarousel = getId("bruxCarousel");
    const myoCarousel = getId("myoCarousel");

    switch (true) {
        case allCarousel !== null:
            carouselData("allegories", "allCarousel", "allCap");
            break;
        case bruxCarousel !== null:
            carouselData("bruxist", "bruxCarousel", "bruxCap");
            break;
        case myoCarousel !== null:
            carouselData("myopic", "myoCarousel", "myoCap");
            break;
    }
};

let theClickyThing = document.getElementsByClassName('carousel-but');
for (thing of theClickyThing) {

    thing.addEventListener("click", function (event) {
        event.preventDefault();
        //make sure it's grabbing the right ID
        console.log(event.target.id)

        switch (event.target.id) {
            case "allFor":
                index = (index + 1) % (carouselImg.allegories.length);
                break;
            case "bruxFor":
                index = (index + 1) % (carouselImg.bruxist.length);
                break;
            case "myoFor":
                index = (index + 1) % (carouselImg.myopic.length);
                break;
            case "allBack":
                index = (index - 1) % (carouselImg.allegories.length);
                break;
            case "bruxBack":
                index = (index - 1) % (carouselImg.bruxist.length);
                break;
            case "myoBack":
                index = (index - 1) % (carouselImg.myopic.length);
                break;
        }
        carouselDiscriminator();
    });
}


//make sure the carousels are being called
// carouselData("allegories", "allCarousel", "allCap");
// carouselData("bruxist", "bruxCarousel", "bruxCap");
// carouselData("myopic", "myoCarousel", "myoCap");

// the issue with the above call is that since not all the carousels were present on one page, the first call would return null and prevent the others from being called. 


document.addEventListener("DOMContentLoaded", function () {

    const linkElements = document.querySelectorAll('[id^="link-"]');

    console.log("Number of link elements found:", linkElements.length);

    linkElements.forEach(function (link) {
        console.log("Adding event listener to element with ID:", link.id);
        link.addEventListener("click", function (event) {
            console.log("Clicked on element with ID:", this.id);
            event.preventDefault();
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