function getInfo() {
let settings = {
	"async"			: true,
	"crossDomain"	: true,
	"url"			: "https://api.open5e.com/search/?text=dragon",
	"method"		: "GET",
	// "headers"		: {
	// 	"x-rapidapi-host"	: "deezerdevs-deezer.p.rapidapi.com",
	// 	"x-rapidapi-key"	: rapidDeezerKey
	// }
}




$.ajax(settings).done(function (response) {
	console.log(response)
	action(response)
	})
}

	getInfo()