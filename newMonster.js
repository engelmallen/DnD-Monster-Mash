//Identifiers:
let search = document.getElementById('search')
let searchBtn = document.getElementById('searchBtn')
let youAreSearching = document.getElementById('youAreSearching')
let myLab = document.getElementById('myLab')
let labBtnNxt = document.getElementById('labBtnNxt')
let labBtnPrv = document.getElementById('labBtnPrv')
    // Identifiers: Work Area Fields
let monsOptions = document.getElementById('monsOptions')
let monsActions = document.getElementById('monsActions')
let monsAbilities = document.getElementById('monsAbilities')
let monsName = document.getElementById('monsName')
let monsSize = document.getElementById('monsSize')
let monsType = document.getElementById('monsType')
let monsAlgmnt = document.getElementById('monsAlgmnt')
let monsACmonsAC = document.getElementById('monsAC')
let monsHP = document.getElementById('monsHP')
let monsSpeed = document.getElementById('monsSpeed')
let monsDamRes = document.getElementById('monsDamRes')
let monsDamImn = document.getElementById('monsDamImn')
let monsConImn = document.getElementById('monsConImn')
let monsSenses = document.getElementById('monsSenses')
let monsLangs = document.getElementById('monsLangs')
let monsCR = document.getElementById('monsCR')
let resSkills = document.getElementById('resSkills') /*Reset Button*/

let monsStr = document.getElementById('monsStr')
let monsDex = document.getElementById('monsDex')
let monsCon = document.getElementById('monsCon')
let monsInt = document.getElementById('monsInt')
let monsWis = document.getElementById('monsWis')
let monsCha = document.getElementById('monsCha')

// 


var ereasure = document.getElementsByClassName('ereasure')



function status() {
    console.log(getCriteriaBtn)
    console.log(spellList)
    console.log(monstersList)
    console.log(documentList)
    console.log(backgroundList)
    console.log(planeList)
    console.log(featList)
    console.log(conditionList)
    console.log(raceList)
    console.log(classList)
    console.log(weaponList)
}


/*variables:*/
let getCriteriaBtn = ""
let everythingList = []
let nowPresenting = ""
let test = ""
let nextSearch = ""
let lastSearch = ""


let spellList = []
let monstersList = []
let documentList = []
let backgroundList = []
let planeList = []
let featList = []
let conditionList = []
let raceList = []
let classList = []
let magicItemList = []
let weaponList = []

