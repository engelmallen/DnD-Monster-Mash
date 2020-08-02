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
             let currentMonster= monsterData.results[i]
             monsterList.push(currentMonster)
             //build monster stat aray and add to the monster  objects
            // ['STR','DEX','CON', 'INT', 'WIS', 'CHA']
            let monsterStats= []
                monsterStats.push(currentMonster.strength)
                monsterStats.push(currentMonster.dexterity)
                monsterStats.push(currentMonster.constitution)
                monsterStats.push(currentMonster.intelligence)
                monsterStats.push(currentMonster.wisdom)
                monsterStats.push(currentMonster.charisma)
             console.log(monsterStats)
             currentMonster.stats_array =monsterStats
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
// Monster Senses
         let monsterSenses=document.createElement('div')
            monsterSenses.innerHTML= "Senses: "  + monsterList[j].senses
            monsterEntry.insertAdjacentElement("beforeend", monsterSenses)
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
        //let actions =[]
        let monsterActions =document.createElement('div')
            monsterActions.innerHTML= "<h2>Actions:</h2>"
            monsterEntry.insertAdjacentElement("beforeend", monsterActions)
            monsterActions.setAttribute("class","monster-actions")
        

            for(let k=0; k < monsterList[j].actions.length; k++){
                let monsterAction = document.createElement('div')
                    monsterAction.innerHTML = monsterList[j].actions[k].name + ": " + monsterList[j].actions[k].desc
                    monsterAction.setAttribute("class","monster-action")
                    monsterActions.insertAdjacentElement("beforeend",monsterAction)

            }
//Monster Special Ablities
        let monsterAblities =document.createElement('div')
            monsterAblities.innerHTML= "<h2>Special Ablities:</h2>"
            monsterEntry.insertAdjacentElement("beforeend", monsterAblities)
            monsterAblities.setAttribute("class","monster-ablities")

            for(let l=0; l < monsterList[j].special_abilities.length; l++){
                let monsterAbility = document.createElement('div')
                    monsterAbility.innerHTML = monsterList[j].special_abilities[l].name + ": " + monsterList[j].special_abilities[l].desc
                    monsterAbility.setAttribute("class","monster-ablity")
                    monsterAblities.insertAdjacentElement("beforeend",monsterAbility)
                
            }
        
        
//Monster Skills
        let monsterSkills=document.createElement('div')
             monsterSkills.innerHTML= "Skills:"
            Object.entries(monsterList[j].skills).forEach(([key, value]) => monsterSkills.innerHTML += (` ${key}:${value}`));
            monsterEntry.insertAdjacentElement("beforeend", monsterSkills)
        
        let stats_array =[]
                data = [{
                    type: 'scatterpolar',
                    r: stats_array,
                    theta: ['STR','DEX','CON', 'INT', 'WIS', 'CHA'],
                    fill: 'toself'
                }]
                
                layout = {
                    polar: {
                        radialaxis: {
                            visible: true,
                            range: [0, 50]
                        }
                    },
                    showlegend: false
                }
                
                Plotly.newPlot("monster-graph", data, layout)
        

    } //end for loop
    
    
    
// Logic for the Monster Card drop downs
    
    let  acc = document.getElementsByClassName("monster-name");
    

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(e) {
            this.classList.toggle("active");
            
            console.log(document.getElementsByClassName("monster-name active"))
            console.log(e.target.innerText)
            let activeMonster =e.target.innerText;
            const found = monsterList.find(element => element.name == activeMonster);
            console.log(found.stats_array);
        
            // Stats Graph
        
                data = [{
                    type: 'scatterpolar',
                    r: found.stats_array,
                    theta: ['STR','DEX','CON', 'INT', 'WIS', 'CHA'],
                    fill: 'toself'
                }]
                
                layout = {
                    polar: {
                        radialaxis: {
                            visible: true,
                            range: [0, 50]
                        }
                    },
                    showlegend: false
                }
                
                Plotly.newPlot("monster-graph", data, layout)
        
        
 
            
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        
//logic for Stats Graph
    //    acc[i].addEventListener("click", function()
        
    //    });
        
    }
}
    
    
})

