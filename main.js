// // let count = 1;

// // const timer = setInterval(() => {
// //     console.log("Second:", count);

// //     if (count === 10) {
// //         clearInterval(timer);
// //         console.log("Finished!");
// //     }

// //     count++;
// // }, 1000);

// const prompt = require("prompt-sync")();

// let age = Number(prompt("Enter your age: "));

// console.log("Age:", age);

// const name = prompt("whats your name ");
// console.log(name);



const prompt = require("prompt-sync")();

let count = 10;

const timer1 = setInterval(() => {
    console.log(count);
    count--;

    if (count === 0) {
        clearInterval(timer1);

        console.log("\n🌌 Welcome to our Openverse Space Simulation!\n");

        let permission = prompt(
            "Do you want to start this simulation? (yes/no): "
        ).toLowerCase();

        if (permission === "yes") {
            let yourName = prompt("What's your name? ");

            console.log("\n🚀 Hello,", yourName + "!");
            console.log("Start your research on space!");
        } else {
            console.log("\n👋 Simulation cancelled.");
        }
    }
}, 1000);