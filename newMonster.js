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