

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
        var zip = [10001]; // this line gets the zip code from the form entry
        var url = 'https://api.petfinder.com/pet.find';
        zip.forEach(function(zipper){
            $.ajax({
                url: url,
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    key: apiKey,
                    animal: dropdown,
                    'location': zipper,
                    output: 'basic',
                    count: 1000,
                    format: 'json'
                },
                success: function( response ) {
                    console.log(response);
                    var data = [];
                    data.push(response.petfinder.pets.pet);
                    data.forEach(function(dataParsing) {
                        Object.entries(dataParsing).forEach(function([key, value]) {
                            let breedtype = []
                            let breed1;
                            let breed2;
                            let age = value.age.$t;
                            let name = value.name.$t;
                            let animal = value.animal.$t;
                            let shelterId = value.shelterId.$t;
                            let sex = value.sex.$t;
                            let id = value.id.$t;
                            if (value.breeds.breed.length > 1){
                                for (var b = 0; b < value.breeds.breed.length; b++) {
                                    breed1 = (value.breeds.breed[0].$t);
                                    breed2 = (value.breeds.breed[1].$t);
                            }
                                breedtype.push(`${breed1} / ${breed2}`);
                        }
                            else {
                                breedtype.push(value.breeds.breed.$t);
                            }
                            let newDiv = body.append("li");
                            newDiv.text(`id: ${id}^
                            name: ${name}^
                            breed: ${breedtype}^
                            age: ${age}^
                            animal: ${animal}^
                            shelterId: ${shelterId}^
                            sex: ${sex}^
                            website: https://www.petfinder.com/petdetail/${id}`);
                        });
                    });
                }
            });
        }) 
    }) 
}