function whatPresenting() {

        monsOptions.innerHTML = ""  /*deletes Options List Area*/  

            for (let i = 0; i < everythingList[0].length; i++) { /*Monsters*/
                if (nowPresenting === "Monster List") {
                    // console.log("creating btn")
                    // monsOptions.innerHTML = ""
                    
                    getCriteriaCont = document.createElement('div')
                    getCriteriaBtn = document.createElement('input')
                    
                    getCriteriaBtn.classList.add("btn-success","w-100","infoBtnAction")
                    getCriteriaBtn.type = "button"
                    getCriteriaBtn.value = everythingList[0][i].name
                    getCriteriaCont.appendChild(getCriteriaBtn)
                    monsOptions.appendChild(getCriteriaCont)
                    
                    getCriteriaBtn.addEventListener('click', function () {
                        monsAbilities.innerHTML = ""


                        monsName.value        = everythingList[0][i].name
                        monsSize.value        = everythingList[0][i].size
                        monsType.value        = everythingList[0][i].type
                        monsAlgmnt.value      = everythingList[0][i].alignment
                        monsACmonsAC.value    = 'Aarmor Class: '+everythingList[0][i].armor_class
                        
                        if (everythingList[0][i].armor_desc!= null) {
                            monsACmonsAC.value += "("+everythingList[0][i].armor_desc + ")"}
                        
                        monsHP.value      = "Hit Points: "+ everythingList[0][i].hit_points + " or (" + everythingList[0][i].hit_dice +")"
                        

                        if (everythingList[0][i].speed.walk != 0) {
                        monsSpeed.value       = "Walk: "+ everythingList[0][i].speed.walk +"  " 
                            if (everythingList[0][i].speed.fly != undefined)
                                {monsSpeed.value       += "Fly: "+ everythingList[0][i].speed.fly +"  "}
                            if (everythingList[0][i].speed.swim != undefined)
                                {monsSpeed.value       += "Swim: "+ everythingList[0][i].speed.swim +"  "}
                             if (everythingList[0][i].speed.hover != undefined){
                                 if (everythingList[0][i].speed.hover === true) {
                                    monsSpeed.value       += " Can Hover "
                                 }
                            }
                        }
                                                
                        monsDamRes.values     ="Damage Resistances: " + everythingList[0][i].damage_resistances
                        monsDamImn.value      ="Damage Immunities: " + everythingList[0][i].damage_immunities
                        monsConImn.value      ="Condition Immunities: " +  everythingList[0][i].condition_immunities
                        monsSenses.value      ="Senses: " + everythingList[0][i].senses
                        monsLangs.value       ="Languages: " + everythingList[0][i].languages
                        monsCR.value          ="Challenge "+ everythingList[0][i].challenge_rating   

                        monsStr.value = everythingList[0][i].strength
                        monsDex.value = everythingList[0][i].dexterity
                        monsCon.value = everythingList[0][i].constitution
                        monsInt.value = everythingList[0][i].intelligence
                        monsWis.value = everythingList[0][i].wisdom
                        monsCha.value = everythingList[0][i].charisma

                        for (let j = 0; j < everythingList[0][i].special_abilities.length; j++) {
                            // let createSpAbName = document.createElement('div')
                            // let createSpAbDesc = document.createElement('input')
                            
                            // createSpAbDesc.type = text
                            
                            // createSpAbName.innerHTML = everythingList[0][i].special_abilities[j].name
                            // createSpAbDesc.value = everythingList[0][i].special_abilities[j].desc


                                

                                let createActionCon = document.createElement('div')
                                let createActionTil = document.createElement('h6')
                                let createDesc = document.createElement('div')
                                let actionClose = document.createElement('button')

                                
                                createActionTil.innerHTML = everythingList[0][i].special_abilities[j].name
                                createDesc.innerHTML = everythingList[0][i].special_abilities[j].desc

                                actionClose.innerHTML = "Delete"
                                actionClose.classList.add('w-100','mb-1')
                                
                               


                                createActionCon.classList.add('createActionCon')
                                actionClose.classList.add('ereasure')
                                createActionTil.classList.add("w-100","text-center", "btn-warning")
                                createDesc.classList.add("w-100", "p-2",'overflow-auto','mh-50')

                                
                                monsAbilities.appendChild(createActionCon)
                                createActionCon.appendChild(createActionTil)
                                createActionCon.appendChild(actionClose)
                                createActionTil.insertAdjacentElement("afterend", createDesc)
                                // e.target.insertAdjacentElement("afterend", createSubElement)
                               
                                
                                actionClose.onclick = function(){
                                    this.parentElement.innerHTML = ''                                    
                                    }






                        }

                        // for (let i = 0; i <= getCriteriaBtn.length; i++) { 
                            // for (let i = 0; i < everythingList[0][i].length; i++) {
                                // if (everythingList[0][i].name === e.target.value) {
                                   


                                // }
                            // }


                        
                    })
                    

                    // var infoBtnAction = document.getElementsByClassName('infoBtnAction')
                    












                    // for (let z = 0; z < infoBtnAction.length; z++) {
                    //    infoBtnAction[z].addEventListener('click', function(e) {
                    //     console.log("test done")

                    //         for (let x = 0; x < everythingList[0].length; x++) {
                    //                 let createInfoTitle =document.createElement('h6')
                    //                 let createInfoElement =document.createElement('h4')
                    //                 createInfoTitle.innerHTML = everythingList[0][x].keys
                    //                 createInfoElement.innerHTML = everythingList[0][x].values
                    //                 e.target.insertAdjacentElement("afterend", createInfoTitle)
                    //                 e.target.insertAdjacentElement("afterend", createInfoElement)
                    //         }
                    //  })                        
                    // }                    
                   // console.log("btn created")
                }        
           }

            for (let i = 0; i < everythingList[0].length; i++) {/*Abilities*/
                if (nowPresenting === "Actions") {
                    // console.log("creating Actions")
                    // monsOptions.innerHTML = ""
                        let getCriteriaCont = document.createElement('div')

                        for (let z = 0; z < everythingList[0][i].actions.length; z++) {
                           // console.log(everythingList[0][i].actions[z].name)
                           // if (test != everythingList[0][i].actions[z].name) {
                           
                            
                            let getCriteriaBtn = document.createElement('input')                            
                            getCriteriaCont.appendChild(getCriteriaBtn)
                            getCriteriaBtn.classList.add("btn-success","w-100","infoBtnAction")
                            getCriteriaBtn.type = "button"                          

                           getCriteriaBtn.value = everythingList[0][i].actions[z].name
                           getCriteriaBtn.addEventListener('click', function(e){
                                

                                // let createSubElement = document.createElement('div')
                                // createSubElement.innerHTML = everythingList[0][i].actions[z].desc
                                let createActionCon = document.createElement('div')
                                let createActionTil = document.createElement('h6')
                                let createDesc = document.createElement('div')
                                let actionClose = document.createElement('button')

                                
                                createActionTil.innerHTML = everythingList[0][i].actions[z].name
                                createDesc.innerHTML = everythingList[0][i].actions[z].desc

                                actionClose.innerHTML = "Delete"
                                actionClose.classList.add('w-100','mb-1')
                                
                               


                                createActionCon.classList.add('createActionCon')
                                actionClose.classList.add('ereasure')
                                createActionTil.classList.add("w-100","text-center", "btn-warning")
                                createDesc.classList.add("w-100", "p-2",'overflow-auto','mh-50')

                                
                                monsActions.appendChild(createActionCon)
                                createActionCon.appendChild(createActionTil)
                                createActionCon.appendChild(actionClose)
                                createActionTil.insertAdjacentElement("afterend", createDesc)
                                // e.target.insertAdjacentElement("afterend", createSubElement)
                               
                                
                                actionClose.onclick = function(){
                                    this.parentElement.innerHTML = ''                                    
                                    }

                                

                                
                                //test = everythingList[0][i].actions[z].name
                            })

                       // }
                           
                        }

                    
                    // console.log(everythingList[0][i].name)
                    
                    monsOptions.appendChild(getCriteriaCont)
                    
                    var infoBtnAction = document.getElementsByClassName('infoBtnAction')
                    // for (let z = 0; z < infoBtnAction.length; z++) {
                    //    infoBtnAction[z].addEventListener('click', function(e) {
                    //     console.log("test done")

                    //         for (let x = 0; x < everythingList[0].length; x++) {
                    //                 let createInfoTitle =document.createElement('h6')
                    //                 let createInfoElement =document.createElement('h4')
                    //                 createInfoTitle.innerHTML = everythingList[0][x].keys
                    //                 createInfoElement.innerHTML = everythingList[0][x].values
                    //                 e.target.insertAdjacentElement("afterend", createInfoTitle)
                    //                 e.target.insertAdjacentElement("afterend", createInfoElement)
                    //         }

                    //  })                        
                    // }                    


 
                    // console.log("btn created")

                    }        




                }

            for (let i = 0; i < everythingList[0].length; i++) {/*SpcAbilities*/
                if (nowPresenting === "SpcAbilities") {
                    // console.log("creating Actions")
                    // monsOptions.innerHTML = ""
                        let getCriteriaCont = document.createElement('div')

                        for (let z = 0; z < everythingList[0][i].special_abilities.length; z++) {
                           // console.log(everythingList[0][i].actions[z].name)
                           // if (test != everythingList[0][i].actions[z].name) {
                           
                            
                            let getCriteriaBtn = document.createElement('input')                            
                            getCriteriaCont.appendChild(getCriteriaBtn)
                            getCriteriaBtn.classList.add("btn-success","w-100","infoBtnAction")
                            getCriteriaBtn.type = "button"                          

                           getCriteriaBtn.value = everythingList[0][i].special_abilities[z].name
                           getCriteriaBtn.addEventListener('click', function(e){
                                

                                // let createSubElement = document.createElement('div')
                                // createSubElement.innerHTML = everythingList[0][i].actions[z].desc
                                let createActionCon = document.createElement('div')
                                let createActionTil = document.createElement('h6')
                                let createDesc = document.createElement('div')
                                let actionClose = document.createElement('button')

                                
                                createActionTil.innerHTML = everythingList[0][i].special_abilities[z].name
                                createDesc.innerHTML = everythingList[0][i].special_abilities[z].desc

                                actionClose.innerHTML = "Delete"
                                actionClose.classList.add('w-100','mb-1')
                                
                               


                                createActionCon.classList.add('createActionCon')
                                actionClose.classList.add('ereasure')
                                createActionTil.classList.add("w-100","text-center", "btn-warning")
                                createDesc.classList.add("w-100", "p-2",'overflow-auto','mh-50')

                                
                                monsAbilities.appendChild(createActionCon)
                                createActionCon.appendChild(createActionTil)
                                createActionCon.appendChild(actionClose)
                                createActionTil.insertAdjacentElement("afterend", createDesc)
                                // e.target.insertAdjacentElement("afterend", createSubElement)
                               
                                
                                actionClose.onclick = function(){
                                    this.parentElement.innerHTML = ''                                    
                                    }

                                

                                
                                //test = everythingList[0][i].actions[z].name
                            })

                       // }
                           
                        }

                    
                    // console.log(everythingList[0][i].name)
                    
                    monsOptions.appendChild(getCriteriaCont)
                    
                    var infoBtnAction = document.getElementsByClassName('infoBtnAction')
                    // for (let z = 0; z < infoBtnAction.length; z++) {
                    //    infoBtnAction[z].addEventListener('click', function(e) {
                    //     console.log("test done")

                    //         for (let x = 0; x < everythingList[0].length; x++) {
                    //                 let createInfoTitle =document.createElement('h6')
                    //                 let createInfoElement =document.createElement('h4')
                    //                 createInfoTitle.innerHTML = everythingList[0][x].keys
                    //                 createInfoElement.innerHTML = everythingList[0][x].values
                    //                 e.target.insertAdjacentElement("afterend", createInfoTitle)
                    //                 e.target.insertAdjacentElement("afterend", createInfoElement)
                    //         }

                    //  })                        
                    // }                    


 
                    // console.log("btn created")

                    }        




                }

        


            for (let i = 0; i < everythingList[0].length; i++) {
                if (nowPresenting === "Race") {
                    console.log("creating btn")
                    // monsOptions.innerHTML = ""
                    
                    getCriteriaCont = document.createElement('div')
                    getCriteriaBtn = document.createElement('input')
                    
                    getCriteriaBtn.classList.add("btn-success","w-100","infoBtnAction")
                   
                    getCriteriaBtn.type = "button"
                    getCriteriaBtn.value = everythingList[0][i].name
                    getCriteriaCont.appendChild(getCriteriaBtn)
                    monsOptions.appendChild(getCriteriaCont)
                    
                    var infoBtnAction = document.getElementsByClassName('infoBtnAction')
                    for (let z = 0; z < infoBtnAction.length; z++) {
                       infoBtnAction[z].addEventListener('click', function(e) {
                        console.log("test done")

                            for (let x = 0; x < everythingList[0].length; x++) {
                                    let createInfoTitle =document.createElement('h6')
                                    let createInfoElement =document.createElement('h4')
                                    createInfoTitle.innerHTML = everythingList[0][x].keys
                                    createInfoElement.innerHTML = everythingList[0][x].values
                                    e.target.insertAdjacentElement("afterend", createInfoTitle)
                                    e.target.insertAdjacentElement("afterend", createInfoElement)
                            }

                     })                        
                    }                    


 
                    console.log("btn created")

                    }        




                }/*Race (for testing)*/


           //  for (let i = 0; i < everythingList[0].length; i++) {
           //      if (nowPresenting === "Spell") {
           //          console.log("creating btn")
                    
                    
           //          getCriteriaCont = document.createElement('div')
           //          getCriteriaBtn = document.createElement('input')
                    
           //          getCriteriaBtn.classList.add("btn-success","w-100","infoBtnAction")
                   
           //          getCriteriaBtn.type = "button"
           //          getCriteriaBtn.value = everythingList[0][i].name
           //          getCriteriaCont.appendChild(getCriteriaBtn)
           //          monsOptions.appendChild(getCriteriaCont)
                    
           //          var infoBtnAction = document.getElementsByClassName('infoBtnAction')
           //          for (let z = 0; z < infoBtnAction.length; z++) {
           //             infoBtnAction[z].addEventListener('click', function(e) {
           //              console.log("test done")

           //                  for (let i = 0; i < everythingList[0].length; i++) {
           //                          console.log(everythingList[0][i].name)
           //                          if (everythingList[0][i].name === e.target.name) {
           //                              let spellType = document.createElement('h6')
           //                              // spellType.value = Spell Type

                                    
                                    
                                    
           //                          // let createInfoElement = document.createElement('h4')
           //                          // spellType.innerHTML = everythingList[0][i].keys
           //                          // createInfoElement.innerHTML = everythingList[0][i].values
                                    
           //                          // e.target.insertAdjacentElement("afterend", spellType)
           //                          // e.target.insertAdjacentElement("afterend", createInfoElement)
           //                          // console.log("btn created")
           //                  }
           //              }
           //           })                        
           //          }                    
                   
           //      }        
           // }



            }

