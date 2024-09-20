const cards = [
    {
        name: '1',
        img: 'image/d_1.png'
    },
    {
        name: '2',
        img: 'image/d_2.png'
    },
    {
        name: '3',
        img: 'image/d_3.png'
    },
    {
        name: '4',
        img: 'image/d_4.png'
    },
    {
        name: '5',
        img: 'image/d_5.png'
    },
    {
        name: '6',
        img: 'image/d_6.png'
    },
    {
        name: '1',
        img: 'image/d_1.png'
    },
    {
        name: '2',
        img: 'image/d_2.png'
    },
    {
        name: '3',
        img: 'image/d_3.png'
    },
    {
        name: '4',
        img: 'image/d_4.png'
    },
    {
        name: '5',
        img: 'image/d_5.png'
    },
    {
        name: '6',
        img: 'image/d_6.png'
    }
];

document.addEventListener("DOMContentLoaded",() => {
    cards.sort(() => 0.5 - Math.random());
    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            const card = document.createElement("img");
            card.setAttribute("src","image/hidden_card.png");
            card.setAttribute("data-id",i);
            card.addEventListener("click",flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src",cards[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500);
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute("src","image/hidden_card.png");
            cards[optionTwoId].setAttribute("src","image/hidden_card.png");
            alert("You hvae clicked the same image!");
        }
        else if(cardsChosen[0] === cardsChosen[1]){
            alert("You found a match");
            cards[optionOneId].setAttribute("src","image/white_card.png");
            cards[optionTwoId].setAttribute("src","image/white_card.png");
            cards[optionOneId].removeEventListener("click",flipCard);
            cards[optionTwoId].removeEventListener("click",flipCard);
            cardsWon.push(cardsChosen);
        }
        else{
            cards[optionOneId].setAttribute("src","image/hidden_card.png");
            cards[optionTwoId].setAttribute("src","image/hidden_card.png");
            alert("Sorry, try again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cards.length/2){
            resultDisplay.textContent = "Congratulations! You found them all!";
        }
    }

    createBoard();
});