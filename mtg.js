
var decklist=
`1 Akki Battle Squad
1 Arcane Signet
1 Ardent Plea
1 Aurelia, the Warleader
1 Aurora Phoenix
1 Auton Soldier
1 Blasphemous Act
1 Boarding Party
1 Breath of Fury
1 Combat Celebrant
1 Command Tower
1 Cybermen Squadron
1 Dark Apostle
1 Decanter of Endless Water
1 Deserted Beach
1 Everybody Lives!
1 Everything Comes to Dust
1 Evolving Wilds
1 Exotic Orchard
1 Fade Away
1 Farewell
1 Fiery Islet
1 Flaming Tyrannosaurus
1 Frostboil Snarl
1 Furycalm Snarl
1 Glacial Fortress
1 Herald of Secret Streams
1 Heralds of Tzeentch
1 Into the Time Vortex
1 Iraxxa, Empress of Mars
1 Irrigated Farmland
4 Island
1 Jori En, Ruin Diver
1 Judoon Enforcers
1 Karlach, Fury of Avernus
1 Lightning Greaves
1 Machine God's Effigy
1 Memory Worm
1 Mind Stone
1 Mirage Mirror
1 Mirrormade
1 Mizzix, Replica Rider
1 Moraug, Fury of Akoum
4 Mountain
1 Myriad Landscape
1 Mystic Monastery
1 Noise Marine
1 Ominous Cemetery
1 Overpowering Attack
1 Path of Ancestry
1 Path to Exile
4 Plains
1 Port Razer
1 Port Town
1 Prairie Stream
1 Relentless Assault
1 Response/Resurgence
1 RMS Titanic
1 Rogue's Passage
1 Savage Beating
1 Scourge of the Throne
1 Sculpting Steel
1 Seize the Day
1 Skycloud Expanse
1 Sol Ring
1 Sonic Screwdriver
1 Storm of Saruman
1 Stormcarved Coast
1 Sunbaked Canyon
1 Sundown Pass
1 Swiftfoot Boots
1 Swords to Plowshares
1 Talisman of Conviction
1 Talisman of Creativity
1 TARDIS
1 Temple of Enlightenment
1 Temple of Epiphany
1 Temple of Triumph
1 The Twelfth Doctor
1 The War Doctor
1 Thespian's Stage
1 Thought Vessel
1 Thriving Bluff
1 Tomb of Horrors Adventurer
1 Trenzalore Clocktower
1 Vanquish the Horde
1 Vega, the Watcher
1 War Room
1 Wild-Magic Sorcerer
1 Ryan Sinclair
1 The First Doctor`
function GrabImage(name){
let defult="https://api.scryfall.com/cards/named?fuzzy="+name+"&format=image"
var img = document.getElementById("image");
img.src=defult
}

function MakeButton(){
    const button = document.createElement('button');
    var text=document.getElementById("card").value
     var List=text.split(/\r?\n/);
     for(let i=0;i<List.length;i++){
        tem=List[i].split(" ")
     }
    // Set the button text
    button.innerText =document.getElementById("card").value;
    button.value=document.getElementById("card").value
    button.onclick=function() {
        GrabImage(this.value);
    };
    const div = document.getElementById('buttonContainer');

    div.appendChild(button);
   


}