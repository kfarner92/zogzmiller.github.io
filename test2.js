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
        var zip = [58501,10001]; // this line gets the zip code from the form entry
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
                    count: 10,
                    format: 'json'
                },
                success: function( response ) {
                    console.log(response);
                    var data = [];
                    data.push(response.petfinder.pets.pet);
                    data.forEach(function(dataParsing) {
                        Object.entries(dataParsing).forEach(function([key, value]) {
                            let age = value.age.$t;
                            let name = value.name.$t;
                            let animal = value.animal.$t;
                            let shelterId = value.shelterId.$t;
                            let sex = value.sex.$t;
                            let id = value.id.$t;
                            let newDiv = body.append("li");
                            newDiv.text(`name: ${name}^
                            id: ${id}^
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
