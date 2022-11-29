function initialize()
{
    score = 0;
    let cards = [];
}
function clickCard(ele)
{
    if (ele.style.backgroundColor == "black")
    {
        ele.style.backgroundColor = "goldenrod";
    }
    else
    {
        ele.style.backgroundColor = "black";
    }
    document.getElementById("score") = "Score: " + score;
    if (cards.length == 2)
    {
        cards.clear();
    }
    cards.push(ele);
    checkCards();
}
function setCardVals()
{
    let cards = document.getElementsByClassName("cards");
    for (let i = 0; i < cards.length; i++)
    {
        cards[i].classList.add("1");
    }
}
function checkCards()
{

}

document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    function addEventListener()
    {
        console.log("Hi");
        let cards = document.getElementsByClassName("cards");



        for (let i = 0; i < cards.length; i++)
        {
            cards[i].addEventListener('click', (event) => clickCard(cards[i]));
        }
        
    }
    addEventListener();
    setCardVals();
    initialize();
});



