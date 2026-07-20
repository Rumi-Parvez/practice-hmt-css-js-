const prompt = require("prompt-sync")();

// space objects 
let Asteroid = [ ]
let Comet = [ ]
let Moon = [ ]
let Planet = [ ]
let Star = [ ]
let UniversalObjects = []

// Array maximaum
let Astcond = [ (1.0*10**21), 1000   , 150 , 30, 0 ];
let Comcond = [ (1.0*10**16), 50     , 50  , 70, 0 ];
let Mocond = [ (1.0*10**23) , 5000   , 120 , 5 , 3 ];
let Placond = [ (1.0*10**28), 140000 , 500 , 60, 30 ];
let Stacond = [ (1.0*10**29), 100000 , 3000, 0 , 300 ];



let demo = "(Answare -- yes or Not )";
let number = "( Number 1234*** ) "

// Declaring all innovation variables at top scope with default values to prevent crashes
let YourInovation = "Unknown";
let isInovation = false;
let inovationNameis = "Not Named";
let inovationdateis = "N/A";
let inovationNOteis = "No Notes";
let inovationcountryis = "N/A";

let permission = prompt("Do you wanna start this simulation?  ( Ansawre --- Yes or Not) ==== : ").toLocaleLowerCase();

if (permission === "yes") {
    let yourName = prompt("What's your name? ");

    console.log("\n🚀 Hello,", yourName + "!");
    console.log("Start your research on space!");

    let research = prompt('Do you want to reacherse? '+ demo + "---:").toLocaleLowerCase();

    if (research === "yes") {
        
        let count = 20 ;
        while(count >= 7 ){
            console.log('Finding object 🎯-- :' + count )
            count--
        }
        console.log(" 🚨 SPACE⚠️")
        console.log(" 🚨 SPACE⚠️")
        console.log(" 🚨 SPACE⚠️")
        console.log(" 🚨 SPACE⚠️")
        console.log("Finaly wil detected an object in space--")
        console.log("📡 Unknown Space Object Detected...")
        console.log("Signal ID : X-2049")
        console.log("Status    : Unidentified")
        
        let aggre = prompt(" start rsearching  "+ demo + "--- : ",).toLocaleLowerCase();

        if (aggre == 'yes') {

            // inputs section 
            const Mass = Number(prompt(" Enter the Mass for - Undifind objects " + number + " ---- : "))
            const Diameter = Number (prompt(" Enter the Diameter for - Undifind objects " + number + " ---- : "))
            const Temperature = Number( prompt(" Enter the Temperature for - Undifind objects " + number + " ---- : "))
            const ProducesLight = prompt(" Enter the Produces Light? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const NuclearFusion = prompt(" Enter the Nuclear Fusion? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const OrbitsAStar = prompt(" Enter the Orbits a Star? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const MassOrbitsAPlanet = prompt(" Enter the Orbits a Planet? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const HasAtmosphere = prompt(" Enter the Has Atmosphere? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const HasTail = prompt(" Enter the Has Tail? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const MadeOFIce = prompt(" Enter the Made of Ice? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const MadeOfRock = prompt(" Enter the Made of Rock? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const IrregularShape = prompt(" Enter the Irregular Shape? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const ClearsOrbit = prompt(" Enter the Clears Orbit? for - Undifind objects " + demo + " ---- : ").toLocaleLowerCase();
            const OrbitalSpeedKM_s = Number(prompt(" Enter the Orbital Speed (km/s) for - Undifind objects " + number + " ---- : "))
            const GravityM_s2 = Number(prompt(" Enter the Gravity (m/s²) for - Undifind objects " + number + " ---- : "))

            console.log("Me : i had done to research this object ")
            console.log("███ 20%")
            console.log("███████ 45%")
            console.log("████████████ 63%")
            console.log("████████████████89%")
            console.log("████████████████████ 100%")

            console.log("Classification Complete!😀")

            // conditions
            
            // Asteroid 
            if( Mass <= Astcond[0] && Diameter <= Astcond[1] && Temperature <= Astcond[2] && OrbitalSpeedKM_s <= Astcond[3] && GravityM_s2 <= Astcond[4] && ProducesLight == "not" && NuclearFusion == "not" && OrbitsAStar == "yes" && MassOrbitsAPlanet == "not" && HasAtmosphere == "not" && HasTail == "not" && MadeOFIce == "not" && MadeOfRock == "yes" && IrregularShape == "yes" && ClearsOrbit == "not" ){
                console.log("===========================================")
                console.log("it's an Asteroid")
                console.log("Confidence: 98.7% ")
                YourInovation = "Asteroid" ;
                isInovation = true ;
            }
            
            // Comcond
            else if( Mass <= Comcond[0] && Diameter <= Comcond[1] && Temperature <= Comcond[2] && OrbitalSpeedKM_s <= Comcond[3] && GravityM_s2 <= Comcond[4] && ProducesLight == "not" && NuclearFusion == "not" && OrbitsAStar == "yes" && MassOrbitsAPlanet == "not" && HasAtmosphere == "not" && HasTail == "yes" && MadeOFIce == "yes" && MadeOfRock == "not" && IrregularShape == "yes" && ClearsOrbit == "not" ){
                console.log("===========================================")
                console.log("it's a Comet")
                console.log("Confidence: 98.7% ")
                YourInovation = "Comet" ;
                isInovation = true ;
            }
            
            // Mocond
            else if( Mass <= Mocond[0] && Diameter <= Mocond[1] && Temperature <= Mocond[2] && OrbitalSpeedKM_s <= Mocond[3] && GravityM_s2 <= Mocond[4] && ProducesLight == "not" && NuclearFusion == "not" && OrbitsAStar == "not" && MassOrbitsAPlanet == "yes" && HasAtmosphere == "not" && HasTail == "not" && MadeOFIce == "not" && MadeOfRock == "yes" && IrregularShape == "not" && ClearsOrbit == "not" ){
                console.log("===========================================")
                console.log("it's a Moon")
                console.log("Confidence: 98.7% ")
                YourInovation = "Moon" ;
                isInovation = true ;
            }
            
            // Placond
            else if( Mass <= Placond[0] && Diameter <= Placond[1] && Temperature <= Placond[2] && OrbitalSpeedKM_s <= Placond[3] && GravityM_s2 <= Placond[4] && ProducesLight == "not" && NuclearFusion == "not" && OrbitsAStar == "yes" && MassOrbitsAPlanet == "not" && HasAtmosphere == "yes" && HasTail == "not" && MadeOFIce == "not" && MadeOfRock == "yes" && IrregularShape == "not" && ClearsOrbit == "yes" ){
                console.log("===========================================")
                console.log("it's a Planet")
                console.log("Confidence: 98.7% ")
                YourInovation = "Planet" ;
                isInovation = true ;
            }
            
            // Stacond
            else if( Mass >= Stacond[0] && Diameter >= Stacond[1] && Temperature >= Stacond[2] && OrbitalSpeedKM_s <= Stacond[3] && GravityM_s2 <= Stacond[4] && ProducesLight == "yes" && NuclearFusion == "yes" && OrbitsAStar == "not" && MassOrbitsAPlanet == "not" && HasAtmosphere == "not" && HasTail == "not" && MadeOFIce == "not" && MadeOfRock == "not" && IrregularShape == "not" && ClearsOrbit == "not" ){
                console.log("===========================================")
                console.log("it's a Star")
                console.log("Confidence: 98.7% ")
                YourInovation = "Star" ;
                isInovation = true ;
            }
            else {
                console.log("===========================================")
                console.log("it's an Unidintyfied Object")
                console.log("Confidence: 98.7% ")
                YourInovation = "UFO- Objects" ;
                isInovation = true ;
            }

        }
        console.log("===========================================")
        
        if(isInovation) {
            console.log("Penaint your Inovation ")

            inovationNameis = prompt("Enter Your inovation " + YourInovation + "Official name- : ")
            inovationdateis = Number(prompt("Discovery Date- : "))
            inovationNOteis = prompt(" Notes- :")
            inovationcountryis = prompt("Country- : ")
        }
        console.log("===========================================")

        console.log("Your Inovation is a new :" + YourInovation)
        console.log("Official Name : " + inovationNameis )
        console.log("Discovered By :" + yourName )
        console.log("Discovery Date : " + inovationdateis ) // Fixed typo here
        console.log("Notes : " + inovationNOteis ) // Fixed typo here
        console.log("===========================================")
    }
    
    if(YourInovation == "Asteroid"){
        Asteroid.push(YourInovation)
        console.log(YourInovation + " Successfully Added to the Space Database.")
        console.log("Add or more Objects from space. enjoy for reasearch 😀😎")
        console.log("Your Discoverde objects " + Asteroid + Comet + Moon + Planet + Star + UniversalObjects    )
        console.log("The End of Simulation📜. Thank you for Discover New Object of " + YourInovation )
        console.log("===========================================")
        
    }
    
    else if(YourInovation == "Comet"){
        Comet.push(YourInovation)
        console.log(YourInovation + " Successfully Added to the Space Database.")
        console.log("Add or more Objects from space. enjoy for reasearch 😀😎")
        console.log("Your Discoverde objects " + Asteroid + Comet + Moon + Planet + Star + UniversalObjects    )
        console.log("The End of Simulation📜. Thank you for Discover New Object of " + YourInovation )
        console.log("===========================================")
    }
    else if(YourInovation == "Moon"){
        Moon.push(YourInovation)
        console.log(YourInovation + " Successfully Added to the Space Database.")
        console.log("Add or more Objects from space. enjoy for reasearch 😀😎")
        console.log("Your Discoverde objects " + Asteroid + Comet + Moon + Planet + Star + UniversalObjects    )
        console.log("The End of Simulation📜. Thank you for Discover New Object of " + YourInovation )
        console.log("===========================================")
    }
    else if(YourInovation == "Planet"){
        Planet.push(YourInovation)
        console.log(YourInovation + " Successfully Added to the Space Database.")
        console.log("Add or more Objects from space. enjoy for reasearch 😀😎")
        console.log("Your Discoverde objects " + Asteroid + Comet + Moon + Planet + Star + UniversalObjects    )
        console.log("The End of Simulation📜. Thank you for Discover New Object of " + YourInovation )
        console.log("===========================================")
    }
    else if(YourInovation == "Star"){
        Star.push(YourInovation)
        console.log(YourInovation + " Successfully Added to the Space Database.")
        console.log("Add or more Objects from space. enjoy for reasearch 😀😎")
        console.log("Your Discoverde objects " + Asteroid + Comet + Moon + Planet + Star + UniversalObjects    )
        console.log("The End of Simulation📜. Thank you for Discover New Object of " + YourInovation )
        console.log("===========================================")
    }
    else if(YourInovation == "UFO- Objects"){
        UniversalObjects.push(YourInovation)
        console.log(YourInovation + " Successfully Added to the Space Database.")
        console.log("Add or more Objects from space. enjoy for reasearch 😀😎")
        console.log("Your Discoverde objects " + Asteroid + Comet + Moon + Planet + Star + UniversalObjects    )
        console.log("The End of Simulation📜. Thank you for Discover New Object of " + YourInovation )
        console.log("===========================================")
    }

} 
else {
    console.log("\n👋 Simulation cancelled.");
    console.log("At frist make sure Permission of this simulation. So re start agin . and for permission use thsi " + demo)
}