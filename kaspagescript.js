let priceVisability = false;
let priceDisplay = "none";
let animationName;

let priceSectionOn = function(){
    priceVisability = !priceVisability;
    !priceVisability ? priceDisplay = "none" : priceDisplay = "block";
    priceVisability ? animationName = "Normal" : animationName = "Reverse";
    pricelist.style.display = priceDisplay;
    flower.style.animation = `flowerRolling${animationName} 0.5s linear 1 forwards`;
    }
