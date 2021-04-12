// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    
    for(let key in contacts)
    {
        console.log("array:",contacts[key]);
      if(contacts[key]["firstName"]==name)
      {
          for(let keys in contacts[key])
          {   console.log(contacts[key][keys]);
              if(keys==prop)
              {
                  return contacts[key][keys];
              }
          }
          return "No such property";
      }   
    }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));