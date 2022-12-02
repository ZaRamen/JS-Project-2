
document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    function initialize()
    {
        clicks = 0;
        currentCards = [];
        cards = document.getElementsByClassName("cards");
        pairsRight = 0;
    }

    function clickCard(ele)
    {
        if (currentCards[0] != ele && currentCards.length != 2)
        {
            clicks++;
            document.getElementById("score").innerHTML = "Score: " + clicks;
            ele.style.backgroundColor = "gray";
            ele.innerHTML = ele.classList[1];
            currentCards.push(ele);
            // console.log(currentCards);
            if (currentCards.length == 2)
            {
                isCorrect = checkCards();
                
                setTimeout(resetCurrentCards.bind(null, isCorrect), 750);
                
                checkWin();
            }
            
        }
        
    
    }
    function checkWin()
    {
        if (pairsRight == 8)
        {
            alert("You have won! Reseting Cards");
            reset();
        }
    }
    function resetCurrentCards()
    {
        if (!isCorrect)
        {
            for (let i = 0; i < currentCards.length; i++)
            {
                currentCards[i].style.backgroundColor = "goldenrod";
                currentCards[i].innerHTML = "?";
            }
        }
        currentCards = [];
    }
    function setCardVals()
    {
        //create an array of (1-8) with a duplicate of each number (i.e 2 1s, 1 2s, etc)
        //then shuffle and pass each value as a class for each card.   
        arr = shuffle(createPairs());
        for (let i = 0; i < cards.length; i++)
        {
            cards[i].classList.add(arr[i]);
        }
        // console.log(cards);
    }
    function createPairs()
    {
        let arr = [];
        for (let i = 1; i < 9; i++)
        {
           
           //run twice because we need one duplicate for each value
           for (let j = 0; j < 2; j++)
           {
                arr.push(i.toString()); 
           }
        }
        return arr;
    }
    // shuffle algorithm found online called the Fisher-Yates (aka Knuth) Shuffle.
    // https://bost.ocks.org/mike/shuffle/
    function shuffle(array) 
    {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    function checkCards()
    {
        correct = false;
        // The first class should be cards then the second class should be it's identifier
        if (currentCards[0].classList[1] == 
            currentCards[1].classList[1] )
        {
            console.log("correct pair");
            pairsRight++;
            correct = true;
        }
        
        return correct;
    }
    function reset()
    {
        for (let i = 0; i < cards.length; i++)
        {
            cards[i].style.backgroundColor = "goldenrod";
            cards[i].classList.remove(cards[i].classList[1]);
            cards[i].innerHTML = "?";

        }
        initialize();
        setCardVals();
        document.getElementById("score").innerHTML = "Score: " + clicks;
    }

    function addEventListeners()
    {
        for (let i = 0; i < cards.length; i++)
        {
            cards[i].addEventListener('click', (event) => clickCard(cards[i]));
        }
        document.getElementById('reset').addEventListener('click',
        (event) => reset());
    }


    //run all starting functions
    initialize();
    addEventListeners();
    setCardVals();
    
});



