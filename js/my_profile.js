

const profile = () => {

    const user_id = localStorage.getItem('user_id')




    fetch(`http://127.0.0.1:8000/user/${user_id}/`)
        .then((res) => res.json())
        .then((data) => {



            document.getElementById('username-update').value = data.username
            document.getElementById('firstname-update').value = data.first_name
            document.getElementById('lastname-update').value = data.last_name
            document.getElementById('email-update').value = data.email
        })


}

profile()

const update_form_user = (event) => {

    event.preventDefault();

    console.log("update")

    // document.getElementById('account-update').innerText = ""

    const usre_id = localStorage.getItem('user_id')

    const form_account_update = document.getElementById('registration-update-2')

    const form_data_update = new FormData(form_account_update)

    const obj_create = {
        username: form_data_update.get('username-update'),
        first_name: form_data_update.get('firstname-update'),
        last_name: form_data_update.get('lastname-update'),
        email: form_data_update.get('email-update')
    }

    console.log(obj_create)

    fetch(`http://127.0.0.1:8000/user/${usre_id}/`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj_create)
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('account-update').innerText = "Your Account Updated!"
        })
}


const User_can_see_her_account = () => {


    const id = localStorage.getItem('user_id')

    fetch(`http://127.0.0.1:8000/newapply/?user_id=${id}`)
        .then((res) => res.json())
        .then((data) => {


            display_account_item(data)


        })
}

const display_account_item = (listapply) => {


    document.getElementById('apply_list_not_found').innerHTML =""
    document.getElementById('account-my-body').innerHTML=""

    if (listapply.length == 0) {

        document.getElementById('apply_list_not_found').innerHTML = `
        
            
                    <img class="notfoun_apply_user" src="/picture/notfoundapply-removebg-preview.png" alt="">
                    <h3 class="text-center text-white">No Apply List</h3>
        
        `
    }
    else {



        listapply.forEach(element => {

        
            console.log(element)
            document.getElementById('account-img-circle').innerHTML = `

            <img class="account-img" src="${element.image}" alt="">
        `

            const parent = document.getElementById('account-my-body')

            const tr = document.createElement('tr')

            tr.innerHTML = `
        
            
                        
                            <td  id="job_id_diya_job_item">${element.job.job_title}</td>
                            <td>${element.job.Company.company_name}</td>
                            <td>${element.job.employment_status}</td>
                            <td>${element.status}</td>
                            <td><a href="apply_edit.html?edit_apply=${element.id}"> <i class="fa-solid fa-pen fa-xl" style="color: #00ff7b;"></i> </a></td>
                            <td onclick="delete_user_apply('${element.id}')"><i class="fa-solid fa-xmark fa-xl" style="color: #ff0000;"></i></td>
                            <td><a href="job_details.html?job_id=${element.job.id}"> <i class="fa-solid fa-arrow-right fa-xl" style="color: #06a5ea;"></i> </a> </td>
                            
                    
        
        
        `   
            
            parent.appendChild(tr)
            // job_profile(element.job)


        });
    }


}




const diplay_profile_job = (data) => {

    data.forEach(element => {
        document.getElementById('job_id_diya_job_item').innerText = `${element.job_title}`
    })
}




const delete_user_apply = (id) => {
    document.getElementById('delete-apply').innerText = ""
    fetch(`http://127.0.0.1:8000/deleteapply/${id}/`, {
        method: "DELETE"
    })
        .then((res) => {
            document.getElementById('delete-apply').innerText = "Your Application Deleted!"
        })



}




User_can_see_her_account()



const edit_apply_for_user = () => {

    const params = new URLSearchParams(window.location.search).get('edit_apply')


    fetch(`http://127.0.0.1:8000/applylist/${params}/`)
        .then((res) => res.json())
        .then((data) => {
     
            document.getElementById('your-phone-edit-apply').value = data.phone_number
            document.getElementById('Education-edit-apply').value = data.education
            document.getElementById('Link-edit-apply').value = data.facebookLink
            document.getElementById('your-resume-edit-apply').value = data.resume
            document.getElementById('your-job-title-edit-apply').value = data.title
            document.getElementById('company-name-edit-apply').value = data.company
            document.getElementById('office-location-edit-apply').value = data.office_location

        })


}

