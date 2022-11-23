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


});



