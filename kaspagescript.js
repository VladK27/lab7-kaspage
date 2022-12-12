let priceVisability = false;
let priceDisplay = "none";
let animationDirection;

let priceSectionOn = function(){
    priceVisability = !priceVisability;
    !priceVisability ? priceDisplay = "none" : priceDisplay = "block";
    priceVisability ? animationDirection = "Normal" : animationDirection = "Reverse";
    pricelist.style.display = priceDisplay;
    arrow.style.animation = `arrowRotate${animationDirection} 0.25s linear forwards `;
}
