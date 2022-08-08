let path = Array()

    //there are 5 max spots so depending on how many destinations the user has they will be passed into the spot variables
const ids = ["spot1", "spot2", "spot3", "spot4", "spot5",]

// functions are called when their corresponding button is clicked
function clearPath()
  {
      window.localStorage.setItem('path', JSON.stringify([]));

  }

function workForce()
  {
    path = JSON.parse(window.localStorage.getItem('path'));
    path.push("Enter the\nWork Force")
    window.localStorage.setItem('path', JSON.stringify(path));
        console.log("work")

  }
function university()
  {
    path = JSON.parse(window.localStorage.getItem('path'));
    path.push("University")
    window.localStorage.setItem('path', JSON.stringify(path));
        console.log("uni")

  }
function vocational()
  {
    path = JSON.parse(window.localStorage.getItem('path'));
    path.push("Vocational/\nTrade School")
    window.localStorage.setItem('path', JSON.stringify(path));
        console.log("voc")

  }
function community()
  {
    path = JSON.parse(window.localStorage.getItem('path'));
    path.push("Community\nCollege")
    window.localStorage.setItem('path', JSON.stringify(path));
        console.log("comm")

  }
function grad()
  {
    path = JSON.parse(window.localStorage.getItem('path'));
    path.push("Grad\nSchool/PhD")
    window.localStorage.setItem('path', JSON.stringify(path));
    console.log("grad")
  }

// hopefully assigns path indexes to the ids
function getPath()
{
    path = JSON.parse(window.localStorage.getItem('path'));
    for (let i = 0; i < path.length; i++) 
    {
      document.getElementById(ids[i]).innerHTML = path[i]
      console.log(path[i])
    }
    

}
