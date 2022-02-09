console.log(document);

// body tag
const body = document.getElementById("body");
const bodyStyle = "background-color: yellow;";
const bodyStyle2 = "font-color: black";

body.setAttribute("style", bodyStyle + bodyStyle2);

// h1 tag
const h1Tag = document.createElement("h1");
const h1Style = "color: white;";
const h1Style2 = "font-size: 40px;";
const h1Style3 = "text-align: center;";
const h1Style4 = "background-color: black;";
const h1Style5 = "padding-top: 4px;";

h1Tag.textContent = "Musical Theatre Quiz";

h1Tag.setAttribute(
  "style",
  h1Style + h1Style2 + h1Style3 + h1Style4 + h1Style5
);

body.appendChild(h1Tag);

// p tag, or timer
const pTag = document.createElement("p");
const pTagStyle1 = "position: relative;";
pTag.textContent = 60;
pTag.setAttribute("style", pTagStyle1)
body.appendChild(pTag);

const button = document.createElement("button");
const buttonStyle1 = "position: absolute;";
const buttonStyle2 = "margin: auto;";
const buttonStyle3 = "position: absolute;";
const buttonStyle4 = "left: 50%;";
const buttonStyle5 = "transform: translate(-50%, -50%);";
button.textContent = "Start Quiz"
button.setAttribute("style", buttonStyle1 + buttonStyle2 + buttonStyle3 + buttonStyle4 + buttonStyle5);
body.appendChild(button);

// The following code can stop a function as a set time. In this instance it's set to 1 minute (60000 milliseconds).
/*const startTime = new Date().getTime();

const timer = setInterval(function () {
  if (new Date().getTime() - startTime > 60000) {
    clearInterval(timer);
    return;
  }
}, 1000);*/

// The pTagStart should start the interval. pTagStop should stop it. IT WORKS!!!!!!
// The timer was completed on Sunday, February 6th 2022 at 8:37am. A moment in time that will forever be etched in my memory!!
// The (timesRun === 60) must equal the value of the pTag.textContent element.

button.addEventListener("click", function() {
  let timesRun = 0;
  let pTagStart = setInterval(function () {
  pTag.textContent--;
  timesRun++;
  if (timesRun === 60) {
    clearInterval(pTagStart);
  }
}, 1000);
})


// Question #1
const question1 = document.createElement("p");
const question1Style1 = "text-align: center;";
const question1Style2 = "font-size: 20px;";
const question1Style3 = "padding-top: 40px;";
question1.textContent = "What was Rogers and Hammerstein's first musical?";
question1.setAttribute("style", question1Style1 + question1Style2 + question1Style3);
body.appendChild(question1);

// Question #1 Answers
const answer1 = document.createElement("p");
const answer1Style1 = "text-align: center;";
const answer1Style2 = "text-color: black;";
answer1.textContent = "Oklahoma!"
answer1.setAttribute("style", answer1Style1)
answer1.setAttribute("class", "p-answer")
body.appendChild(answer1);

const answer2 = document.createElement("p");
const answer2Style1 = "text-align: center;";
answer2.textContent = "Carousel"
answer2.setAttribute("style", answer2Style1)
answer2.setAttribute("class", "p-answer")
body.appendChild(answer2);

const answer3 = document.createElement("p");
const answer3Style1 = "text-align: center;";
answer3.textContent = "South Pacific"
answer3.setAttribute("style", answer3Style1)
answer3.setAttribute("class", "p-answer")
body.appendChild(answer3);

const answer4 = document.createElement("p");
const answer4Style1 = "text-align: center;";
answer4.textContent = "Sound of Music"
answer4.setAttribute("style", answer4Style1)
answer4.setAttribute("class", "p-answer")
body.appendChild(answer4);

// Question #2
const question2 = document.createElement("p");
const question2Style1 = "text-align: center;";
const question2Style2 = "font-size: 20px;";
const question2Style3 = "padding-top: 40px;";
question2.textContent = "Which Sondheim show featured Donna Murphy as the character 'Fosca'?";
question2.setAttribute("style", question2Style1 + question2Style2 + question2Style3);
body.appendChild(question2);

// Question #2 Answers
const secondAnswer1 = document.createElement("p");
const secondAnswer1Style1 = "text-align: center;";
secondAnswer1.textContent = "West Side Story"
secondAnswer1.setAttribute("style", secondAnswer1Style1)
secondAnswer1.setAttribute("class", "p-answer")
body.appendChild(secondAnswer1);

const secondAnswer2 = document.createElement("p");
const secondAnswer2Style1 = "text-align: center;";
secondAnswer2.textContent = "Sweeney Todd"
secondAnswer2.setAttribute("style", secondAnswer2Style1)
secondAnswer2.setAttribute("class", "p-answer")
body.appendChild(secondAnswer2);

const secondAnswer3 = document.createElement("p");
const secondAnswer3Style1 = "text-align: center;";
secondAnswer3.textContent = "Passion"
secondAnswer3.setAttribute("style", secondAnswer3Style1)
secondAnswer3.setAttribute("class", "p-answer")
body.appendChild(secondAnswer3);

const secondAnswer4 = document.createElement("p");
const secondAnswer4Style1 = "text-align: center;";
secondAnswer4.textContent = "Sunday in the Park with George"
secondAnswer4.setAttribute("style", secondAnswer4Style1)
secondAnswer4.setAttribute("class", "p-answer")
body.appendChild(secondAnswer4);

