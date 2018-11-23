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
        var zip = document.getElementById('zip').value;
        var url = 'https://api.petfinder.com/pet.find';
        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: apiKey,
                animal: 'cat',
                'location': zip,
                output: 'basic',
                count: 100,
                format: 'json'
            },
            success: function( response ) {
                console.log(response);
                var data = [];
                data.push(response.petfinder.pets.pet);
                data.forEach(function(dataParsing) {
                    Object.entries(dataParsing).forEach(function([key, value]) {
                        let breeds = []
                        var breed1;
                        var breed2;
                        let age = value.age.$t;
                        let name = value.name.$t;
                        let animal = value.animal.$t;
                        let shelterId = value.shelterId.$t;
                        let sex = value.sex.$t;
                        let id = value.id.$t;
                        let newDiv = body.append("li");
                        if (value.breeds.breed.length > 1){
                            for (var b = 0; b < value.breeds.breed.length; b++) {
                                breed1 = (value.breeds.breed[0].$t);
                                breed2 = (value.breeds.breed[1].$t);
                        }
                            breeds.push(`${breed1} / ${breed2}`);
                    }
                        else {
                            breeds.push(value.breeds.breed.$t);

                        }
                        newDiv.text(`name: ${name}^
                        id: ${id}^
                        age: ${age}^
                        breed: ${breeds}^
                        animal: ${animal}^
                        shelterId: ${shelterId}^
                        sex: ${sex}^
                        website: https://www.petfinder.com/petdetail/${id}`);
                    });
                });
            }
        });
}) 
}
