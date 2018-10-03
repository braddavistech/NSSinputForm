var userCounter = 0;
var allUsersId = ["firstName", "lastName", "userEmail", "userEmail2", "streetAddress", "city", "state", "zip", "dob", "anniversary", "favStore", "favRestaurant", "favFood", "hobbies"];
var allUsers = {firstName : "First", lastName : "Last", userEmail : "Email", userEmail2 : "Email 2", streetAddress : "Street Address", city : "City", state : "State", zip : "Zip", dob : "Date of Birth", anniversary : "Anniversary", favStore : "Favorite Store", favRestaurant : "Favorite Restaurant", favFood : "Favorite Food", hobbies : "Hobbies"};

function onStart() {
  var newItems = document.createElement("p");
  var node = document.createTextNode("WE ARE GLAD YOU ARE JOINING");
  newItems.appendChild(node);
  document.getElementById("title").appendChild(newItems);
  document.getElementById("footer").innerHTML = "Brad Davis, 2018";
};

// This is to try and create new input form strictly out of js.
function createInputForm (){
  var newForm = document.createElement("form");

  for (var i = 0; i < allUsersId.length; i++) {
    var newInput = document.createElement("input");
    var newTitle = document.createTextNode(allUsersId[i]);
    newInput.appendChild(newTitle);
    newInput.type = "text";
    newInput.className = "inputTags";
    newInput.id = allUsersId[i];
    newInput.size = "50";
    if (allUsersId[i] == "firstName"){
      newInput.placeholder = "Enter Your First Name.";
    } else if (allUsersId[i] == "lastName"){
      newInput.placeholder = "Enter Your Last Name.";
    }else if (allUsersId[i] == "userEmail"){
      newInput.placeholder = "Enter Your Email Address.";
    }else if (allUsersId[i] == "userEmail2"){
      newInput.placeholder = "Enter Your Secondary Email Address.";
    }else if (allUsersId[i] == "streetAddress"){
      newInput.placeholder = "Enter Your Street Address.";
    }else if (allUsersId[i] == "city"){
      newInput.placeholder = "Enter Your City.";
    }else if (allUsersId[i] == "state"){
      newInput.placeholder = "Enter Your State.";
    }else if (allUsersId[i] == "zip"){
      newInput.placeholder = "Enter Your Zip Code.";
    }else if (allUsersId[i] == "dob"){
      newInput.placeholder = "Enter Your Date Of Birth.";
    }else if (allUsersId[i] == "anniversary"){
      newInput.placeholder = "Enter Your Anniversary Date.";
    }else if (allUsersId[i] == "favStore"){
      newInput.placeholder = "Enter Your Favorite Store.";
    }else if (allUsersId[i] == "favRestaurant"){
      newInput.placeholder = "Enter Your Favorite Restaurant.";
    }else if (allUsersId[i] == "favFood"){
      newInput.placeholder = "Enter Your Favorite Food.";
    }else if (allUsersId[i] == "hobbies"){
      newInput.placeholder = "Enter Your Hobbies and Interests.";
    }
    newForm.appendChild(newInput);
  };

  document.getElementById("testInput").appendChild(newForm);
};

// function inputNameChange(testName){
//   if (testName = "firstName"){
//     console.log("Enter Your First Name.");
//     return newInput.placeholder
//   } else if (testName = "lastName"){
//     console.log("Enter Your Last Name.")
//   } else if (testName = "userEmail"){
//     console.log("Enter Your Email Address.")
//   } else if (testName = "userEmail2"){
//     console.log("Enter Your Secondary Email Address.")
//   } else if (testName = "streetAddress"){
//     console.log("Enter Your Street Address.")
//   } else if (testName = "city"){
//     console.log("Enter Your City.")
//   } else if (testName = "state"){
//     console.log("Enter Your State.")
//   } else if (testName = "zip"){
//     console.log("Enter Your Zip.")
//   } else if (testName = "dob"){
//     console.log("Enter Your Date Of Birth.")
//   } else if (testName = "anniversary"){
//     console.log("Enter Your Anniversay Date.")
//   } else if (testName = "favStore"){
//     console.log("Enter Your Favorite Store.")
//   } else if (testName = "favRestaurant"){
//     console.log("Enter Your Favorite Restaurant.")
//   } else if (testName = "favFood"){
//     console.log("Enter Your Favorite Food")
//   } else if (testName = "hobbies"){
//     console.log("Enter Your Hobbies.")
//   };
// };

function createUser(){
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var personalEmail= document.getElementById("userEmail").value;
    var personalEmail2 = document.getElementById("userEmail2").value;
    var sAddress = document.getElementById("streetAddress").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var dob = document.getElementById("dob").value;
    var anniversary = document.getElementById("anniversary").value;
    var favStore = document.getElementById("favStore").value;
    var favRestaurant = document.getElementById("favRestaurant").value;
    var favFood = document.getElementById("favFood").value;
    var hobbies = document.getElementById("hobbies").value;
    allUsers[userCounter] = {
      firstName : fName,
      lastName : lName,
      userEmail : personalEmail,
      userEmail2 : personalEmail2,
      streetAddress : sAddress,
      city : city,
      state : state,
      zip : zip,
      dob : dob,
      anniversary : anniversary,
      favStore : favStore,
      favRestaurant : favRestaurant,
      favFood : favFood,
      hobbies : hobbies
    };
    document.getElementById("storedUser").innerHTML = "First Name: " + allUsers[userCounter].firstName + "<br>Last Name: " + allUsers[userCounter].lastName + "<br>Email Address: " + allUsers[userCounter].userEmail  + "<br>2nd Email Address: " + allUsers[userCounter].userEmail2 + "<br>Street Address: " + allUsers[userCounter].streetAddress + "<br>City, State Zip: " + allUsers[userCounter].city + ", " + allUsers[userCounter].state + " " + allUsers[userCounter].zip + "<br>Date of Birth: " + allUsers[userCounter].dob + "<br>Anniversay: " + allUsers[userCounter].anniversary + "<br>Favorite Store: " + allUsers[userCounter].favStore + "<br>Favorite Restaurant: " + allUsers[userCounter].favRestaurant + "<br>Favorite Food: " + allUsers[userCounter].favFood + "<br>Hobbies: " + allUsers[userCounter].hobbies;   
};



