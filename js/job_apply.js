

const load_job_title = () => {
    fetch('http://127.0.0.1:8000/joblist/')
        .then((res) => res.json())
        .then((data) => display_job_title(data))
}

load_job_title()

const display_job_title = (data) => {

    data.forEach(element => {

        const main_div = document.getElementById('Apply-Job-Title')

        const option = document.createElement("option")

        option.value = element.id

        option.innerText = element.job_title


        main_div.appendChild(option)

    });
}




const handleapply = (event) => {
    event.preventDefault();

    document.getElementById('job-apply-success').innerText = ""

    const form = document.getElementById('job-apply-form')

    const form_data_apply = new FormData()


    const imputImage = document.getElementById('your-img').files[0]


    form_data_apply.append('image', imputImage)


    fetch('https://api.imgbb.com/1/upload?key=6f50b3792873011dbc60103979595674', {
        method: "POST",
        body: form_data_apply,
    })
        .then((res) => res.json())
        .then((data) => {



            const new_form_data = new FormData(form);


            new_form_data.append('image', data.data.display_url)



            const apply_job_title_id = new_form_data.get('Apply-Job-Title')
            console.log(apply_job_title_id)

            // const ans = parent(apply_job_title_id)
            // console.log(ans)

            token = localStorage.getItem('Token')
            console.log(token)


            const apply_obj = {

                job: parseInt(apply_job_title_id),

                phone_number: new_form_data.get('your-phone'),

                image: new_form_data.get('image'),

                title: new_form_data.get('your-job-title'),

                status: "Pendding",

                company: new_form_data.get('company-name'),

                office_location: new_form_data.get('office-location'),

                description: new_form_data.get('des'),

                education: new_form_data.get('Education'),


                facebookLink: new_form_data.get('Link'),

                resume: new_form_data.get('your-resume')

            }

            console.log(apply_obj)

            console.log(JSON.stringify(apply_obj))

            fetch('http://127.0.0.1:8000/applylist/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                },
                body: JSON.stringify(apply_obj)
            })
                .then((res) => res.json())
                .then((data) => {

                    document.getElementById('job-apply-success').innerText = "Your Job Application successfully!"
                
                    document.getElementById('your-img').value = ""
                    document.getElementById('your-phone').value = ""
                    document.getElementById('Education').value = ""
                    document.getElementById('Link').value = ""
                    document.getElementById('your-resume').value = ""
                    document.getElementById('your-job-title').value = ""
                    document.getElementById('company-name').value = ""

                    document.getElementById('office-location').value = ""



                })



        })
        .catch(console.log("PIc asce na"))



}


const user_applylist = () => {
    fetch('http://127.0.0.1:8000/applistapiview/')
        .then((res) => res.json())
        .then((data) => load_all_apply(data))
}

user_applylist()

const load_all_apply = (all_apply) => {
    console.log(all_apply)

    document.getElementById('all-apply-body').innerHTML=""
    document.getElementById('admin-panel-noapply').innerHTML=""
    
    if (all_apply.length == 0) {

        document.getElementById('admin-panel-noapply').innerHTML = `
        
            <img class="apply_noimg" src="/picture/notfoundapply-removebg-preview.png" alt="">
            <h3 class="text-center w-50 m-auto">Empty List!</h3>

        
        `
    }

    else {

        all_apply.forEach(element => {
            console.log(element)



            const parent = document.getElementById('all-apply-body')

            const tr = document.createElement('tr')

            tr.classList.add('text-center')



            tr.innerHTML = `
    
    
                    <th scope="row"><img  onclick=user_apply_details('${element.id}','${element.user}') class="admin-panel-img" src='${element.image}' alt="img"></th>
                    <td>${element.user.username}</td>
                    <td>${element.user.email}</td>
                    <td>${element.company}</td>
                    <td>${element.title}</td>
                    
                
        
                    <td>${element.status}</td>
    
                
                        
                    
                    
                
                    <td> 
                        <div class="dropdown">
                            <button class="dropdown-toggle  button-89" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Open
                            </button>
                            <div class="dropdown-menu open" aria-labelledby="dropdownMenu2">
                            
                                <button class="dropdown-item" onclick="handleapplyListDelete('${element.id}')">Rejected</button>
                                <button  onclick="handlestatus('${element.id}')" class="dropdown-item">Selected</button>
                                <a href="apply_deatils_user.html?job_id=${element.id}" class="dropdown-item">Apply Details</a>
                            
                            </div>
                        </div>
    
                    </td>
    
                    
                
                `
            parent.appendChild(tr)
        })
    }


}


