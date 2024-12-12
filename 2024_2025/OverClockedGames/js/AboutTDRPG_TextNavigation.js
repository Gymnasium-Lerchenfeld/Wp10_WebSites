//Function to call when changing the text
function ABOUTTDRPG_ChangeText1() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "What is the 'Top Down RPG'?";
    const SecondHeader = document.createElement("h1");
    SecondHeader.textContent = "Where does the game take place?";

    //create TextContents
    const TextContent1 = document.createTextNode("'Top Down RPG' is the placeholder name for the first game set in th universe of the 'Overclocked Games' universe. It takes place after the ");
    const TextContent2 = document.createTextNode("It's a game game with a lot of different dimensions and two different camera-anges: wide third person and top down. One angle is for fighting, one for exploring.");
    const TextContent3 = document.createTextNode("The artstyle is more drawn/comiclike. The cutscenes look like someone is drawing them as they play out, sometimes the camera even zooms out of the game onto a piece of paper, on which the story is drawn.");
    const TextContent4 = document.createTextNode("The game startes in a different dimention then the one in ");
    const TextContent5 = document.createTextNode(" in a rural area close to a big forrest. As the story progresses, the player visits ");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");

    //create hyperlinks
    const A1 = document.createElement("a");
    A1.textContent = "backstory of Project S.";
    A1.href = "AboutProjectS.html";
    const A2 = document.createElement("a");
    A2.textContent = "Project S";
    A2.href = "AboutProjectS.html";
    const A3 = document.createElement("a");
    A3.textContent = "multipe dimentions.";
    A3.href = "AboutTopDownRPGDimensions.html";
 
    //delete current html content and append the created content
    document.getElementById("ABOUTTDRPG_MainText").innerHTML = '';
    document.getElementById("ABOUTTDRPG_MainText").append(FirstHeader, P1, TextContent1, A1, P2, TextContent2, P3, TextContent3, P4, SecondHeader, TextContent4, A2, TextContent5, A3);
}

//Function to call when changing the text
function ABOUTTDRPG_ChangeText2() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Backstory of the 'Top Down RPG'";

    //create TextContents
    const TextContent1 = document.createTextNode("*it is strongly advised to read the ");
    const TextContent2 = document.createTextNode(" before reading this part*");
    const TextContent3 = document.createTextNode("After defeating the king, his contience is banned into the sword which he used to captue the souls of the ones he kiled. Yet even in defeat, the king was still strong. He used the power of the souls in the sword to travel between dimentions, trying to find a loyal follower who could kill the bosses on the island and get him back to life. As he traveled between dimentions, he lost a lot of souls each dimention he vistied. They broke out of the soul and went over to the terrain of the dimentions, creating monsters and terrorising the population of the dimentions.");
    const TextContent4 = document.createTextNode("Because of that, the sword grew weaker and weaker every interdimentional travel it made. In the end, it ended up in a forrest in some random dimention, with only one interdimentional travel left to spare. There it lay, for more than 300 years. It layed there until the events of the Top Down RPG.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");

    //create hyperlinks
    const A1 = document.createElement("a");
    A1.textContent = "backstory of 'Project S'";
    A1.href = "AboutProjectS.html";

    //delete current html content and append the created content
    document.getElementById("ABOUTTDRPG_MainText").innerHTML = '';
    document.getElementById("ABOUTTDRPG_MainText").append(FirstHeader, P1, TextContent1, A1, TextContent2, P2, TextContent3, P3, TextContent4);
}

//Function to call when changing the text
function ABOUTTDRPG_ChangeText3() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "The playable Story";

    //create TextContents
    const TextContent1 = document.createTextNode("The player is a teen, growing up in a rural area near a forrest. It is the prie of his parents and the hope for a better life. That's why they are very harsh on it. One day, the teen can't take the pressure of always having to preform anymore. He thinks his parents just love him for his achievements and after beeing yelled at for not doing as well as the parent expected in a task decides to run away through the forrest in search of a better life.");
    const TextContent2 = document.createTextNode("In the forrest he follows a glowing light, which leads him to a ructy, old sword, burried inbetween rocks and all sorts of rumble.");
    const TextContent3 = document.createTextNode("He touches it, which triggers a cutscene in which he and the sword travvel to a ");
    const TextContent4 = document.createTextNode("In this dimention he is lead to a boss and helps the civilians to defeat it. By doing so, the sword gains the souls back and is able to commit to dimentional travels. It does so by following it's path from all the year back.");
    const TextContent5 = document.createTextNode("This carries on through multiple dimentions until the sword is strong enough to infiltrate the mind of the player. The last semmingly interdiomentional travel is a travel into the contience of the teen. There the last fight occures. After defeating the contience of the king with imagination (it's not clear yet, how) the players actions are weighed. If he did a lot of bad quest, like killing people, the mind of him swallows him because he can't stand the memories of all the bad things he's done. If he was good enough, the player escapes the mind and gets sent back to his own dimention, where he unites back with his parents, noticing they do truly love him.");
    const TextContent6 = document.createTextNode("Either way the sword gains so much energy it can travel back to the dimention of ");
    
    //create breaks
    const BR1 = document.createElement("br");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    const P5 = document.createElement("p");


    //create hyperlinks
    const A1 = document.createElement("a");
    A1.textContent = "different dimention.";
    A1.href = "AboutTopDownRPGDimensions.html";
    const A2 = document.createElement("a");
    A2.textContent = "Project S.";
    A2.href = "AboutProjectS.html";

    //delete current html content and append the created content
    document.getElementById("ABOUTTDRPG_MainText").innerHTML = '';
    document.getElementById("ABOUTTDRPG_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, BR1, TextContent3, A1, P3, TextContent4, P4, TextContent5, P5, TextContent6, A2);
}
