let priceVisability = false;
let priceDisplay = "none";
let animationName;

let priceSectionOn = function(){
    priceVisability = !priceVisability;
    !priceVisability ? priceDisplay = "none" : priceDisplay = "block";
    priceVisability ? animationName = "1" : animationName = "0";
    pricelist.style.display = priceDisplay;
    flower.style.animation = `flowerRolling${animationName} 0.25s linear forward `;
    
    }
