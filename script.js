var carouselImg = {
    allegories: ["/images/allegories/allegories-designs.png", "/images/allegories/allegories-lineup.png", "/images/allegories/shiem-full.png", "/images/allegories/tea-full.png", "/images/allegories/nox-full.png", "/images/allegories/jhim-full.png", "/images/allegories/costa-full.png"],
    bruxist: ["/images/bruxist/bruxist-lineup.png", "/images/bruxist/lenen-full.png", "/images/bruxist/x-full.png", "/images/bruxist/muya-full.png", "/images/bruxist/yamar-full.png"],
    myopic: ["/images/myopic/myopic-lineup.png", "/images/myopic/bhuqi.png", "/images/myopic/chibi-lineup"],
}

var carouselDesc = {
    allegories: ["A collection of redesigns for the main characters I have designed in Allegories so far. Their outfits mainly consist of naturally obtained dyes and fabrics.", "A lineup of all characters I've created for Allegories. This sheet displays headshots of both parents and their children.", "The original design of Shiem. While he initially stood wildly out of place, I updated his look and kept the leather.", "A piece drawn of Tea which displays her killing the Able Eyes. The song Whore of Babylon (Zheani) heavily inspired this piece, and lyrics can be seen scattered along the frame of the drawing.", "A dramatic piece of Nox's secondary design. This is a frame taken from a short animatic they were featured in.", `A dramatic piece of Jhim, who can be seen in a <a href="allegories-short.html">narrative writing piece</a> elsewhere on this portfolio.`, "Costa's original design. This was a lot more green based and very uncohesive compared to his current one."],
    bruxist: [],
    myopic: [],
}


//initial setup
let index = 0;
const allegoriesImages = carouselImg;
function getId(id) {
    return document.getElementById(id);
}

console.log("Starting index", index);

function carouselData(key, carousel, carCap) {
    //state current index
    console.log("Current index", index);

    //grab necessary ID's
    let curCarousel = getId(carousel);
    let curCap = getId(carCap);

    // Use modulo to cycle through images
    index = (index + 1) % carouselImg[key].length;
    console.log("new index", index);

    //update images
    curCarousel.innerHTML = `<img src=${carouselImg[key][index]}>`;
    curCap.innerText = `${carouselDesc[key][index]}`;
};


addEventListener("click", function (event) {
    event.preventDefault();
    //make sure it's grabbing the right ID
    console.log(event.target.id)

    switch (event.target.id) {
        case "allFor":
        case "bruxFor":
        case "myoFor":
            index++;
            break;
        case "allBack":
        case "bruxBack":
        case "myoBack":
            index--;
            break;
    }

    //make sure the carousels are being called
    console.log("before carousel call");
    carouselData("allegories", "allCarousel", "allCap");
    
});


