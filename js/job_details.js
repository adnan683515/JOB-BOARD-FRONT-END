

const JOB_Details = (job_id) => {


    const token = localStorage.getItem('Token')



    fetch(`http://127.0.0.1:8000/joblist/${job_id}/`)
        .then((res) => res.json())
        .then((data) => {


    

            document.getElementById('job_title').innerText = data.job_title


            const parent = document.getElementById('filter-box-and-details-box')



            parent.innerHTML = `
        
            <div id="details-full-box" class="details-full-box col-md-8 col-sm-12">


                <div class="job-title-loc-com row w-100 m-auto mt-4 p-2">

                    <div class="col-md-10 col-sm-12">
                        <h3 class="job_title_for_datails"><b>${data.job_title}</b></h3>
                        <p id="again_company" class="again_company"><i class="fa-solid fa-briefcase"></i> ${data.Company}</p>
                        <p class="address-for_details"><i class="fa-solid fa-location-arrow fa-lg"></i> ${data.address}</p>
                    </div>

                    <div class="col-md-2 col-sm-12 mt-5">
                    
                    ${
                        token?`<a href="job_apply.html" type="button" class="button-89 mt-4">Apply</a>`:""
                    }
                    
                    
                    </div>


                </div>

                <div class="job-duration-salary-age w-90 m-auto row mt-3 text-center">

                    <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-3 m-2 text-center align-items-center">
                        <div class="icon-for-box text-center p-2">
                            <p><i class="fa-solid fa-briefcase fa-beat"></i></p>
                    </div>

                    <div class="text-for-box">
                        <p class="job_type">Job Type <br>${data.employment_status}</p>
                    </div>
            </div>

            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-money-bill fa-beat-fade"></i></p>
                </div>
    
                <div class="text-for-box">
                    <p class="salary_details">Salary<br><b>${data.salary}</b></p>
                </div>
            </div>

            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-person fa-bounce"></i></p>
            </div>
    
                <div class="text-for-box">
                    <p class="age_details">Age <br><b>${data.age_limit}</b></p>
                </div>
            </div>


            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-landmark fa-fade"></i></p>
                </div>
    
                <div class="text-for-box">
                    <p class="organization_type_details">Organigation Type<br><b id="orgra-abr-fecth">${data.organizationtype}</b></p>
                </div>
            </div>

            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-person" style="color: #0c51a7;"></i></p>
                </div>
    
                <div class="text-for-box">
                    <p class="gender_details">Gendar <br><b>${data.gender}</b></p>
                </div>
            </div>

            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-location-dot fa-shake"></i></p>
                </div>
    
                <div class="text-for-box">
                    <p class="place_details">Place <br><b id="again_place">${data.Place}</b></p>
                </div>
            </div>


            
            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-briefcase fa-bounce"></i></p>
                </div>
    
                <div class="text-for-box">
                    <p class="work_station">Work station <br><b>${data.work_station}</b></p>
            </div>
            </div>


                
            <div class="info-for-deatils d-flex gap-1 col-md-3 col-sm-2 m-2 text-center align-items-center">
                <div class="icon-for-box text-center p-2">
                    <p><i class="fa-solid fa-calendar-days"></i></p>
                </div>
    
                <div class="text-for-box d-flex gap-3">
                    <p class="deadlin_details">Deadline: <br><b>${data.application_deadline}</b></p>

                    <p><i class="fa-solid fa-calendar-days"></i> Published: <br><b>${data.published}</b></p>
                </div>
            </div>

    

        

        

        </div>

        <div class="education-container w-80 m-auto mt-3 mt-5">

            <h5 class="education_heading"><i class="fa-solid fa-school"></i> <b>Education</b></h5>
            <p class="education_job"><i class="fa-solid fa-circle-dot"></i> ${data.education}</p>

            <h5 class="mt-5"><i class="fa-solid fa-brain" style="color: #017e8e;"></i> <b>Experience:</b></h5>
            <p class="JOb_experience"><i class="fa-solid fa-circle-dot"></i> ${data.experience}</p>
        </div>
        

        <div class="row gap-2 w-80 m-auto mt-5 education-container p-4">

            <div class="col-md-12 col-sm-12 benefits w-80 m-auto mt-3">

            <h6 class="other_title"><b>Other's Benefits</b></h6>
            <p class="other_binifits"><i class="fa-solid fa-circle-dot"></i> ${data.other_benefits}</p>

            </div>

            <div class="col-md-12 col-sm-12 mt-2 benefits">

            <h6 class="other_title"><b>Requirments: </b></h6>
            <p class="requ"><i class="fa-solid fa-circle-dot"></i> ${data.requirments}</p>

            </div>

        </div>




        </div>

        <div class="office-pic col-md-2 col-sm-12">


                <h4 class="text-center mt-4">Company Logo</h4>
                <hr>
                <img class="office-picture" src="${data.office_picture}" alt="office picture">


                <img class="office-picture m-4" src="/picture/vactorjob.png" alt="office picture">
        </div>

        


        
    
        `



        });


    
        fetch(`http://127.0.0.1:8000/joblist/${job_id}/`)
        .then((res) => res.json())
        .then((data) =>{
            again_take_orga(data.organizationtype),
            again_take_place(data.Place),
            again_take_company(data.Company)
            console.log(data)
        })




}

