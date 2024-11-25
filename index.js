$(document).ready(function () {


    const colors = ["green", "red", "yellow", "blue"];
    let gameSequence = [];
    let userSequence = [];
    let level = 0;
    let started = false;

    function startgame() {

        level = 0; 
        gameSequence = []; 
        userSequence = []; 
        started = true; 
    }

    function nextSequences() {
        userSequence= [];
        level += 0;
        level++;

    }
    
    $(`#${randomColor}`.fadeOut(100).fadeId(100));
    playSound(randomColor);
    function playSound(color) {
        const audio = new Audio(`../dzwiek/${color}.mp3`);
    }

    $(audio).on("error", function () {
        console.error(`Nie znaleziono pliku dzwiękowego: ${color}.mp3`);
         audio.play();

         $(`#${color}`).addClass("pressed");
         setTimeout(() =>  {
            $(`#${color}`).removeClass("pressed");
         }, 100);
         })

         $(".zse-kwadrat").click(function ()  {
            if (!started) return;
            const userChosenColor = $(this).attr("id");
            userSequence.push(userChosenColor);
            playSound(userChosenColor);
            checkAnswer(userSequence.length - 1);

            function checkAnswer(currentlevel) {
                if (userSequence.length === gameSequence[currentLevel]) {
                    if (userSequence.length === gameSequence.length){
                        setTimeout(() => {
                            nextSequence();
                        },1000);
                    } else {
                        playSound("game-over");
                        $("body").addClass("game-over");
                        $("h1").text("Przegrales... zacznij od nowa");
                        startOver();
                    }

                    function startOver() {
                        started = false;
                        $("h1").text("Naciśnij Start, aby rozpocząć grę");
                        $("zse-container").click(function  () {
                            if(!started) {
                                startGame();
                            }
                        
                        })
                    }
                     

                        
                    }
                }
            })
         })
        
