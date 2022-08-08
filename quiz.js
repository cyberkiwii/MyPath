
var agrScore = {category: "Agriculture", score: 0};
var archScore = {category: "Architecture", score: 0};
var artScore = {category: "Art", score: 0};
var bmaScore = {category: "Business", score: 0};
var eduScore = {category: "Education", score: 0};
var finScore = {category: "Finance", score: 0};
var healthScore = {category: "Health", score: 0};
var hospScore = {category: "Hospitality", score: 0};
var humanScore = {category: "Human Services", score: 0};
var itScore = {category: "IT", score: 0};
var lawScore = {category: "Law", score: 0};
var manuScore = {category: "Manufacturing", score: 0};
var marketScore = {category: "Marketing", score: 0};
var stemScore = {category: "STEM", score: 0};
var transpoScore = {category: "Transportation", score: 0};
var questionCount = 0;

function agriculture()
  {
    agrScore.score++;
    console.log("agr score: " + agrScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function architecture()
  {
    archScore.score++;
    console.log("arch score:" + archScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function art()
  {
    artScore.score++;
    console.log("arts score: " + artScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function business()
  {
    bmaScore.score++;
    console.log("business score: " + bmaScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function education()
  {
    eduScore.score++;
    console.log("education score: " + eduScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function finance()
  {
    finScore.score++;
    console.log("finance score: " + finScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function healthServices()
  {
    healthScore.score++;
    console.log("health score: " + healthScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function hospitality()
  {
    hospScore.score++;
    console.log("hospitality score: " + hospScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function humanServices()
  {
    humanScore.score++;
    console.log("human serv score: " + humanScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function it()
  {
    itScore.score++;
    console.log("it score: " + itScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function law()
  {
    lawScore.score++;
    console.log("law score: " + lawScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function manufacturing()
  {
    manuScore.score++;
    console.log("manufacturing score: " + manuScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function marketing()
  {
    marketScore.score++;
    console.log("marketing score: " + marketScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function stem()
  {
    stemScore.score++;
    console.log("stem score: " + stemScore.score);
    questionCount++;
    if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function transportation()
  {
    transpoScore.score++;
    console.log("transport score: " + transpoScore.score);
    questionCount++;
     if (questionCount == 10)
    {
      console.log("Quiz is done!");
      getResults();    
    }
  }

function getResults()
  {
    var scores = [agrScore, archScore, artScore, bmaScore, eduScore, finScore, healthScore, hospScore, humanScore, itScore, lawScore, manuScore, marketScore, stemScore, transpoScore];
    scores.sort((a, b) => {
      if(a.score < b.score)
      {
        return -1;
      }
      else if (a.score > b.score)
      {
        return 1;
      }
      return 0;
    });
    result.innerHTML = ("Your Top 3 Career Clusters Are: " + scores[14].category + ", " + scores[13].category + ", and " + scores[12].category);
  }