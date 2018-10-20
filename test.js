

// jQuery.post( "https://api.rescuegroups.org/https/v2.json", { func: "animals" }, function( data ) {
//     console.log( data );
//   }, "json");
//   jQuery.ajax({
//     type: "POST",
//     url: url,
//     apikey: "IWwpPusn",
//     data: data,
//     success: success,
//     dataType: dataType
// });
// let dataObject = {
//     apikey: "IWwpPusn",
//     "objectType":"orgs",
//     "objectAction":"publicSearch",
//     "search":
//     {
//         "resultStart": "0",
//         "resultLimit": 10000,
//         "resultSort": "orgID",
//         "resultOrder": "asc",
//         "filters":
//         [
//             {
//                 "fieldName": "orgID",
//                 "operation": "greaterthan",
//                 "criteria": "0"
                 
//             }
//         ],
//         "filterProcessing": "1",
//         "fields": ["orgID","orgLocation","orgName","orgAddress","orgCity","orgState","orgPostalcode","orgPlus4","orgCountry","orgPhone","orgFax","orgEmail","orgWebsiteUrl","orgFacebookUrl","orgAdoptionUrl","orgDonationUrl","orgSponsorshipUrl","orgServeAreas","orgAdoptionProcess","orgAbout","orgServices","orgMeetPets","orgType","orgLocationDistance","orgCommonapplicationAccept"]
         
//     }
     
// }
// let data = JSON.stringify(dataObject);
  
// $.getJSON({
//     url: 'https://api.rescuegroups.org/https/v2.json',
//     type: 'post',
//     contentType: 'application/json',
//     data: data,
//     dataType: 'json',
//     success: function (response) {
//         console.log(response);
//     }
// });

// $.getJSON('https://api.petfinder.com/my.method?format=json&key=12345&callback=?')
//   .done(function(petApiData) { alert('Data retrieved!'; })
//   .error(function(err) { alert('Error retrieving data!'); 
// });
// 96701, 99703, 30301, 83701, 66212, 10001, 60007, 80014, 90001, 58501
document.addEventListener('DOMContentLoaded', bindButtons);
// var url = 'https://api.petfinder.com/shelter.find';
var apiKey = "0d60940cc1ebb2a47f2f53bd4ec5f607"	
// var zip = [66212, 10001]
    // Within $.ajax{...} is where we fill out our query 

var body = d3.select("body")
function bindButtons(){
    document.getElementById('submitZip').addEventListener('click', function(event){
        event.preventDefault();
        var dropdown = document.getElementById('animus').value;
        var zip = document.getElementById('submitZip').value;// this line gets the zip code from the form entry
        var url = 'https://api.petfinder.com/shelter.find';
        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: apiKey,
                'location': zip,
                output: 'basic',
                count: 1000,
                format: 'json'
            },
            success: function( response ) {
                console.log(response);
                var data = [];
                data.push(response.petfinder.shelters.shelter);
                data.forEach(function(dataParsing) {
                    Object.entries(dataParsing).forEach(function([key, value]) {                         
                        let id = value.id.$t;
                        let name = value.name.$t;
                        let phone = value.phone.$t;
                        let address = value.address1.$t;
                        let city = value.city.$t;
                        let state = value.state.$t;
                        let country = value.country.$t;
                        let zip = value.zip.$t;
                        let email = value.email.$t;
                        let latitude = value.latitude.$t;
                        let longitude = value.longitude.$t;
                        let newDiv = body.append("li");
                        newDiv.text(`name: ${name}^
                        id: ${id}^
                        phone: ${phone}^
                        address: ${address}^
                        city: ${city}^
                        state: ${state}^
                        country: ${country}^
                        zip: ${zip}^
                        email: ${email}^
                        latitude: ${latitude}^
                        longitude: ${longitude}^`);
                    });
                });
            }
        });
    }) 
}
