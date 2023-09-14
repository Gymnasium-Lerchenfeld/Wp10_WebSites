async function fetchapod() {
    const url = "https://api.nasa.gov/planetary/apod?api_key=IKGrfkMudHAQCa2HSYuwFhNHewoFWLbusyJFXE7W";
    const response = await fetch(url);
    return await response.json();
}

async function fetchasteroids() {
    let date = new Date();
    date = date.toISOString().split('T')[0];
    const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + date + "&api_key=IKGrfkMudHAQCa2HSYuwFhNHewoFWLbusyJFXE7W";
    const response = await fetch(url);
    const data = await response.json();
    const shuffled = data.near_earth_objects[date].sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, 5);
}

async function fetchpictures() {
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=IKGrfkMudHAQCa2HSYuwFhNHewoFWLbusyJFXE7W";
    const response = await fetch(url);
    const data = await response.json();
    const shuffled = data.photos.sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, 5);
}

fetchapod().then((data) => {
    $(".image").attr("src", data.url);
})

fetchasteroids().then((data) => {
    var content ="";
    for(i=0; i<5; i++) {
        content += "<tr>" + 
        "<td>" + data[i].name + "</td>" +
        "<td>" + data[i].estimated_diameter.kilometers.estimated_diameter_min + " - " + data[i].estimated_diameter.kilometers.estimated_diameter_max + "</td>" +
        "<td>" + data[i].close_approach_data[0].relative_velocity.kilometers_per_hour +  "</td>" +
        "<td>" + data[i].close_approach_data[0].miss_distance.kilometers + "</td>" +
        "</tr>"
    }

    $("#asteroids").append(content)
})

fetchpictures().then((data) => {
    var content ="";
    for(i=0; i<5; i++) {
        content += "<img src=" + data[i]["img_src"] + " width=250><br>"
    }

    $("#roverphotos").append(content)
})