// function infoPresenting() {
//    createSubElement = document.createElement("div")
//    for (var i = Things.length - 1; i >= 0; i--) {
//        Things[i]
//    }

// }


// let curInfo = []
function getCriteria(){
    let searchBy = document.getElementsByClassName('searchBy')
    for (let i = 0; i < searchBy.length; i++) {
        searchBy[i].addEventListener('click', function (e) {
        getInfo(e.target.name)
        console.log(e.value + ": is e value")
        if (e.value != "Next" || e.value != "Previous")
        {nowPresenting = e.target.value}
        
        console.log(nowPresenting + ": is nowPresenting")
        console.log("Function getCriteria is Working")
        // getCriteriaBtn =   
        })
    }/*whatPresenting()*/
}getCriteria()


    function getInfo(criteria) {
            
           let getAPI = {
                "async"         : true,
                "crossDomain"   : true,
                "url"           : criteria,
                "method"        : "GET",
                }
                // console.log(getAPI.url)
            $.ajax(getAPI).done(function (response) {
                   console.log(response)
                   everythingList = []
                   everythingList.push(response.results)
                   
                   if (response.previous != null) {lastSearch = response.previous}
                   if (response.next != null) {nextSearch = response.next}
                   
                   console.log(everythingList)
                   whatPresenting()

                   console.log(lastSearch)
                   console.log(nextSearch)
                   console.log(criteria +":is criteria")
                })
        }


// Buttons:
searchBtn.addEventListener('click', function () {
            getInfo("spells")
    })

labBtnPrv.addEventListener('click', function () {
            if (lastSearch != "") {getInfo(lastSearch) 
        }
    })

labBtnNxt.addEventListener('click', function () {
            if (nextSearch != "") {getInfo(nextSearch)}
    })

searchBtn.addEventListener('click', function () {
        getInfo("https://api.open5e.com/weapons/?search="+search.value)    
    })

document.onLoad = function () {
        } 