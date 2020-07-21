//Identifiers:
let search = document.getElementById('search')
let searchBtn = document.getElementById('searchBtn')
let youAreSearching = document.getElementById('youAreSearching')
let myLab = document.getElementById('myLab')
let labBtnNxt = document.getElementById('labBtnNxt')
let labBtnPrv = document.getElementById('labBtnPrv')

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




// let curInfo = []
function getCriteria(){
    let searchBy = document.getElementsByClassName('searchBy')
    for (var i = 0; i < searchBy.length; i++) {
        searchBy[i].addEventListener('click', function (e) {
        getInfo(e.target.name)
        console.log("getCriteria Working")
        // getCriteriaBtn =   
        })
    }
}getCriteria()


function getInfo(criteria) {
     // let infoTypes = [  "spells",
    //                     "monsters", 
    //                     "documents", 
    //                     "backgrounds",
    //                     "planes",
    //                     "feats",
    //                     "conditions",
    //                     "races",
    //                     "classes",
    //                     "weapons",
    //                     "search"]
        
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
                // if (criteria === "spells") {spellList.push(response.results);console.log(spellList)}
                // if (criteria === "monstersList") {monstersList.push(response.results);console.log(monstersList)}
                // if (criteria === "documentList") {documentList.push(response.results);console.log(documentList)}
                // if (criteria === "backgroundList") {backgroundList.push(response.results);console.log(backgroundList)}
                // if (criteria === "planeList") {planeList.push(response.results);console.log(planeList)}
                // if (criteria === "featList") {featList.push(response.results);console.log(featList)}
                // if (criteria === "conditionList") {conditionList.push(response.results);console.log(conditionList)}
                // if (criteria === "classList") {classList.push(response.results);console.log(classList)}
                // if (criteria === "magicItemList") {magicItemList.push(response.results);console.log(magicItemList)}
                // if (criteria === "weaponList") {weaponList.push(response.results);console.log(weaponList)}    
            })
    }









// Buttons:
searchBtn.addEventListener('click', function () {
        // if (getCriteriaBtn != "") {
            getInfo("spells")
        //     let fetchedInfo = curInfo[0]
        //     for (var i = 0; i <= fetchedInfo.length; i++) {
        //     console.log(fetchedInfo[i])
        //     }
        // }
    })

// Ajax Functionalities:
// function getInfo(criteria) {

//     let getAPI = {
//         "async"         : true,
//         "crossDomain"   : true,
//         "url"           : "https://api.open5e.com/"+ getCriteriaBtn + search.value,
//         "method"        : "GET",
//     }

//     $.ajax(getAPI).done(function (response) {
//             curInfo.push(response.results)
//             console.log(curInfo)
//             // console.log(curInfo)
//         })
//     }




document.onLoad = function () {
        
        } 