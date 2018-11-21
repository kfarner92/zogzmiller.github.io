document.addEventListener('DOMContentLoaded', bindButtons);
var apiKey = "0d60940cc1ebb2a47f2f53bd4ec5f607"	

function bindButtons(){
    document.getElementById('submitZip').addEventListener('click', function(event){
        event.preventDefault();
        var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
        var url = 'https://api.petfinder.com/shelter.find';
            $.ajax({
                url: url,
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    key: apiKey,
                    animal: 'cat',
                    'location': 'kansas',
                    output: 'basic',
                    count: 100,
                    format: 'json'
                },
                success: function( response ) {
                    console.log(response);
                    let shelterArray = response.petfinder.shelters.shelter;
                    for(var i = 0; i < shelterArray.length; i++){
                        console.log(i)
                        console.log(shelterArray[i].address1.$t);
                        console.log(shelterArray[i].city.$t);
                        console.log(shelterArray[i].state.$t);
                        console.log(shelterArray[i].zip.$t);
                        console.log(shelterArray[i].latitude.$t);
                        console.log(shelterArray[i].longitude.$t);
                        console.log(shelterArray[i].email.$t);
                        console.log(shelterArray[i].name.$t);}}
            }); 
    })

}