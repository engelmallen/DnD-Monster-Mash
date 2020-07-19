let search = document.getElementById('search')
// let searchBy = document.getElementById('searchBy')
let searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', function () {
    getInfo()
})


/*variables:*/
let getCriteriaBtn = ""

function getCriteria() {
    let searchBy = document.getElementsByClassName('searchBy')
    for (var i = 0; i < searchBy.length; i++) {
        searchBy[i].addEventListener('click', function (e) {
            getCriteriaBtn = "/" + e.target.name    
        })
    }
}getCriteria()

function getInfo(criteria) {

criteria = getCriteriaBtn
// https://api.open5e.com/monsters/?search=fir 
// let spells =        "spells/?"
// let monsters =      "monsters/?"
// let documents =     "documents/?"
// let backgrounds =   "backgrounds/?"
// let planes =        "planes/?"
// let feats =         "feats/?"
// let conditions =    "conditions/?"
// let races =         "races/?"
// let classes =       "classes/?"
// let magicitems =    "magicitems/?"
// let weapons =       "weapons/?"
// let search =        "search/?"

let settings = {
    "async"         : true,
    "crossDomain"   : true,
    "url"           : "https://api.open5e.com"+ getCriteriaBtn + "/?search="+search.value,
    "method"        : "GET",
}

$.ajax(settings).done(function (response) {
    console.log(response)
    })
}

