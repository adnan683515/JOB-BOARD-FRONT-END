


const get_params = () => {

    const user_id = new URLSearchParams(window.location.search).get('user_id')






    fetch(`http://127.0.0.1:8000/applylist/${user_id[4]}${user_id[5]}/`)
        .then((res) => res.json())
        .then((apply_data) => {

            console.log(apply_data.job)

            fetch(`http://127.0.0.1:8000/user/${user_id[1]}${user_id[2]}/`)
                .then((res) => res.json())
                .then((data) => {
        



                        document.getElementById('user').innerHTML = `
        
                    <img class="user-pic" src="${apply_data.image}" alt="">
                    <h4 class="mt-4 username"><b>Username:</b> ${data.username}</h4>
                    <h5 class="fulname"><b>Full Name:</b> ${data.first_name} ${data.last_name}</h5>
                    <p class="email"><b>Email:</b> ${data.email}</p>

            `

                    document.getElementById('apply-previous-com-and-detail').innerHTML = `
        
        <div class="previous-details col-lg-6  col-md-5 col-sm-12 m-5 p-4" id="previous-details">

                <h5 class="text-center"><b>Previous Experience</b></h5>
                <hr class="w-50 m-auto text-center">

                <h6 class="mt-4"><b>Company name:</b> ${apply_data.company}</h6>
                <p><b>Job Title:</b> ${apply_data.title}</p>
                <p><b>Location:</b> ${apply_data.office_location} </p>
            


        </div>

        <div class="apply-details col-lg-6 col-md-5 col-sm-12 m-5 p-4">

                <h5 class="text-center"><b>Apply Details</b></h5>
                <hr class="w-50 m-auto text-center">

                <p class="mt-4"><b>Facebook Link:</b>  ${apply_data.facebookLink}</p>


                <p><b>Resumue link:</b> ${apply_data.resume}</p>
                <p class='accepted-apply-details'><b>Status:</b> ${apply_data.status} </p>
                <p><b>Education:</b> ${apply_data.education} </p>

        </div>

        `
                })


        })





}

get_params()




