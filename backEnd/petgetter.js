document.addEventListener('DOMContentLoaded', bindButtons);
// var url = 'http://api.petfinder.com/shelter.find';
var apiKey = "0d60940cc1ebb2a47f2f53bd4ec5f607"	


function bindButtons(){
    document.getElementById('submitZip').addEventListener('click', function(event){
        event.preventDefault();
        var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
        var url = 'http://api.petfinder.com/pet.find';
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
                    let petArray = response.petfinder.pets.pet;
                    for(var i = 0; i < petArray.length; i++){
                        console.log(i)
                        console.log(petArray[i].age.$t)
                        console.log(petArray[i].animal.$t)
                        console.log(petArray[i].breeds.breed.$t)
                        console.log(petArray[i].id.$t)
                        console.log(petArray[i].media.photos.photo[0].$t)
                        console.log(petArray[i].name.$t)
                        console.log(petArray[i].sex.$t)
                        console.log(petArray[i].shelterId.$t)

                    }
                }
            }); 
    })

}