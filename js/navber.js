
fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {




        const navi = document.getElementById('navber')
        const admin = localStorage.getItem('Admin')
        console.log(admin)

        navi.innerHTML = data



        if (admin=='true'){
            document.getElementById('admin').innerHTML= `<a href="admin_pannel.html">DeshBoard</a>`
        }
        else{
            document.getElementById('admin').innerHTML= ""
        }

        const account_item = document.getElementById('drop-item');



        const token = localStorage.getItem('Token')
        console.log(token)

        if (token) {

            account_item.innerHTML += `
        <a class="dropdown-item" onclick="handlelogout()">Log out</a>
        <a class="dropdown-item" href="myprofile.html">My Profile</a>
    `
        }
        else {

            account_item.innerHTML += `
                        <a class="dropdown-item" href="register.html">Sign up</a>
                        <a class="dropdown-item" href="login.html">Log in</a>
    
    `
        }







    })



