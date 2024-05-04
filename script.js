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
function isHidden(elementID) {
    // console.log(document.getElementById(elementID).classList.contains("hidden"));
    return document.getElementById(elementID).classList.contains("hidden");

}

console.log("Starting index", index);

function carouselData(key, carousel, carCap) {

    //grab necessary ID's
    let curCarousel = getId(carousel);
    let curCap = getId(carCap);

    //update images
    curCarousel.innerHTML = `<img src=${carouselImg[key][index]}>`;
    curCap.innerText = `${carouselDesc[key][index]}`;

    // Use modulo to cycle through images
    index = (index + (carouselImg[key].length-1)) % (carouselImg[key].length-1); 

    if (index === 0){
        if(isHidden(getId(`${key}Placeholder`)))
        getId(`${key}Placeholder`).classList.remove('hidden');
    }
    else{
        if(!isHidden(getId(`${key}Placeholder`)))
        getId(`${key}Placeholder`).classList.add('hidden');
    }
};


addEventListener("click", function (event) {
    event.preventDefault();
    //make sure it's grabbing the right ID
    console.log(event.target.id)

    switch (event.target.id) {
        case "allFor":
            index = (index + 1) % (carouselImg.allegories.length-1);
            break;
        case "bruxFor":
            index = (index + 1) % (carouselImg.bruxist.length-1);
            break;
        case "myoFor":
            index = (index + 1) % (carouselImg.myopic.length-1);
            break;
        case "allBack":
            index = (index - 1) % (carouselImg.allegories.length-1);
            break;
        case "bruxBack":
            index = (index - 1) % (carouselImg.bruxist.length-1);
            break;
        case "myoBack":
            index = (index - 1) % (carouselImg.myopic.length-1);
            break;
    }

    //make sure the carousels are being called
    console.log("before carousel call");
    carouselData("allegories", "allCarousel", "allCap");
    carouselData("bruxist", "bruxCarousel", "bruxCap");
    carouselData("myopic", "myoCarousel", "myoCap");
    
});


