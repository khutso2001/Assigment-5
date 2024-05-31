// შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
const divElement = document.createElement("div");
const btnElement = document.createElement("button");
divElement.setAttribute("id", "divId");
btnElement.setAttribute("id", "btnId");

//console.log(divElement, btnElement);

document.body.append(divElement, btnElement);
const buttonText = document.createTextNode("click me");
btnElement.append(buttonText);
//<div> - ში ჩაწერე პატარა random ტექსტი
const randomText = document.createTextNode("My Random Text");
divElement.append(randomText);

//console.log(divElement);

// ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი
btnElement.addEventListener("click", (e) => {
  e.target.style.color = "white";
  e.target.style.background = "green";
  e.target.style.height = "40px";
  e.target.style.width = "70px";
  e.target.style.border = "none";
  divElement.style.display = "none";
});

// შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>
const divCard = document.createElement("div");
divCard.setAttribute("id", "card");
const divH2 = document.createElement("h2");

const h2Text = document.createTextNode("Gandalf");
divH2.append(h2Text);

const divA = document.createElement("a");
divA.setAttribute("href", "#");
const aText = document.createTextNode("Go to profile");
divA.append(aText);

divCard.append(divH2, divA);
//console.log(divCard);
document.body.append(divCard);

// შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე
// ● ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// ➔ სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// ➔ არასწორის შემთხვევაში უცვლელი რჩება

const title = document.createElement("h1");
title.style.display = "flex";
title.style.justifyContent = "center";
const titleText = document.createTextNode("Playing Quiz Game");
title.append(titleText);
document.body.append(title);

document.addEventListener("DOMContentLoaded", (e) => {
  let score = 0;
  const scoreContainer = document.getElementById("score");
  scoreContainer.style.color = "red";
  scoreContainer.style.fontSize = "40px";
  scoreContainer.style.fontWeight = "bold";
  scoreContainer.style.marginLeft = "50px";
  console.log(scoreContainer);

  function updateScore() {
    scoreContainer.textContent = `Score: ${score}`;
  }

  const questuionElement = document.createElement("h3");
  const question = document.createTextNode("How much is 2 + 2 = ? :");
  questuionElement.style.marginLeft = "50px";
  questuionElement.append(question);
  document.body.append(questuionElement);

  const pAnswer1 = document.createElement("p");
  pAnswer1.style.marginLeft = "70px";
  const answer1Text = document.createTextNode("2 + 2 = 3");

  const pAnswer2 = document.createElement("p");
  pAnswer2.style.marginLeft = "70px";
  const answer2Text = document.createTextNode("2 + 2 = 4");

  const pAnswer3 = document.createElement("p");
  pAnswer3.style.marginLeft = "70px";
  const answer3Text = document.createTextNode("2 + 2 = 5");

  const pAnswer4 = document.createElement("p");
  pAnswer4.style.marginLeft = "70px";
  const answer4Text = document.createTextNode("2 + 2 = 32");

  pAnswer1.append(answer1Text);
  pAnswer2.append(answer2Text);
  pAnswer3.append(answer3Text);
  pAnswer4.append(answer4Text);
  document.body.append(pAnswer1, pAnswer2, pAnswer3, pAnswer4);

  pAnswer1.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  pAnswer2.addEventListener("click", (e) => {
    e.target.style.color = "green";
    score++;
    updateScore();
  });
  pAnswer3.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  pAnswer4.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });

  const questuion2Element = document.createElement("h3");
  questuion2Element.style.marginLeft = "50px";

  const question2 = document.createTextNode(
    "whitch one is the capital city of Georgia?"
  );
  questuion2Element.append(question2);
  document.body.append(questuion2Element);

  const question2Answer1 = document.createElement("p");
  question2Answer1.style.marginLeft = "70px";
  const question2Answer1Text = document.createTextNode("Tbilisi");

  const question2Answer2 = document.createElement("p");
  question2Answer2.style.marginLeft = "70px";
  const question2Answer2Text = document.createTextNode("Batumi");

  const question2Answer3 = document.createElement("p");
  question2Answer3.style.marginLeft = "70px";
  const question2Answer3Text = document.createTextNode("Kutaisi");

  const question2Answer4 = document.createElement("p");
  question2Answer4.style.marginLeft = "70px";
  const question2Answer4Text = document.createTextNode("Rustavi");

  question2Answer1.append(question2Answer1Text);
  question2Answer2.append(question2Answer2Text);
  question2Answer3.append(question2Answer3Text);
  question2Answer4.append(question2Answer4Text);
  document.body.append(
    question2Answer1,
    question2Answer2,
    question2Answer3,
    question2Answer4
  );

  question2Answer1.addEventListener("click", (e) => {
    e.target.style.color = "green";
    score++;
    updateScore();
  });
  question2Answer2.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  question2Answer3.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  question2Answer4.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });

  const questuion3Element = document.createElement("h3");
  questuion3Element.style.marginLeft = "50px";

  const question3 = document.createTextNode(
    "Which of the given numbers is the largest?"
  );
  questuion3Element.append(question3);
  document.body.append(questuion3Element);

  const question3Answer1 = document.createElement("p");
  question3Answer1.style.marginLeft = "70px";
  const question3Answer1Text = document.createTextNode("678.9");

  const question3Answer2 = document.createElement("p");
  question3Answer2.style.marginLeft = "70px";
  const question3Answer2Text = document.createTextNode("256");

  const question3Answer3 = document.createElement("p");
  question3Answer3.style.marginLeft = "70px";
  const question3Answer3Text = document.createTextNode("99.7");

  const question3Answer4 = document.createElement("p");
  question3Answer4.style.marginLeft = "70px";
  const question3Answer4Text = document.createTextNode("679");

  question3Answer1.append(question3Answer1Text);
  question3Answer2.append(question3Answer2Text);
  question3Answer3.append(question3Answer3Text);
  question3Answer4.append(question3Answer4Text);
  document.body.append(
    question3Answer1,
    question3Answer2,
    question3Answer3,
    question3Answer4
  );

  question3Answer1.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  question3Answer2.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  question3Answer3.addEventListener("click", (e) => {
    e.target.style.color = "red";
    score--;
    updateScore();
  });
  question3Answer4.addEventListener("click", (e) => {
    e.target.style.color = "green";
    score++;
    updateScore();
  });
});
