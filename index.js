let cards = [{
    icon: "images/icon-sedans.svg",
    name: "SEDANS",
    message: 
        "Choose a section for its affordability and excellent fuel     economy. Ideal for cruising in the city or on your next road trip.",
    id: ""
}, {
    icon: "images/icon-suvs.svg",
    name: "SUVS",
    message: 
        "Take an SUV for its spacious interior, power, and verstility. Perfect for your next family vacation and off-road adventures.",
    id: ""
}, {
    icon: "images/icon-luxury.svg",
    name: "LUXURY",
    message: 
        `Cruise in the best car brands 
        without the bloated prices. 
        Enjoy the enhanced comfort 
        of a luxury rental and arrive 
        in style.`,
    id: ""
}];



let cardsHTML = '';

cards.forEach((card) => {
    cardsHTML += `
        <div class="card ${(card.name).toLowerCase()}-card">
            <img src="${card.icon}" alt="${(card.name).toLowerCase()}">

            <h2 class="name">${card.name}</h2>

            <p class="message" style="width: 170px;">
                ${card.message}
            </p>

            <button class="learn-more">Learn More</button>
        </div>
    `
})


document.querySelector('.container').innerHTML = cardsHTML;