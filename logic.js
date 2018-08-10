// questions and possible answers
var bank = [

    {q: "What did Ryan burn in order to get his nickname, 'The Fire Guy'?", a1: "Bought a cool hot rod", a2: "Smoking weed with dwight in the conference room", a3: "Burning some pitta in the toaster oven", a4: "Brushing his teeth"},
    {q: "Who asks Micheal 'Did I stutter?'?", a1: "Ew. Two question marks.", a2: "Stanely", a3: "Phyllis", a4: "Dwight"},
    {q: "How did Micheal burn his foot?", a1: "Wearing the FRESHEST most FIRE kicks", a2: "Doing the coal walk", a3: "Waking up to the smell of bacon", a4: "Brushing his teeth"},
    {q: "Test question 4", a1: "testans1.3", a2: "testans2.3", a3: "testans3.3", a4: "testans4.3"},
    {q: "Test question 5", a1: "testans1.4", a2: "testans2.4", a3: "testans3.4", a4: "testans4.4"},
    {q: "Test question 1", a1: "testans1", a2: "testans2", a3: "testans3", a4: "testans4"},
    {q: "Test question 2", a1: "testans1.1", a2: "testans2.1", a3: "testans3.1", a4: "testans4.1"},
    {q: "Test question 3", a1: "testans1.2", a2: "testans2.2", a3: "testans3.2", a4: "testans4.2"},
    {q: "Test question 4", a1: "testans1.3", a2: "testans2.3", a3: "testans3.3", a4: "testans4.3"},
    {q: "Test question 5", a1: "testans1.4", a2: "testans2.4", a3: "testans3.4", a4: "testans4.4"},









]


// answer key
var answer = ["testans1", "testans2.1", "testans3.2","testans4.3","testans1.4"];

// globals
var count = 0;
var correct = 0;
var wrong = 0;
var timer = 10;
var BUZZER = true;
var intervalId;


// Timer Functions

function CountDown() {
    console.log('just workin');
    $("#timebox").html(timer);
    if (timer > 0){
        timer--;
    }
    else {
        wrong++;
        count++;
        clearInterval(intervalId);
    }
}

function timeStart(){
    timer = 10;
    intervalId = setInterval(CountDown, 1000);
    
}

//function TimesUp() {
//    if (BUZZER === true) {
//        wrong++;
//        count++;
//    }
//}


// Answer function

function Selector() {
    var ansNum = $(this).val();
    if (count === 4){
        alert("Score: " + correct);
    }
    switch (ansNum) {
        case "answer1":
            if (bank[count].a1 === answer[count]) {
                count++;
                correct++;
            }
            else {
                count++
                wrong++
            }
            break;
        case "answer2":
            if (bank[count].a2 === answer[count]) {
                count++;
                correct++;
                console.log(count);
            }
            else {
                count++
                wrong++
            }
            break;
        case "answer3":
            if (bank[count].a3 === answer[count]) {
                count++;
                correct++;
                console.log(count);
            }
            else {
                count++
                wrong++
            }
            break;
        case "answer4":
            if (bank[count].a4 === answer[count]) {
                count++;
                correct++;
                console.log(count);
            }
            else {
                count++
                wrong++
            }
            break;
        }
    clearInterval(intervalId);
    Populate();
    }


// on click function
$("button").on("click", Selector);

// Questions n answers populator 
function Populate() {
    $("#questionDisplay").html(bank[count].q);
    $("#answerone").html(bank[count].a1);
    $("#answertwo").html(bank[count].a2);
    $("#answerthree").html(bank[count].a3);
    $("#answerfour").html(bank[count].a4);
    timeStart();
}
// game start
Populate();

if (count === 4) {
    alert("gameover");
}







