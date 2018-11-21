document.addEventListener('DOMContentLoaded', bindButtons);
// var url = 'https://api.petfinder.com/shelter.find';
var apiKey = "0d60940cc1ebb2a47f2f53bd4ec5f607"	
var body = d3.select("body")
function bindButtons(){
    document.getElementById('submitZip').addEventListener('click', function(event){
        event.preventDefault();
        var zip = document.getElementById('zip').value;// this line gets the zip code from the form entry
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
