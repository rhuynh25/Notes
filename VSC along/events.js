//Bank emitter app

const events = require("events"); // Here we are importing the events from the module
const eventEmitter = new events.EventEmitter(); // Here we are creating a new instance with the event module

// Listner

eventEmitter.on("data_send", function (payload) {
  console.log("Here is your data...");
  console.log(payload);
  console.log("End.");
});

eventEmitter.on("connection_developed", function () {
  console.log("Grabbing your bank info ;)");
  const someData = {
    id: Math.random() * 1000,
    message: "Dont Share my info lol",
  };
  eventEmitter.emit("data_send", someData);
});

const makeConnection = () => {
  // Defining a function creates a connection after 5 sec once we recieve our data
  console.log("Makling the connection...");
  setTimeout(() => {
    console.log("Connection is made.");
    eventEmitter.emit("connection_developed");
  }, 3000);
};

makeConnection();