const user_apply_details = (id, user_id) => {
    console.log("Success")
    console.log("apply id", id)

    fetch(`http://127.0.0.1:8000/user/${user_id}/`)
        .then((res) => res.json())
        .then((data) => console.log(data))
}



const handleapplyListDelete = (id) => {
    console.log(id)

    document.getElementById('delete-apply').innerText = ""

    fetch(`http://127.0.0.1:8000/applylist/${id}/`,
        {
            method: "DELETE"
        }
    )
        .then((res) => {
            document.getElementById('delete-apply').innerText = "Successfully Delete!"
        })
}



const handlestatus = (id) => {
    console.log(id)
    console.log("Handle status is running")

    document.getElementById('email-send-accepted').innerText = ""

    //fecth korbo


    fetch(`http://127.0.0.1:8000/applylistedit/${id}/`)
        .then((res) => res.json())
        .then((data) => {


            const obj = {
                phone_number: data.phone_number,
                image: data.image,
                status: "Accepted",
                title: data.title,
                company: data.company,
                office_location: data.office_location,
                form: data.form,
                to: data.to,
                education: data.education,
                facebookLink: data.facebookLink,
                resume: data.resume,
                user: data.user,
                job: data.job
            }

            console.log(obj)

            fetch(`http://127.0.0.1:8000/applylistedit/${id}/`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj)
            }
            )
                .then((res) => res.json())
                .then((data) =>
                    document.getElementById('email-send-accepted').innerText = "Accepted and Email Send Successfully!"
                )

        })





}

const load_company_for_applylist = () => {


    fetch('http://127.0.0.1:8000/joblist/')
        .then((res) => res.json())
        .then((data) => display_com_for_applylist(data))
}

load_company_for_applylist()



const display_com_for_applylist = (alldata) => {

    console.log(alldata)

    alldata.forEach(element => {




        const parent = document.getElementById('all-applylist')
        const li = document.createElement('li')
        li.classList.add('dropdown-item')

        li.innerHTML = `
        
            <h6 onclick=all_apply_view_admin_filter('${element.id}') class="text-white" >${element.job_title}</h6>
        
        `
        parent.appendChild(li)
    })
}



const all_apply_view_admin_filter = (id) => {

    fetch(`http://127.0.0.1:8000/newapply/?job_params=${id}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('all-apply-body').innerHTML = "",
                load_all_apply(data)
        })


}



const all_load_job = () => {

    fetch('http://127.0.0.1:8000/joblist/')
        .then((res) => res.json())
        .then((data) => display_admin_all_job(data))
}


all_load_job()


const display_admin_all_job = (data) => {


    data.forEach(element => {



        const parent = document.getElementById('job-box-admin')

        const div = document.createElement('div')
        div.classList.add('single-box-job')
        div.classList.add('col-lg-2')
        div.classList.add('col-md-3')
        div.classList.add('w-30')
        div.classList.add('col-sm-12')
        div.classList.add('m-3')
        div.classList.add('mt-5')
        div.classList.add('text-center')

        div.innerHTML = `
    


        <div class="dropdown">
                        <p class="float-end"  id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-bars"></i>
                        </p>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        
                            <a href="edit_job_post.html?edit_id=${element.id}" class="dropdown-item">Edit</a>
                            <button onclick="job_delete_admin('${element.id}')" class="dropdown-item">Delete</button>
                            <a  href="job_details.html?job_id=${element.id}" class="dropdown-item">View More</a>
                        
                        </div>
        </div>




        <img class="admin-job-img" src="${element.logo}" alt="">
        <p class="job-title-admin-box">Job Title: ${element.job_title}</p>
        <p>Status: ${element.employment_status}</p>
        <p>Address: ${element.address} </p>

        `

    

        parent.appendChild(div)

    })

}

const job_edit_admin = () => {


    console.log("edit job")
}

const job_delete_admin = (id) => {

    console.log(id)

    document.getElementById('delete-admin-job').innerText = ""

    fetch(`http://127.0.0.1:8000/joblist/${id}/`, {
        method: "DELETE"
    })
        .then((res) => {

            document.getElementById('delete-admin-job').innerText = `Job  id: ${id} Successfully Deleted!`
        })

}