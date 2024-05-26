const myHeading = document.querySelector("h1");
myHeading.textContent = "Maxie cutie~";

//changing the image
let trialVar;
trialVar =    
   document.querySelector("#maxie").addEventListener("click", () => {
       alert("don't pet me");
     });

const myImage = document.querySelector("#dadaa");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/maxie.jpg") {
    myImage.setAttribute("src", "images/dadaa.jpg");
  } else {
    myImage.setAttribute("src", "images/maxie.jpg");

  }
};


//assigning button function and adding username to local storage
let myButton = document.querySelector("button")

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Maxie is pogi, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Maxie is pogi, ${storedName}`;
  }
 

  myButton.onclick = () => {
    setUserName();
  };
  