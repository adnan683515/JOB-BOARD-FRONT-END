const job_post_load_place = () => {

    fetch('http://127.0.0.1:8000/place/')
        .then((res) => res.json())
        .then((data) => job_dispaly_place(data))
}

const job_dispaly_place = (allplace) => {

    allplace.forEach(element => {

        const main_div = document.getElementById('Place-load')

        const option = document.createElement("option")

        option.value = element.id
        option.innerText = element.name


        main_div.appendChild(option)

    });

}
job_post_load_place()


const job_pst_load_company = () => {

    fetch('http://127.0.0.1:8000/companys/')
        .then((res) => res.json())
        .then((data) => job_pst_display_company(data))

}

job_pst_load_company()

const job_pst_display_company = (allcompany) => {



    allcompany.forEach(element => {

        const main_div = document.getElementById('company-load')

        const option = document.createElement("option")

        option.value = element.id
        option.innerText = element.company_name


        main_div.appendChild(option)

    });
}


const job_pst_browse_company = () => {

    fetch('http://127.0.0.1:8000/BrowseCetagory/')
        .then((res) => res.json())
        .then((data) => job_pst_display_browsecetagory(data))

}

job_pst_browse_company()

const job_pst_display_browsecetagory = (allBCetagory) => {


    allBCetagory.forEach(element => {

        const main_div = document.getElementById('Browse-Cetagory-load')

        const option = document.createElement("option")

        option.value = element.id
        option.innerText = element.name


        main_div.appendChild(option)

    });
}


const job_pst_organization = () => {

    fetch('http://127.0.0.1:8000/organaigationtype/')
        .then((res) => res.json())
        .then((data) => job_pst_display_organigation(data))

}

job_pst_organization()

const job_pst_display_organigation = (allOrgaCetagory) => {


    allOrgaCetagory.forEach(element => {

        const main_div = document.getElementById('Organigation-Type-load')

        const option = document.createElement("option")

        option.value = element.id
        option.innerText = element.name


        main_div.appendChild(option)

    });
}


/////////////////////////////handle post///////////////////////////////////

const handlePOST = (event) => {

    event.preventDefault();

    document.getElementById('job-post-success').innerText = ""
    const form = document.getElementById('job-post-form')

    const Form_Data = new FormData(form)





    const img_logo = document.getElementById('image-logo').files[0]
    const offic_pic = document.getElementById('image-office').files[0]

    Form_Data.append('image', img_logo)
    Form_Data.append('image_office', offic_pic)

    let store_img_url = []

    fetch('https://api.imgbb.com/1/upload?key=6f50b3792873011dbc60103979595674', {
        method: "POST",
        body: Form_Data,
    })
        .then((res) => res.json())
        .then((data) => {


            store_img_url.push(data.data.url)


        })



    fetch('https://api.imgbb.com/1/upload?key=6f50b3792873011dbc60103979595674', {
        method: "POST",
        body: Form_Data,
    })
        .then((res) => res.json())
        .then((data) => {


            store_img_url.push(data.data.url)


            const new_form_data = new FormData(form)

            new_form_data.append('image1', store_img_url[0])
            new_form_data.append('image2', store_img_url[1])

            console.log(new_form_data)







            const Post_Obj = {



                Place: new_form_data.get("Place-load"),

                organizationtype: new_form_data.get('Organigation-Type-load'),

                Company: new_form_data.get("company-load"),

                job_title: new_form_data.get("Job-Title"),

                logo: new_form_data.get('image1'),

                salary: new_form_data.get('salary'),

                age_limit: new_form_data.get('age-limit'),

                work_station: new_form_data.get('work-station'),

                employment_status: new_form_data.get('Employment-Status'),

                application_deadline: new_form_data.get('deadline-date'),

                published: new_form_data.get('published-date'),

                education: new_form_data.get('education'),

                experience: new_form_data.get('Experience'),

                address: new_form_data.get('address1'),

                other_benefits: new_form_data.get('benefits'),

                gender: new_form_data.get('Gender'),

                requirments: new_form_data.get('Requirments'),

                office_picture: new_form_data.get('image2'),

                Browse_cetagory: new_form_data.get('Browse-Cetagory-load')

            }
            console.log(Post_Obj)





            fetch('http://127.0.0.1:8000/joblist/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Post_Obj)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data),

                        document.getElementById('job-post-success').innerText = "Your Job Post Completed!"

                    document.getElementById('image-logo').value = "",
                        document.getElementById('address').value = "",
                        document.getElementById('age-limite').value = "",
                        document.getElementById('salary').value = "",
                        document.getElementById('work-station').value = "",
                        document.getElementById('address1').value = "",
                        document.getElementById('deadline').value = "",
                        document.getElementById('image-office').value = "",
                        document.getElementById('education').value = "",
                        document.getElementById('Experience').value = "",
                        document.getElementById('benefits').value = "",
                        document.getElementById('Requirments').value = ""


                })



        })

}
////////////////////////////////////handle post section end /////////////////////





