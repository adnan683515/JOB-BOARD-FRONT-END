


//////////////////////////////job eddit ar kaj////////////////////////
const job_id_diya_job_dortesi = (id) => {



    const sl = document.getElementById('salary-e')
    const gen = document.getElementById('Gender-e')
    const address_job = document.getElementById('address-e')
    const age_limit = document.getElementById('age-e-limite')
    const work = document.getElementById('work-station-e')
    const office = document.getElementById('address1')
    const status = document.getElementById('Employment-Status-e')
    const edu = document.getElementById('education-e')
    const requ = document.getElementById('Requirments-e')
    const other_beni = document.getElementById('benefits-e')
    const expre = document.getElementById('Experience-e')
    const ded = document.getElementById('deadline-e')
    const pubis = document.getElementById('published-date-e')
    // console.log(gen.value)

    console.log(document.getElementById('company-load').value)


    fetch(`http://127.0.0.1:8000/joblist/${id}/`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data),


                sl.value = data.salary,
                gen.value = data.gender
            address_job.value = data.job_title
            age_limit.value = data.age_limit
            work.value = data.work_station
            office.value = data.address
            status.value = data.employment_status
            edu.value = data.education
            requ.value = data.requirments
            other_beni.value = data.other_benefits
            expre.value = data.experience
            ded.value = data.application_deadline
            pubis.value = data.published

        }

        )
}


const Edit_value_post = (event) => {


    document.getElementById('job-post-edit').innerText=""

    event.preventDefault();
    console.log("event")

    const form = document.getElementById('edit-job-post-form')

    const form_data = new FormData(form)
    console.log(form_data)



    const img_logo = document.getElementById('image_e_logo').files[0]
    const offic_picture = document.getElementById('image-office-e').files[0]


    form_data.append('image', img_logo)
    form_data.append('image-office1', offic_picture)

    let edit_imge = []

    fetch('https://api.imgbb.com/1/upload?key=6f50b3792873011dbc60103979595674', {
        method: "POST",
        body: form_data,
    })
        .then((res) => res.json())
        .then((data) => {



            edit_imge.push(data.data.url)




        })


    fetch('https://api.imgbb.com/1/upload?key=6f50b3792873011dbc60103979595674', {
        method: "POST",
        body: form_data,
    })
        .then((res) => res.json())
        .then((newdata) => {

            edit_imge.push(newdata.data.url)

            console.log(edit_imge)

            const new_form = new FormData(form)

            new_form.append('logo_com', edit_imge[0])
            new_form.append('office_logo_com', edit_imge[1])

            console.log(new_form)
            

            const create_edit_bj = {



                job_title: new_form.get('Job-e-Title') ,
                logo: new_form.get('logo_com'),
                salary: new_form.get('salary'),
                age_limit:new_form.get('age-limit'),
                work_station: new_form.get('work-station'),
                employment_status: new_form.get('Employment-Status'),
                application_deadline: new_form.get('deadline-date-e'),
                published: new_form.get('published-date'),
                education: new_form.get('education'),
                experience: new_form.get('Experience'),
                address: new_form.get('address1-e'),
                other_benefits: new_form.get('benefits'),
                gender: new_form.get('Gender'),
                requirments: new_form.get('Requirments'),
                office_picture: new_form.get('office_logo_com'),
                Company: new_form.get('company-load'),
                Place: new_form.get('Place-load'),
                organizationtype: new_form.get('Organigation-Type-load'),
                Browse_cetagory: new_form.get('Browse-Cetagory-load')


            }

            console.log(create_edit_bj)


            const param_id = new URLSearchParams(window.location.search).get("edit_id")

            

            fetch(`http://127.0.0.1:8000/joblist/${param_id}/`,{
                method:"PUT",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(create_edit_bj)
            })
            .then((res) => res.json())
            .then((data) => {

                document.getElementById('job-post-edit').innerText="Successfully! Your Job Application Edited!"
            })
            



        })









}





const get_params_for_edit_job = () => {

    const params = new URLSearchParams(window.location.search).get('edit_id')
    job_id_diya_job_dortesi(params)
}


get_params_for_edit_job()