// const fs = require("fs");
// const EventEmitter = require("events").EventEmitter;

// const emitter = new EventEmitter();

// const FILE_PATH = "./eventCounts.json";

// // Load event counts from file
// let eventCounts = {};
// try {
//     eventCounts = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
// } catch (err) {
//     eventCounts = { userLogin: 0 }; // Default value if file doesn't exist
// }

// // Listen for "user-login" event
// emitter.on("user-login", (userName) => {
//     eventCounts["userLogin"] = (eventCounts["userLogin"] || 0) + 1;
//     console.log(`${userName} Logged in`);

//     // Save the updated count to the file
//     fs.writeFileSync(FILE_PATH, JSON.stringify(eventCounts));
// });

// // Listen for "summery" event
// emitter.on("summery", () => {
//     console.log(eventCounts);
// });

// // Emit events
// emitter.emit("user-login", "SABBIR RAHMAN");
// emitter.emit("summery");
