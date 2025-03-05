// What is a callback function?
// A callback function is an anonymous function (no name) that is passed as an argument to another function.

// What is Syncronous and Asyncronous code?
// Syncronous stand for events occuring at the same time. In programming, syncronous code is executed line by line and in order.
// Synchonous code is blocking, meaning that it will block futher execution of code until it is done with the current line of code.

// Ansyncronous code stand for events occuring at different times. In programming, asyncronous code is executed out of order and can be executed at the same time.
// Asyncronous code is non-blocking, meaning that it will not block futher execution of code while it is being executed.

console.log("Before");

// Define a function for getting a user from a database using a callback function
function getUser(id, callbackFunctionToBeCalled) {
  // setTimeout is a function that operates asynchronously.
  // Simulate a database call using setTimeout built in function
  setTimeout(() => {
    // make a mock database call
    console.log("Retrieving user with id: " + id);
    // Get the user from the database
    let user = {
      id: id,
      githubUsername: "ShareghYusefi",
    };
    // Once we have our user from the database, we call the callback function and give it the result for processing.
    callbackFunctionToBeCalled(user);
  }, 3000);
}

// A callback function takes the ersult of an asynchronous operation and does something with it.
// In this case, we are passing a function that takes a user object and logs it to the console.
getUser(1, (user) => {
  console.log("User: ", user);
});

console.log("After");

// What is a Promise?
// A promise is an object that represents the eventual completion (or failure) of an asnycronous operation.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A new promise starts off in a pending state. It can then trnasition to a fulfilled state if the operation is successful, or a rejected state if the operation fails.

console.log("Before Promise");

// define a function that returns a promise object
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // make a mock database call
      console.log("Retrieving user with id: " + id);
      // Get the user from the database
      let user = {
        id: id,
        githubUsername: "ShareghYusefi",
      };
      if (user) {
        // If we have a user, we resolve the promise with the user object
        resolve(user);
      } else {
        // If we don't have a user, we reject the promise with an error message
        reject(new Error("User not found"));
      }
    }, 3000);
  });
}

// Call the getUserPromise function and pass it an id
// .then method is used to handle the resolved value of a promise
// .catch method is used to handle the rejected value of a promise
getUserPromise(2)
  .then((user) => {
    console.log("User: ", user);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

console.log("After Promise");
