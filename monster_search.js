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
    
   let searchURL = "https://api.open5e.com/monsters/?" + searchTerm

    ajaxCall(searchURL)
}

function ajaxCall(searchURL){
    $.ajax({
	       async: true,
	       crossDomain: true,
	       url: searchURL,
	       method: "GET",
            success: function(monsterData) {
            console.log(monsterData)
            displayMonsterData(monsterData)
        }
    })
}


function displayMonsterData (monsterData) {
       $(".monster-entry, .monster-name, .page-button").remove();
//build monsterList array from search value - capture full details of the monster in the array
         let monsterList=[]

//Build Next and Prev buttons
        let nextLink= monsterData.next
        let prevLink= monsterData.previous
        let searchButtons =document.getElementById('searchButtons')
        
        if(prevLink){
           let prevButton = document.createElement('button')
           prevButton.setAttribute("class", "page-button")
            prevButton.innerHTML = "Previous"
            searchButtons.appendChild(prevButton)
            prevButton.addEventListener ("click", ()=>{
                ajaxCall(prevLink)
                
            })
        }

        if(nextLink){
           let nextButton = document.createElement('button')
           nextButton.setAttribute("class", "page-button")
            nextButton.innerHTML = "Next"
            searchButtons.appendChild(nextButton)
            nextButton.addEventListener ("click", ()=>{
                ajaxCall(nextLink)
                
            })
        }

    

      //  if (prevLink){
       //     show previous button
       // }
    
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
        
        let monsterEntryDetails=document.createElement('div')
            monsterEntry.appendChild(monsterEntryDetails)
            monsterEntryDetails.setAttribute("class","monster-entry-details")
        
        let monsterStat =document.createElement('div')
            monsterStat.innerHTML= "<h2>Stats:</h2>"
            monsterEntryDetails.insertAdjacentElement("beforeend", monsterStat)

        let monsterStats =document.createElement('div')
            monsterEntryDetails.insertAdjacentElement("beforeend", monsterStats)
            monsterStats.setAttribute("class", "monster-stats")
        
        let monsterStatsUL =document.createElement('ul')
            monsterStats.insertAdjacentElement("beforeend", monsterStatsUL)
            monsterStatsUL.setAttribute("class", "monster-statsUL")
        


//Monster Armor Class
        let monsterAC=document.createElement('li')
            monsterAC.innerHTML= "<b>Armor Class:</b> " + monsterList[j].armor_class
            monsterStatsUL.insertAdjacentElement("beforeend", monsterAC)
//Monster Hit Points
        let monsterHP=document.createElement('li')
            monsterHP.innerHTML= "Hit Points: " + monsterList[j].hit_points
            monsterStatsUL.insertAdjacentElement("beforeend", monsterHP)
// Monster Speed
         let monsterSpeed=document.createElement('li')
             monsterSpeed.innerHTML= "Speed:"
            Object.entries(monsterList[j].speed).forEach(([key, value]) => monsterSpeed.innerHTML += (` ${key}:${value}`));
            monsterStatsUL.insertAdjacentElement("beforeend", monsterSpeed)
// Monster Senses
         let monsterSenses=document.createElement('li')
            monsterSenses.innerHTML= "Senses: "  + monsterList[j].senses
            monsterStatsUL.insertAdjacentElement("beforeend", monsterSenses)

//Monster Skills
        let monsterSkills=document.createElement('li')
             monsterSkills.innerHTML= "Skills:"
            Object.entries(monsterList[j].skills).forEach(([key, value]) => monsterSkills.innerHTML += (` ${key}:${value}`));
            if (Object.entries(monsterList[j].skills) ==''){
                console.log("no skills")
                monsterSkills.innerHTML += " N/A"
                }
            monsterStatsUL.insertAdjacentElement("beforeend", monsterSkills)
        
//Monster Stats

        let monsterStr =document.createElement('li')
            monsterStr.innerHTML= "STR: " + monsterList[j].strength
            monsterStatsUL.insertAdjacentElement("beforeend", monsterStr)
                                               
        let monsterDex =document.createElement('li')
            monsterDex.innerHTML= "DEX: " + monsterList[j].dexterity
            monsterStatsUL.insertAdjacentElement("beforeend", monsterDex)
        
        let monsterCon =document.createElement('li')
            monsterCon.innerHTML= "CON: " + monsterList[j].constitution
            monsterStatsUL.insertAdjacentElement("beforeend", monsterCon)
        
        let monsterInt =document.createElement('li')
            monsterInt.innerHTML= "INT: " + monsterList[j].intelligence
            monsterStatsUL.insertAdjacentElement("beforeend", monsterInt)
                                               
        let monsterWis =document.createElement('li')
            monsterWis.innerHTML= "WIS: " + monsterList[j].wisdom
            monsterStatsUL.insertAdjacentElement("beforeend", monsterWis)
        
        let monsterChar =document.createElement('li')
            monsterChar.innerHTML= "CHA: " + monsterList[j].charisma
            monsterStatsUL.insertAdjacentElement("beforeend", monsterChar)

        let monsterGraph=document.createElement('div')
            monsterStats.appendChild(monsterGraph)
            monsterGraph.setAttribute("class","monster-graph")
                                           
        let monsterEntryGraph=document.createElement('div')
            monsterGraph.appendChild(monsterEntryGraph)
            monsterEntryGraph.setAttribute("id","monster-graph-" + monsterList[j].name)
        
//Monster Actions
        //let actions =[]
        let monsterActions =document.createElement('div')
            monsterActions.innerHTML= "<h2>Actions:</h2>"
            monsterEntryDetails.insertAdjacentElement("beforeend", monsterActions)
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
            monsterEntryDetails.insertAdjacentElement("beforeend", monsterAblities)
            monsterAblities.setAttribute("class","monster-ablities")
        
         let monsterAbility = document.createElement('div')
            monsterAblities.insertAdjacentElement("beforeend",monsterAbility)

            for(let l=0; l < monsterList[j].special_abilities.length; l++){
                    monsterAbility.innerHTML = monsterList[j].special_abilities[l].name + ": " + monsterList[j].special_abilities[l].desc
                    monsterAbility.setAttribute("class","monster-ablity")
            }
        
        if (Object.entries(monsterList[j].special_abilities) == ''){
            console.log("no Special Ablities")
            monsterAbility.innerHTML ="N/A"
            }
        

        
        //Use if you want an exposed blank chart
        /*let stats_array =[0,0,0,0,0,0]
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
                            range: [0, 30]
                        }
                    },
                    showlegend: false
                }
                
                Plotly.newPlot("monster-graph-" + monsterList[j].name, data, layout)*/
        

    } //end for loop
    
    
    
// Logic for the Monster Card drop downs
    
    let  acc = document.getElementsByClassName("monster-name");
    

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(e) {
            this.classList.toggle("active");
            // Stats Graph
                console.log(document.getElementsByClassName("monster-name active"))
                console.log(e.target.innerText)
            let activeMonster =e.target.innerText;
            const found = monsterList.find(element => element.name == activeMonster);
                console.log(found.stats_array);
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
                            range: [0, 30]
                        }
                    },
                     //title: activeMonster,
                    height:350,
                    width:400,
                   margin: {
                       l: 5,
                       r: 5,
                       b: 5,
                       t: 5,
                       pad: 0
                   },
                    showlegend: false
                   
                }
                
                
                Plotly.newPlot("monster-graph-" + found.name, data, layout)
        
        
 
            
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

