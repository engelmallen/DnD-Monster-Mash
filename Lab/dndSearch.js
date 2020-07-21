//Identifiers:
let search = document.getElementById('search')
let searchBtn = document.getElementById('searchBtn')
let youAreSearching = document.getElementById('youAreSearching')

/*variables:*/
let getCriteriaBtn = ""
let curInfo = []

// Buttons:
searchBtn.addEventListener('click', function () {
        if (getCriteriaBtn != "") {
        getInfo()
        }
    })

// Ajax Functionalities:
function getInfo(criteria) {

    let settings = {
        "async"         : true,
        "crossDomain"   : true,
        "url"           : "https://api.open5e.com/"+ getCriteriaBtn + search.value,
        "method"        : "GET",
    }

    $.ajax(settings).done(function (response) {
        curInfo.push(response)
        console.log(curInfo)
        })
    }


function getCriteria() {
    let searchBy = document.getElementsByClassName('searchBy')
    for (var i = 0; i < searchBy.length; i++) {
        searchBy[i].addEventListener('click', function (e) {
            getCriteriaBtn = e.target.name
            youAreSearching.innerHTML = "I'm looking for this " + e.target.value + ":"   
        })
    }
}getCriteria()

let getCriteriaBtn = ""

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
let everythingList = []



// let curInfo = []



// function getInfo(criteria) {
//     let infoTypes = [   "spells",
//                         "monsters", 
//                         "documents", 
//                         "backgrounds",
//                         "planes",
//                         "feats",
//                         "conditions",
//                         "races",
//                         "classes",
//                         "weapons",
//                         "search"]

//     for (var i = 0; i < infoTypes.length; i++) {
         
//         let getAPI = {
//             "async"         : true,
//             "crossDomain"   : true,
//             "url"           : "https://api.open5e.com/"+infoTypes[i]+"/?search=",
//             "method"        : "GET",
//             }
//             // console.log(getAPI.url)
//         $.ajax(getAPI).done(function (response) {
//                 // console.log(infoTypes[i])
//                 // everythingList.push(response);console.log(everythingList)
//                 if (infoTypes[i] === "spells") {spellList.push(response);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "monstersList") {monstersList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "documentList") {documentList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "backgroundList") {backgroundList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "planeList") {planeList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "featList") {featList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "conditionList") {conditionList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "classList") {classList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "magicItemList") {magicItemList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "magicItemList") {magicItemList.push(response.results);console.log(infoTypes[i])}
//                 if (infoTypes[i] === "weaponList") {weaponList.push(response.results);console.log(infoTypes[i])}    
//                // console.log(curInfo)
//             })
//         }

// status()



//     }