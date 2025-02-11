let js='amazing';
      if (js==='amazing')
      alert('Javascript is fun!');
      console.log(40+36+9-20);

//Logical Operator

const hasDriverLicense=true;
const hasGoodVision=true;
const isTired=true;

const capableToDrive=(hasDriverLicense && hasGoodVision && !isTired);

if(capableToDrive){
      console.log("Sansa will drive.");
}else{
      console.log("Someone else should drive.");
}


//Javascript Fundamental Part 1, Challange 1 & 2
const marksWeight =80;
const marksHeight=1.88;
const johnsWeight=85;
const johnsHeight=1.75;

let marksBMI=marksWeight/marksHeight**2;
let johnsBMI=johnsWeight/johnsHeight**2;

//console.log(marksBMI);
//console.log(johnsBMI);

let markSHigherBMI=(marksBMI>johnsBMI);
console.log(markSHigherBMI);

if (markSHigherBMI) {
      console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`);
  }
  else{
      console.log(`Mark's BMI ${marksBMI} is lower than John's BMI ${johnsBMI}`);
  }

  
//--------------Coding challenge 3------------------

let dolphinScore1=97;
let dolphinScore2=112;
let dolphinScore3=101;

let koalasScore1=109;
let koalasScore2=95;
let koalasScore3=123;

let dolphinAverageScore=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
let koalasAverageScore=(koalasScore1+koalasScore2+koalasScore3)/3;
let winner=dolphinAverageScore>koalasAverageScore;
let draw=dolphinAverageScore==koalasAverageScore;

if(draw){
      console.log("This match is a tie.");
}else if(winner){
      console.log("The champion team is Dolphins!");
}else{
      console.log("The champion team is Koalas!");
} 

// -----------------Bonus1

if(dolphinAverageScore>=100 && koalasAverageScore >=100){
      if(draw){
            console.log(`This match is a tie. \n The average score of Dolphins: ${dolphinAverageScore} \n The average score of Koalas: ${koalasAverageScore}`);
      }else if(winner){
            console.log(`The champion team is Dolphins! \n The average score of Dolphins: ${dolphinAverageScore} \n The average score of Koalas: ${koalasAverageScore}`);
      }else{
            console.log(`The champion team is Koalas! \n The average score of Dolphins: ${dolphinAverageScore} \n The average score of Koalas: ${koalasAverageScore}`);
      }
}else{
      console.log(`No team wins the trophy.\n The average score of Dolphins: ${dolphinAverageScore} \n The average score of Koalas: ${koalasAverageScore}`);
}

//The conditional (Ternary Operator)