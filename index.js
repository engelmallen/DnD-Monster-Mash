$(document).ready(function() {


let submit = document.getElementById("submit")

submit.addEventListener ("click", monsterSearch)
function monsterSearch (){
    $.ajax({
	       async: true,
	       crossDomain: true,
	       url: "https://api.open5e.com/monsters/?challenge_rating=" + inputCR.value,
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
        
        let monsterEntry=document.createElement('div')
            monsterContainer.appendChild(monsterEntry)
            monsterEntry.setAttribute("class","monster-entry")
        
        let monsterName = document.createElement('h2')
            monsterName.innerHTML = monsterList[j].name
            monsterEntry.insertAdjacentElement("afterbegin", monsterName)
            monsterName.setAttribute("class", "monster-name")
        
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

    }
    
}
    
    
})

