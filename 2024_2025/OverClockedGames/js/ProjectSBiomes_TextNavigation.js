//Function to call when changing the text
function ProjectSBiome_ChangeText1() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Forest Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The Forest Biome is the first biome the player finds himself when stranding on the island.");
    const TextContent2 = document.createTextNode("The Forest is very big and should habe very big trees with a few paths that run through it.");
    const TextContent3 = document.createTextNode("At some point the player should have the possibility to get an overview over the forest to really see how big it is.");
    const TextContent4 = document.createTextNode("In the forest there is the first boss which should destroy the trees and make the scene very impressive.");
    
    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");

    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4);
}

//Function to call when changing the text
function ProjectSBiome_ChangeText2() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Cave Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The cave biome is located directly under the forest biome.");
    const TextContent2 = document.createTextNode("It should have really big and impressive cave systems with a lot of narrow tunnels through wich the player has to get through.");
    const TextContent3 = document.createTextNode("In the center of the biome there is a small underground city of the few survivors on the island.");
    const TextContent4 = document.createTextNode("There, the player can trade get new armor, learn things and most importantly get hints to the story and his objective.");
    const TextContent5 = document.createTextNode("There is also a tunnel which leads through the ground under the desert and the mountains directly to a city far away.");
    const TextContent6 = document.createTextNode("This was built by antient people, however the player cant get through because the worm, the desert boss, is blocking the way and killing anyone trying to get through.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    const P5 = document.createElement("p");
    const P6 = document.createElement("p");

    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4, P5, TextContent5, P6, TextContent6);
}

//Function to call when changing the text
function ProjectSBiome_ChangeText3() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Desert Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The Desert should be an uneven terrain of endless sand.");
    const TextContent2 = document.createTextNode("There should be many buildings scattered across it to break this emptiness.");
    const TextContent3 = document.createTextNode("The boss of the biome is a giant worm which is fought in a big tunnel system of an ancient temple.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");

    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3);
}

//Function to call when changing the text
function ProjectSBiome_ChangeText4() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Magic Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The magic biome is the final Biome which is located on the other side of the island.");
    const TextContent2 = document.createTextNode("It is made up of many magic cristalls and many vibrant colors.");
    const TextContent3 = document.createTextNode("In the center of the biome is a big Castle which is where the kings of the past met to discuss things.");
    const TextContent4 = document.createTextNode("That is also where the final bossfight is going to happen.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    
    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4);
}

//Function to call when changing the text
function ProjectSBiome_ChangeText5() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Lava Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The lava biome is directly after the mountain biome.");
    const TextContent2 = document.createTextNode("It should contain many lava lakes and rivers which the player has to find a way around.");
    const TextContent3 = document.createTextNode("Because of the heat the player has to even more careful than in the desert and needs special spells or armor to withstand the heat.");
    const TextContent4 = document.createTextNode("The boss is located at the center of a lava lake in the biome where a big underground complex with many traps and puzzles is located.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");

    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4);
}

//Function to call when changing the text
function ProjectSBiome_ChangeText6() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Mountain Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The Mountain biome is a long mountain chain which goes through the middle of the island.");
    const TextContent2 = document.createTextNode("It is meant to be splitting the island into two parts and seperate the harder biomes by the starter biomes.");
    const TextContent3 = document.createTextNode("The player cant go over the mountains if he hasnt reached a specific point of the story.");
    const TextContent4 = document.createTextNode("There is only one way over the mountains, however later on the player can freely explore them and fight the boss.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");

    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4);

}

//Function to call when changing the text
function ProjectSBiome_ChangeText7() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Wide Plains Biome";

    //create TextContents
    const TextContent1 = document.createTextNode("The Wide Plains Biome lies directly behind the forest biome.");
    const TextContent2 = document.createTextNode("Its core is its wide landscapes which the player can see.");
    const TextContent3 = document.createTextNode("As this is very open there is not many wildlife there but a few old village ruins and monsters.");
    const TextContent4 = document.createTextNode("In one of these villages live some survivors but only a hand full of them.");
    const TextContent5 = document.createTextNode("The biome boss is located at the end of the biome in a small castle.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    const P5 = document.createElement("p");

    //delete current html content and append the created content
    document.getElementById("ProjectSBiome_MainText").innerHTML = '';
    document.getElementById("ProjectSBiome_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4, P5, TextContent5);
}