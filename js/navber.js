
fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {

        document.getElementById('navber').innerHTML = data


 


})