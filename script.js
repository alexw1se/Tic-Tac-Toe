let playerSymbol = "X"
let gameEnded = false
let xScore = 0
let oScore = 0
let tieScore = 0

var counter = 1

for (let i = 1; i <= 9; i++)
{
    document.getElementById(i.toString()).addEventListener(
        "click",
        function()
        {
        if (this.innerHTML === "" && !gameEnded)
        {
            this.innerHTML = playerSymbol
            this.classList.add(playerSymbol.toLocaleLowerCase())
            checkWin()

            if(playerSymbol === "X"){
                playerSymbol = "O"
                document.getElementById("turn").innerHTML="(Player 2's Turn)"
                counter += 1
            }
            else{
                playerSymbol = "X"
                document.getElementById("turn").innerHTML="(Player 1's Turn)"
                counter += 1
            }
        }
        }
    );
}


let winPos = 
[
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
]


function checkWin()
{
    for (let i = 0; i < winPos.length; i++)
    {
      if
      (
        document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
        document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
        document.getElementById(winPos[i][2]).innerHTML === playerSymbol
        )
        {
        document.getElementById(winPos[i][0]).classList.add("win");
        document.getElementById(winPos[i][1]).classList.add("win");
        document.getElementById(winPos[i][2]).classList.add("win"); 
        gameEnded = true;

        setTimeout(function()
        {
            if(playerSymbol === "X")
            {
                alert("O wins!");
                oScore += 1
                counter = 1
                document.getElementById("p2").innerHTML = oScore
            }
            if(playerSymbol === "O")
            {
                alert("X wins!")
                xScore += 1
                counter = 1
                document.getElementById("p1").innerHTML = xScore
            }
        }, 500);
        }
        else if (counter == 9)
        {
            gameEnded = true;
            alert("It's a tie!")
            tieScore += 1
            counter = 1
            document.getElementById("ties").innerHTML = tieScore
        }
    }
}


document.getElementById("reset").addEventListener(
    "click",
    function()
    {
        for (let i = 1; i <= 9; i++){
            document.getElementById(i.toString()).innerHTML = ""
            document.getElementById(i.toString()).classList.remove("x")
            document.getElementById(i.toString()).classList.remove("o")
            document.getElementById(i.toString()).classList.remove("win")
            gameEnded = false;
        }
        counter = 1
    }
)

document.getElementById("resetScore").addEventListener(
    "click",
    function()
    {
        for (let i = 1; i <= 9; i++){
            document.getElementById(i.toString()).innerHTML = ""
            document.getElementById(i.toString()).classList.remove("x")
            document.getElementById(i.toString()).classList.remove("o")
            document.getElementById(i.toString()).classList.remove("win")
            gameEnded = false;
        }
        counter = 1
        xScore = 0
        oScore = 0
        tieScore = 0
        document.getElementById("p1").innerHTML = xScore
        document.getElementById("p2").innerHTML = oScore
        document.getElementById("ties").innerHTML = tieScore
    }
)