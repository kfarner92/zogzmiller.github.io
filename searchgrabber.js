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
                animal: 'dog',
                'location': zip,
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

                        let imglink = value.media.photos.photo[0].$t;


                        var newImg = document.createElement('img');
                        newImg.src = imglink;

                        var list = document.createElement("div");
                        list.setAttribute("class", "col-sm-2 center-block text-center");
                        document.body.appendChild(list);
                        list.appendChild(newImg);

                    });
                });
            }
        });
}) 
}