// Question #3
const question3 = document.createElement("p");
const question3Style1 = "text-align: center;";
const question3Style2 = "font-size: 20px;";
const question3Style3 = "padding-top: 40px;";
question3.textContent = "The Tony Awards started in which year?";
question3.setAttribute("style", question3Style1 + question3Style2 + question3Style3);
body.appendChild(question3);

// Question #3 Answers
const thirdAnswer1 = document.createElement("p");
const thirdAnswer1Style1 = "text-align: center;";
thirdAnswer1.textContent = "1942"
thirdAnswer1.setAttribute("style", thirdAnswer1Style1)
thirdAnswer1.setAttribute("class", "p-answer")
body.appendChild(thirdAnswer1);

const thirdAnswer2 = document.createElement("p");
const thirdAnswer2Style1 = "text-align: center;";
thirdAnswer2.textContent = "1938"
thirdAnswer2.setAttribute("style", thirdAnswer2Style1)
thirdAnswer2.setAttribute("class", "p-answer")
body.appendChild(thirdAnswer2);

const thirdAnswer3 = document.createElement("p");
const thirdAnswer3Style1 = "text-align: center;";
thirdAnswer3.textContent = "1934"
thirdAnswer3.setAttribute("style", thirdAnswer3Style1)
thirdAnswer3.setAttribute("class", "p-answer")
body.appendChild(thirdAnswer3);

const thirdAnswer4 = document.createElement("p");
const thirdAnswer4Style1 = "text-align: center;";
thirdAnswer4.textContent = "1947"
thirdAnswer4.setAttribute("style", thirdAnswer4Style1)
thirdAnswer4.setAttribute("class", "p-answer")
body.appendChild(thirdAnswer4);

// Question #4
const question4 = document.createElement("p");
const question4Style1 = "text-align: center;";
const question4Style2 = "font-size: 20px;";
const question4Style3 = "padding-top: 40px;";
question4.textContent = "Who holds the record for most Tony Awards?";
question4.setAttribute("style", question4Style1 + question4Style2 + question4Style3);
body.appendChild(question4);

// Question #4 Answers
const fourthAnswer1 = document.createElement("p");
const fourthAnswer1Style1 = "text-align: center;";
fourthAnswer1.textContent = "Andrew Lloyd Webber"
fourthAnswer1.setAttribute("style", fourthAnswer1Style1)
fourthAnswer1.setAttribute("class", "p-answer")
body.appendChild(fourthAnswer1);

const fourthAnswer2 = document.createElement("p");
const fourthAnswer2Style1 = "text-align: center;";
fourthAnswer2.textContent = "Harold Prince"
fourthAnswer2.setAttribute("style", fourthAnswer2Style1)
fourthAnswer2.setAttribute("class", "p-answer")
body.appendChild(fourthAnswer2);

const fourthAnswer3 = document.createElement("p");
const fourthAnswer3Style1 = "text-align: center;";
fourthAnswer3.textContent = "Cameron Mackintosh"
fourthAnswer3.setAttribute("style", fourthAnswer3Style1)
fourthAnswer3.setAttribute("class", "p-answer")
body.appendChild(fourthAnswer3);

const fourthAnswer4 = document.createElement("p");
const fourthAnswer4Style1 = "text-align: center;";
fourthAnswer4.textContent = "Stephen Sondheim"
fourthAnswer4.setAttribute("style", fourthAnswer4Style1)
fourthAnswer4.setAttribute("class", "p-answer")
body.appendChild(fourthAnswer4);

// Question #5
const question5 = document.createElement("p");
const question5Style1 = "text-align: center;";
const question5Style2 = "font-size: 20px;";
const question5Style3 = "padding-top: 40px;";
question5.textContent = "Which Broadway star does Jake have a crush on?";
question5.setAttribute("style", question5Style1 + question5Style2 + question5Style3);
body.appendChild(question5);

// Question #4 Answers
const fifthAnswer1 = document.createElement("p");
const fifthAnswer1Style1 = "text-align: center;";
fifthAnswer1.textContent = "Bernadette Peters"
fifthAnswer1.setAttribute("style", fifthAnswer1Style1)
fifthAnswer1.setAttribute("class", "p-answer")
body.appendChild(fifthAnswer1);

const fifthAnswer2 = document.createElement("p");
const fifthAnswer2Style1 = "text-align: center;";
fifthAnswer2.textContent = "Bernadette Peters"
fifthAnswer2.setAttribute("style", fifthAnswer2Style1)
fifthAnswer2.setAttribute("class", "p-answer")
body.appendChild(fifthAnswer2);

const fifthAnswer3 = document.createElement("p");
const fifthAnswer3Style1 = "text-align: center;";
fifthAnswer3.textContent = "Bernadette Peters"
fifthAnswer3.setAttribute("style", fifthAnswer3Style1)
fifthAnswer3.setAttribute("class", "p-answer")
body.appendChild(fifthAnswer3);

const fifthAnswer4 = document.createElement("p");
const fifthAnswer4Style1 = "text-align: center;";
fifthAnswer4.textContent = "Bernadette Peters"
fifthAnswer4.setAttribute("style", fifthAnswer4Style1)
fifthAnswer4.setAttribute("class", "p-answer")
body.appendChild(fifthAnswer4);

// Question #1 Functions

// Keep working on this function. It should change the clicked element to a green font color.
answer1.addEventListener("click", function() {
document.p.style.color = "green";
return false;
})
