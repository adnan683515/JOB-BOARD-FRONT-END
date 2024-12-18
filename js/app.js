
const job_browse = (id) => {




  fetch(`http://127.0.0.1:8000/joblist/?Browse_cetagory_id=${id}`)
    .then((res) => res.json())
    .then((data) => single_job(data))

}



const job_place = (id) => {



  fetch(`http://127.0.0.1:8000/joblist/?Place_id=${id}`)
    .then((res) => res.json())
    .then((data) => single_job(data))

}


const job_organigaiton = (id) => {



  fetch(`http://127.0.0.1:8000/joblist/?organizationtype_id=${id}`)
    .then((res) => res.json())
    .then((data) => single_job(data))

}

const job_company = (id) => {



  fetch(`http://127.0.0.1:8000/joblist/?Company_id=${id}`)
    .then((res) => res.json())
    .then((data) => single_job(data))



}




const jobs = () => {



  fetch('http://127.0.0.1:8000/joblist/')
    .then((res) => res.json())
    .then((data) => single_job(data))




}

jobs()




const single_job = (job_list) => {

  document.getElementById('job-box-container').innerHTML = ""
  document.getElementById('data_not_found').innerHTML = ""

  console.log(job_list)

  if (job_list.length == 0) {



    document.getElementById('data_not_found').innerHTML = `

      <img  class="not_found-Img" src="/picture/no-data-concept-illustration_114360-695-removebg-preview.png" alt="">

      <h4  class="text-center text-danger sorry">Sorry! <i class="fa-solid fa-face-sad-tear" style="color: #ffc800;"></i> Data Not found</h4>
    
    `
  }
  else {






    const token = localStorage.getItem('Token')

    const parent = document.getElementById('job-box-container')
    parent.innerHTML = ""



    job_list.forEach(element => {



      // console.log(element)
      const div = document.createElement('div')

      div.innerHTML = `
          
          <div class="single-job-container">
  
            <div class="job-title d-flex gap-3">
  
              <div class="logo">
                <img class="logopic" src="${element.logo}" alt="">
              </div>
  
              <div class="title">
                <h3 class="job_title_text"><b>${element.job_title}</b></h3>
              </div>
  
            </div>
              <div class="d-flex justify-content-between m-2">
  
                  <div class='d-flex gap-4 '>
                          <p id="signle_loc" class="age-limit">Age Limit: ${element.age_limit} </p>
                          <p><i class="fa-solid fa-briefcase"></i>: ${element.employment_status}</p>       
                  </div>
              
  
                  <div class="">
  
                    ${token ? `<a  href="job_apply.html" class='button-47 apply-btn'>Apply</a>` : ""
        }
                  </div>
  
                </div>
                <div class="d-flex gap-3">
  
                    <p class="published"><b>Published Date</b>: ${element.published}</p>
                    <p class="application"><b>Application Deadline</b>: ${element.application_deadline}</p>
                    <button  class="view_more button-86"><a class="job_btn_link" target="_blank" href="job_details.html?job_id=${element.id}">View More</a></button>
  
                </div>
              
          </div>
          
          
          
          `




      parent.appendChild(div)




    }
    );
  }





}






const load_BrowseCetagory = () => {

  fetch('http://127.0.0.1:8000/BrowseCetagory/')
    .then((res) => res.json())
    .then((data) => display_BrowseCetagory(data))
}

load_BrowseCetagory()


const display_BrowseCetagory = (allBCetagory) => {


  allBCetagory.forEach(element => {

    // console.log(element)

    const parent = document.getElementById('dropdown-designation')

    const li = document.createElement('li')
    li.classList.add('dropdown-item')
    li.classList.add('li_item_b')

    li.innerHTML = `
        
    <h6 class="text-white" onclick="job_browse('${element.id}')" >${element.name}</h6>
    `
    parent.appendChild(li)

  })
}




const load_places = () => {

  fetch('http://127.0.0.1:8000/place/')
    .then((res) => res.json())
    .then((data) => {
      display_places(data)

    })
}

load_places()

const display_places = (all_place) => {



  all_place.forEach(element => {

    // console.log(element)

    const parent = document.getElementById('dropdown-place')

    const li = document.createElement('li')
    li.classList.add('dropdown-item')

    li.innerHTML = `
    
    <h6 class="text-white" onclick="job_place('${element.id}')" >${element.name}</h6>
    
    `
    parent.appendChild(li)
  })
}

//http://127.0.0.1:8000/companys/
// dropdown-company

const load_company = () => {

  fetch('http://127.0.0.1:8000/companys/')
    .then((res) => res.json())
    .then((data) => {
      // document.getElementById(''),

      display_company(data)

    })


}



load_company()

const display_company = (all_company) => {



  all_company.forEach(element => {

    // console.log(element)

    const parent = document.getElementById('dropdown-company')

    const li = document.createElement('li')
    li.classList.add('dropdown-item')

    li.innerHTML = `
    
      <h6 onclick="job_company('${element.id}')" >${element.company_name}</h6>
    `
    parent.appendChild(li)
  })
}


const load_organagation = () => {

  fetch('http://127.0.0.1:8000/organaigationtype/')
    .then((res) => res.json())
    .then((data) => display_organigation(data))
}

load_organagation()


const display_organigation = (all_organigation) => {

  all_organigation.forEach(element => {


    const parent = document.getElementById('dropdown-organigation')
    const li = document.createElement('li')
    li.classList.add('dropdown-item')

    li.innerHTML = `
    
      <h6 onclick="job_organigaiton('${element.id}')" class="text-white" >${element.name}</h6>
    
    `
    parent.appendChild(li)
  })
}