const again_take_company=(id)=>{

    fetch(`http://127.0.0.1:8000/companys/${id}/`)
    .then((res) => res.json())
    .then((data) => {

        document.getElementById('again_company').innerHTML = `<i class="fa-solid fa-briefcase"></i> ${data.company_name}`
    })
}


const again_take_place=(id)=>{

    fetch(`http://127.0.0.1:8000/place/${id}/`)
    .then((res) => res.json())
    .then((dta) => {

        document.getElementById('again_place').innerText = `${dta.name}`
    })
}

const again_take_orga=(id)=>{

    fetch(`http://127.0.0.1:8000/organaigationtype/${id}/`)
    .then((res) => res.json())
    .then((dta) =>{

        document.getElementById('orgra-abr-fecth').innerText=`${dta.name}`
    })
}






const get_params_job_id = () => {
    const params = new URLSearchParams(window.location.search).get('job_id')



    JOB_Details(params)

}
get_params_job_id()


const deatil_company = () => {

    fetch('http://127.0.0.1:8000/companys/')
        .then((res) => res.json())
        .then((data) => {
            dis_company(data)

        })


}

const dis_company = (allcompany) => {




    allcompany.forEach(element => {

        // console.log(element)

        const parent = document.getElementById('dropdown-detail-company')

        const li = document.createElement('li')
        li.classList.add('dropdown-item')

        li.innerHTML = `
        
           <h6>${element.company_name}</h6>
        `
        parent.appendChild(li)
    })
}


deatil_company()



const load_detail_place = () => {

    fetch('http://127.0.0.1:8000/place/')
        .then((res) => res.json())
        .then((data) => {
            display_place(data)
        })
}

load_detail_place()

const display_place = (all_place) => {



    all_place.forEach(element => {

        // console.log(element)

        const parent = document.getElementById('dropdown-detail-place')

        const li = document.createElement('li')
        li.classList.add('dropdown-item')

        li.innerHTML = `
    
        <h6 class="text-white">${element.name}</h6>
    
        `
        parent.appendChild(li)
    })

}



const load_detail_organagation = () => {

    fetch('http://127.0.0.1:8000/organaigationtype/')
        .then((res) => res.json())
        .then((data) => display_detail_organigations(data))
}
load_detail_organagation()


const display_detail_organigations = (all_organigation) => {

    all_organigation.forEach(element => {


        const parent = document.getElementById('dropdown-detail-job-title')
        const li = document.createElement('li')
        li.classList.add('dropdown-item')

        li.innerHTML = `
    
        <h6 class="text-white">${element.name}</h6>
    
    `
        parent.appendChild(li)
    })
}


const load_Detail_BrowseCetagory = () => {

    fetch('http://127.0.0.1:8000/BrowseCetagory/')
        .then((res) => res.json())
        .then((data) => display_detail_BrowseCetagory(data))
}

load_Detail_BrowseCetagory()


const display_detail_BrowseCetagory = (allBCetagory) => {


    allBCetagory.forEach(element => {

        // console.log(element)

        const parent = document.getElementById('dropdown-detail-BrowseCetagory')

        const li = document.createElement('li')
        li.classList.add('dropdown-item')

        li.innerHTML = `
          
      <h6 class="text-white" onclick="job_browse('${element.id}')" >${element.name}</h6>
      `
        parent.appendChild(li)

    })
}


const jobs_carosel = () => {

    fetch('http://127.0.0.1:8000/joblist/')
        .then((res) => res.json())
        .then((data) => single_jobs_carosel(data))

}


jobs_carosel()

const single_jobs_carosel = (data) => {

    data.forEach(element => {

        const parent = document.getElementById('carousel-indicators')

        const div = document.createElement('div')

        div.innerHTML = `

             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
        
        
        `
        parent.appendChild(div)



    })
}