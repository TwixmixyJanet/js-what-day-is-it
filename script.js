var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here

console.log(`Today is ${weekday}.`);

if (weekday === "Monday") {
  console.log(`Let's make this a great week!`);
} else if (weekday === "Tuesday") {
  console.log(`Worky work!`);
} else if (weekday === "Wednesday") {
  console.log(`Hump day!`);
} else if (weekday === "Thursday") {
  console.log(`Today is your day!`);
} else if (weekday === "Friday") {
  console.log(`Wrap it up and let's get out of here!`);
} else {
  console.log(`Time to zen out and enjoy your time away. You've earned it!`);
}
