//Identifiers:
let search = document.getElementById('search')
let searchBtn = document.getElementById('searchBtn')
let youAreSearching = document.getElementById('youAreSearching')
let myLab = document.getElementById('myLab')
let labBtnNxt = document.getElementById('labBtnNxt')
let labBtnPrv = document.getElementById('labBtnPrv')
let monsOptions = document.getElementById('monsOptions')
let monsActions = document.getElementById('monsOptions')




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

        monsOptions.innerHTML = ""    

            for (let i = 0; i < everythingList[0].length; i++) {
                if (nowPresenting === "Monsters") {
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




                }



            for (let i = 0; i < everythingList[0].length; i++) {
                if (nowPresenting === "Abilities") {
                    console.log("creating Abilities")
                    // monsOptions.innerHTML = ""
                    getCriteriaCont = document.createElement('div')
                    getCriteriaBtn = document.createElement('input')
                    
                    getCriteriaBtn.classList.add("btn-success","w-100","infoBtnAction")
                    getCriteriaBtn.type = "button"

                        for (let z = 0; z < everythingList[0][i].actions.length; z++) {
                           console.log(everythingList[0][i].actions.length)
                           getCriteriaBtn.value = everythingList[0][i].actions[z].name
                           getCriteriaBtn.addEventListener('click', function(e){
                                createSubElement = document.createElement('div')
                                createSubElement.innerHTML = everythingList[0][i].actions[z].desc
                                
                                let createAction = document.createElement('h6')
                                createAction.innerHTML = everythingList[0][i].actions[z].name
                                createAction.classList.add("w-100","text-center")
                                let whatever = document.createElement('div')
                                whatever.style.width = "100px"
                                whatever.style.height = "100px"
                                whatever.style.background = "red"
                                whatever.classList.add('whatever')
                                console.log(whatever.classList)
                                monsActions.appendChild(whatever)
                                //console.log(createAction + " adlfjhsadkfjhd")
                                e.target.insertAdjacentElement("afterend", createSubElement)

                            })
                           let whatever = document.getElementsByClassName('whatever')
                           monsActions.appendChild(whatever[0])
                        }

                    
                    console.log(everythingList[0][i].name)
                    getCriteriaCont.appendChild(getCriteriaBtn)
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


 
                    console.log("btn created")

                    }        




                }

 

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
        nowPresenting = e.target.value
        
        console.log(nowPresenting)
        console.log("getCriteria Working")
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
                   labBtnPrv.name = response.previous
                   labBtnNxt.name = response.next
                   console.log(everythingList)
                   whatPresenting()
                })
        }


// Buttons:
searchBtn.addEventListener('click', function () {
            getInfo("spells")
    })

labBtnPrv.addEventListener('click', function () {
            if (nowPresenting != "") { whatPresenting() } 
    })

labBtnNxt.addEventListener('click', function () {
            if (nowPresenting != "") { whatPresenting() }
    })



document.onLoad = function () {
        } 