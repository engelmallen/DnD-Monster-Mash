$(document).ready(function() {

    let monsterType =[
        "Aberration",
        "Beast",
        "Celestial",
        "Construct",
        "Dragon",
        "Elemental",
        "Fey",
        "Fiend",
        "Giant",
        "Humanoid",
        "Monstrosity",
        "Ooze",
        "Plant",
        "Undead",
    ]

let submit = document.getElementById("submit")

submit.addEventListener ("click", monsterSearch)

function monsterSearch (){
    let searchTerm=""
        if(inputCR.value ==="" & inputType.value !==""){
            console.log("No CR Value given but the following type was selected" + inputType.value)
                searchTerm = "type=" + inputType.value
            console.log(searchTerm)
        }
        else if(inputCR.value !="" & inputType.value == "blank"){ 
            console.log(" No type was selected but the CR Value= " + inputCR.value)
            searchTerm = "challenge_rating=" + inputCR.value
            console.log(searchTerm)
            }
        else{ console.log("No Value was provided")

            }

    $.ajax({
	       async: true,
	       crossDomain: true,
	       url: "https://api.open5e.com/monsters/?" + searchTerm,
	       method: "GET",
            success: function(monsterData) {
            console.log(monsterData)
            displayMonsterData(monsterData)
        }
    })
}

function displayMonsterData (monsterData) {
//build monsterList array from search value - capture full details of the monster in the array
         let monsterList=[]
         let monsterContainer=document.getElementById('monsters')
         for(let i=0; i<monsterData.results.length; i++){
             monsterList.push(monsterData.results[i])
         }
        console.log(monsterList)
    
//build monster entry -- Entry displays the monster stats
    for (let j=0; j<monsterList.length; j++){
        
        let monsterName = document.createElement('button')
            monsterName.innerHTML = monsterList[j].name
            monsterContainer.appendChild(monsterName)
            monsterName.setAttribute("class", "monster-name")
        
        let monsterEntry=document.createElement('div')
            monsterContainer.appendChild(monsterEntry)
            monsterEntry.setAttribute("class","monster-entry")

//Monster Armor Class
        let monsterAC=document.createElement('div')
            monsterAC.innerHTML= "Armor Class: " + monsterList[j].armor_class
            monsterEntry.insertAdjacentElement("beforeend", monsterAC)
//Monster Hit Points
        let monsterHP=document.createElement('div')
            monsterHP.innerHTML= "Hit Points: " + monsterList[j].hit_points
            monsterEntry.insertAdjacentElement("beforeend", monsterHP)
// Monster Speed
         let monsterSpeed=document.createElement('div')
             monsterSpeed.innerHTML= "Speed:"
            Object.entries(monsterList[j].speed).forEach(([key, value]) => monsterSpeed.innerHTML += (` ${key}:${value}`));
            monsterEntry.insertAdjacentElement("beforeend", monsterSpeed)
// Monster Saves
         let monsterSaves=document.createElement('div')
            monsterHP.innerHTML= "Save: Strengeth_save look for other ones"
            monsterEntry.insertAdjacentElement("beforeend", monsterSaves)
//Monster Stats
        let monsterStats =document.createElement('ul')
            monsterEntry.insertAdjacentElement("beforeend", monsterStats)
            monsterStats.setAttribute("class", "monster-stats")
        let monsterStr =document.createElement('li')
            monsterStr.innerHTML= "STR: " + monsterList[j].strength
            monsterStats.insertAdjacentElement("beforeend", monsterStr)
                                               
        let monsterDex =document.createElement('li')
            monsterDex.innerHTML= "DEX: " + monsterList[j].dexterity
            monsterStats.insertAdjacentElement("beforeend", monsterDex)
        
        let monsterCon =document.createElement('li')
            monsterCon.innerHTML= "CON: " + monsterList[j].constitution
            monsterStats.insertAdjacentElement("beforeend", monsterCon)
        
        let monsterInt =document.createElement('li')
            monsterInt.innerHTML= "INT: " + monsterList[j].intelligence
            monsterStats.insertAdjacentElement("beforeend", monsterInt)
                                               
        let monsterWis =document.createElement('li')
            monsterWis.innerHTML= "WIS: " + monsterList[j].wisdom
            monsterStats.insertAdjacentElement("beforeend", monsterWis)
        
        let monsterChar =document.createElement('li')
            monsterChar.innerHTML= "CHA: " + monsterList[j].charisma
            monsterStats.insertAdjacentElement("beforeend", monsterChar)
//Monster Actions
        let actions =[]
        let monsterActions =document.createElement('div')
            monsterActions.innerHTML= "<h2>Actions:</h2>"
            monsterEntry.insertAdjacentElement("beforeend", monsterActions)
            monsterActions.setAttribute("class","monster-actions")
        
         
        
        
        console.log(Object.values(monsterList[j].actions))
            for(let k=0; k < monsterList[j].actions.length; k++){
                let monsterAction = document.createElement('div')
                    monsterAction.innerHTML = monsterList[j].actions[k].name + ": " + monsterList[j].actions[k].desc
                    monsterAction.setAttribute("class","monster-action")
                    monsterActions.insertAdjacentElement("beforeend",monsterAction)
                    console.log(monsterList[j].actions[k].name)
                    console.log(monsterList[j].actions[k].desc)
                
            }
        


//Monster Skills
        let monsterSkills=document.createElement('div')
             monsterSkills.innerHTML= "Skills:"
            Object.entries(monsterList[j].skills).forEach(([key, value]) => monsterSkills.innerHTML += (` ${key}:${value}`));
            monsterEntry.insertAdjacentElement("beforeend", monsterSkills)
        
        
        
        
    }
// Logic for the Monster Card drop downs
    
    let  acc = document.getElementsByClassName("monster-name ");
    

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
}
    
    
})

