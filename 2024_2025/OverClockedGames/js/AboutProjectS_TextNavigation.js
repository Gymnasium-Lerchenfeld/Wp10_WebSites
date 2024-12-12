//Function to call when changing the text
function ABOUTPROJECTS_ChangeText1() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "What is 'Project S'?";
    const SecondHeader = document.createElement("h1");
    SecondHeader.textContent = "Where does the game take place?";
  
    //create TextContents
    const TextContent1 = document.createTextNode("'Project S' is the codename for the main game of Overclocked Games.")
    const TextContent2 = document.createTextNode("The 'S' stands for 'Soulslike game'.");
    const textContent3 = document.createTextNode("It's a third-person open world game with a big combat and story aspect. More on that later.");
    const textContent4 = document.createTextNode("The game takes place on an island far away from any land or civilization. It's devided into multiple biomes, each one a different biome theme, e.g. a desert.");
  
    //create breaks
    const BR1 = document.createElement("br");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
  
    //delete current html content and append the created content
    document.getElementById("ABOUTPROJECTS_MainText").innerHTML = '';
    document.getElementById("ABOUTPROJECTS_MainText").append(FirstHeader, TextContent1, BR1, TextContent2, P1, textContent3, P2, SecondHeader, P3, textContent4);
  }
  
  //Function to call when changing the text
  function ABOUTPROJECTS_ChangeText2() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "Beginning of the playable Story from Project S";
  
    //create TextContents
    const TextContent1 = document.createTextNode("The Story is linked to the one of the ");
    const TextContent2 = document.createTextNode(". The player is a high ranked official in the military of his country and is on his way to a battle (together with a fleet of 4 different ships).");
    const TextContent3 = document.createTextNode("On their way they run into an ambush. Three of the ships (all exept for the one the player in on) are sunk and the ship where the player is on gets severly damaged during a playable cutscene.");
    const TextContent4 = document.createTextNode("The main mast gets shot off and falls into the water. Shortly after that the player himself falls into the water, because the ship tilts to one side. He holds on the the broken mast in the water and the camera slowly dives into the water.");
    const TextContent5 = document.createTextNode("You see a pocket watch slowly fall down in the water while the background gets darker and darker untill the watch is the only source of light in all the ddarkness.");
    const TextContent6 = document.createTextNode("When that is the case, the watch turns into the 'O' of Overclocked Games, from which the entire logo unrolls.");
    const TextContent7 = document.createTextNode("Then the camera pans up through the water and shows the battlefield with the destroyed ships. It fades to black and then fades back in with the sound of crashing waves. The player wakes up on a beach with only a knive to work with.");
  
    //create hyperlinks
    const A1 = document.createElement("a");
    A1.href = "aboutTopDownRPG.html";
    A1.textContent = "Top Down RPG";
  
    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    const P5 = document.createElement("p");
    const P6 = document.createElement("p");
  
    //delete current html content and append the created content
    document.getElementById("ABOUTPROJECTS_MainText").innerHTML = '';
    document.getElementById("ABOUTPROJECTS_MainText").append(FirstHeader, P1, TextContent1, A1, TextContent2, P2, TextContent3, P3, TextContent4, P4, TextContent5, P5, TextContent6, P6, TextContent7);
  }
  
  //Function to call when changing the text
  function ABOUTPROJECTS_ChangeText5() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "The actual Gameplay";
  
    //create TextContents
    const TextContent1 = document.createTextNode("As already said, the Game takes place on an island devided into different biomes. The biomes correspond to different elements.We're still in the planing phase of this feature, but we already have eight Elements with placeholder names:");
    const TextContent2 = document.createTextNode("Fire, Water, Earth, Air, Ice, Death, Life, Magic. More elements are in the working.");
    const TextContent3 = document.createTextNode("Each biome has a different Boss, who drops a weapon which is very strong against a specific type of enemy/monster. It can be used to get easier access to items in the biome of the boss.");
    const TextContent4 = document.createTextNode("Slowly but surely the player gets more and more access to information concerning the story of the island.");
  
    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
  
    //delete current html content and append the created content
    document.getElementById("ABOUTPROJECTS_MainText").innerHTML = '';
    document.getElementById("ABOUTPROJECTS_MainText").append(FirstHeader, P1, TextContent1, P2, TextContent2, P3, TextContent3, P4, TextContent4)
  }

  //Function to call when changing the text
  function ABOUTPROJECTS_ChangeText3() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "The Backstory";

    //create TextContents
    const TextContent1 = document.createTextNode("The island (and with it our world) was once connected to the other dimentions of the ");
    const TextContent2 = document.createTextNode(", even though they aren't officially connected anymore when the 'Top Down RPG' plays.");
    const TextContent3 = document.createTextNode("A long time ago there was a king of one of the biomes, who wanted more power. He grew hungry of it and started killing people with a special sword produced for one purpose only: To kill others and take their soul. Each soul made the sword stronger and stronger, untill there was almost no stopping it.");
    const TextContent4 = document.createTextNode("The killing first happened in the shaddows, while the king sew misstrust and hatred between the other kings and queens of the island and dimentions, untill the connections between the dimentions broke.");
    const TextContent5 = document.createTextNode("All this time, the bad things the king did got to his soul. It withered and because of that, the outside of his body began to get less and less human. He was able to hide this through spells for a while, but after some time, his soul was too withered to hide it.");
    const TextContent8 = document.createTextNode(" As the other monarchs noticed the wrongdoing of the king, they bound together in a final fight against him. But one king was scared of dying and therefore ran from the fight.");
    const TextContent6 = document.createTextNode("Because of that the monarchs couldn't compleatly defeat the king. Instead they banned his soul into their elemental weapons and his conscience into the sword of the king, together with the souls of the ones he killed.");
    const TextContent7 = document.createTextNode("Yet the defeat of the king came at the cost of the lives of the monarchs. The king who fled came back to the dead bodies of all monarchs exept one, who just so managed to tell the king who fled what had happend. The king who had fled distributed the elemental weapons of the monarchs to the different biomes of the island; one for every biome. He summoned powerful creatures to pretect them.");
    const TextContent9 = document.createTextNode("Then he lived the rest of his life as the last king. After his death, the magical protection of the kingdoms fell and allowed monsters to cross the borders and infest the lands. They overran the citys, the lands and the entire kingdoms. They forced the people into hidden cities (which the player visits later in the game). These cities have markets for everything, e.g. maps, swords or armor. They are hidden, last bastions against the invasion of the monsters.");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    const P5 = document.createElement("p");
    const P6 = document.createElement("p");
    const P7 = document.createElement("p");

    //create hyperlinks
    const A1 = document.createElement("a");
    A1.textContent = "Top Down RPG";
    A1.href = "aboutTopDownRPG.html";
    
    //delete current html content and append the created content
    document.getElementById("ABOUTPROJECTS_MainText").innerHTML = '';
    document.getElementById("ABOUTPROJECTS_MainText").append(FirstHeader, P1, TextContent1, A1, TextContent2, P2, TextContent3, P3, TextContent4, P4, TextContent5, TextContent8, P5, TextContent6, P6, TextContent7, P7, TextContent9);
  }

  //Function to call when changing the text
  function ABOUTPROJECTS_ChangeText4() {
    //create headers
    const FirstHeader = document.createElement("h1");
    FirstHeader.textContent = "The playable Story";

    //create TextContents
    const TextContent1 = document.createTextNode("After the player gets stranded on the island, he wakes up on a beach in front of a cliff line. In the cliff line there's a 'staircase' (in the stone), that goes up the cliff line. The player walkes up it and gets to a ");
    const TextContent2 = document.createTextNode(". A storm beginnes and forces the player to go into a cave, where he fights and kills the first mythical creature/monster (the caracter is from our world, so he doesn't know about these creatures).");
    const TextContent3 = document.createTextNode("The player is then forced to push further into the cave, where he has to fight more monsters (spider-like). The fighting is hard, as he only has a normal sword from our world which isn't that good against monsters. After a while of hard fighting he gets through to the back of the cave. Here there is a spiderlike, 4 meter tall creature: the first boss. The player fights it and then sees a sword, which the creature seems to protect. He doesn't kill the creature, but instead drives it off to get to the sword.");
    const TextContent4 = document.createTextNode("After driving the boss off, the player touches the sword. A cutscene plays, in which the sword sends a beam of green light into the arm of the player. Then a mysterious hooded figure appears behind the player. It starts to speak to him and tells him there are monsters like this all over the isle. The player should find and kill them to free the civilization from the terror of the monsters. If he does that and brings the weapons the monsters are guarding to the place the mysterious figure describes, the figure will bring the player back home. At least it says so.");
    const TextContent5 = document.createTextNode("Then the player gets chased all through the forrest (the spider figure chases him trough the trees). He stumbles out of the forrest onto an wide, open area, where the next part ofthe game takes place.");
    const TextContent6 = document.createTextNode("The player (hopefully; he at least he shouldn't) doesn't know the figure is only an illusion, created by the part of the soul locked into the sword. It went over to the player as he touched the sword and by that went into his mind. It guides the player to the different monsters, created from the last king: The bosses of the game. By visiting the ");
    const TextContent7 = document.createTextNode(", killing the bosses and visiting the hidden cities the player gets information about the backstory (but just so much he doesn't get suspicious). The cities are the only place the player is able to get maps of regions and new armor.");
    const TextContent8 = document.createTextNode("By killing the bosses a new game mechanic is introduced: magic. The player can insert magic stones into his armor, which makes casting spells possible. Each boss gives a different magic-stone, which can be combined to make more powerful spells.");
    const TextContent9 = document.createTextNode("After fighting off all the bosses in all the biomes and getting every magic/elemental weapon you bring them to the last biome, the ")
    const TextContent10 = document.createTextNode(". You put all the weapons together and by that the soul of the king gets back into the corrupted body. While that happens, there is a big reveal in which the mysterious figure and the resurrecting king complete each others scentances and in the end speak at the same time while revealing they're the same being. After that there's the last bossfight, which is the end of the game. Then: Happy ending, the bad king (probably) is killed (maybe, maybe not).");

    //create breaks
    const BR1 = document.createElement("br");

    //create Paragraphs
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const P4 = document.createElement("p");
    const P5 = document.createElement("p");
    const P6 = document.createElement("p");

    //create hyperlinks
    const A1 = document.createElement("a");
    A1.textContent = "forrest (dark, dense and huge)";
    A1.href = "AboutProjectSBiomes.html";
    const A2 = document.createElement("a");
    A2.textContent = "kingdomes";
    A2.href = "AboutProjectSBiomes.html";
    const A3 = document.createElement("a");
    A3.textContent = "magic biome";
    A3.href = "AboutProjectSBiomes.html";

    //delete current html content and append the created content
    document.getElementById("ABOUTPROJECTS_MainText").innerHTML = '';
    document.getElementById("ABOUTPROJECTS_MainText").append(FirstHeader, P1, TextContent1, A1, TextContent2, P2, TextContent3, BR1, TextContent4, P3, TextContent5, A2, TextContent6, P4, TextContent7, P5, TextContent8, P6, TextContent9, A3, TextContent10);
  }