edit_apply_for_user()

const onsubmit_update_apply = (event) => {
    document.getElementById('job-apply-edit-success').innerText = ""
    event.preventDefault()
    const params = new URLSearchParams(window.location.search).get('edit_apply')
    console.log(params)
    const form = document.getElementById('job-apply-form-edit')

    const fMdata = new FormData(form)


    const YourImg = document.getElementById('your-img-edit-apply').files[0]

    fMdata.append('image', YourImg)


    fetch('https://api.imgbb.com/1/upload?key=6f50b3792873011dbc60103979595674', {
        method: "POST",
        body: fMdata,
    })
        .then((res) => res.json())
        .then((data) => {

            const new_fm_data = new FormData(form)

            new_fm_data.append('Your_edit_img', data.data.display_url)
            console.log(new_fm_data)

            const create_obj_for_edit_apply = {
                phone_number: new_fm_data.get('your-phone-edit-apply'),
                image: new_fm_data.get('Your_edit_img'),
                status: "Pendding",
                title: new_fm_data.get('your-job-title-edit-apply'),
                company: new_fm_data.get('company-name-edit-apply'),
                office_location: new_fm_data.get('office-location-edit-apply'),
                education: new_fm_data.get('Education-edit-apply'),
                facebookLink: new_fm_data.get('Link-edit-apply'),
                resume: new_fm_data.get('your-resume-edit-apply'),
                job: new_fm_data.get('Apply-Job-Title')

            }
            console.log(create_obj_for_edit_apply)

            fetch(`http://127.0.0.1:8000/applylist/${params}/`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(create_obj_for_edit_apply)
            })
                .then((res) => res.json())
                .then((data) => {

                    console.log(data)
                    document.getElementById('your-img-edit-apply').value = "",
                        document.getElementById('your-phone-edit-apply').value = "",
                        document.getElementById('Education-edit-apply').value = "",
                        document.getElementById('Link-edit-apply').value = "",
                        document.getElementById('your-resume-edit-apply').value = "",
                        document.getElementById('Apply-Job-Title').value = "",
                        document.getElementById('your-job-title-edit-apply').value = "",
                        document.getElementById('company-name-edit-apply').value = "",
                        document.getElementById('office-location-edit-apply').value = "",

                        document.getElementById('job-apply-edit-success').innerText = "Your Application Updated!"
                })
        })


}




const all_load_job_for_all_job_page = () => {
    fetch('http://127.0.0.1:8000/joblist/')
        .then((res) => res.json())
        .then((data) => {


            console.log(data)

            data.forEach(element => {

                const parent = document.getElementById('all-job-box-row-container')

                const div = document.createElement('div')

                div.classList.add('card')
                // div.classList.add('w-5')
                div.classList.add('all_job_card')
                div.classList.add('box-job')
                div.classList.add('col-lg-3')
                div.classList.add('col-md-5')
                div.classList.add('col-sm-12')
                // div.classList.add('mb-1')
                // div.classList.add('mt-1')
                // div.classList.add('w-5')
                div.classList.add('m-1')


                div.innerHTML = `
            
                <a class="card-body text-decoration-none" href="job_details.html?job_id=${element.id}">
                        <img class="img-fluid text-center all-job-box-img" src="${element.logo}" alt="">
                        <p class="card-text"><b>Job Title: </b>${element.job_title}</p>
                        <p class="card-text"><b>Age: </b>${element.age_limit}</p>
                        <p class="card-text"><b>Salary: </b>${element.salary}</p>
                        
                </a>
            
            `
                parent.appendChild(div)

            })
        })
}
all_load_job_for_all_job_page()




