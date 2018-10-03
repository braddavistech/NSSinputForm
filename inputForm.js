var userCounter = 0;
var allUsers = {firstName : "First", lastName : "Last", userEmail : "Email", userEmail2 : "Email 2", streetAddress : "Street Address", city : "City", state : "State", zip : "Zip", dob : "Date of Birth", anniversary : "Anniversary", favStore : "Favorite Store", favRestaurant : "Favorite Restaurant", favFood : "Favorite Food", hobbies : "Hobbies"};

function onStart() {
  var newItems = document.createElement("p");
  var node = document.createTextNode("This is a test");
  newItems.appendChild(node);
  console.log(newItems);
  document.getElementById("title").appendChild(newItems);
  document.getElementById("footer").innerHTML = "Brad Davis, 2018";
};

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



