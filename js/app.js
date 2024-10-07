
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


const loc_array = []

const single_job = (job_list) => {


  document.getElementById('not_found_job').innerText=""


  const token = localStorage.getItem('Token')

  const parent = document.getElementById('job-box-container')
  parent.innerHTML = ""

  job_list.forEach(element => {

      console.log(element)

    loc_array.push(element.Place)

    // console.log(element)
    const div = document.createElement('div')

    div.innerHTML = `
        
        <div class="single-job-container">

          <div class="job-title d-flex gap-3">

            <div class="logo">
              <img class="logopic" src="${element.logo}" alt="">
            </div>

            <div class="title">
              <h3><b>${element.job_title}</b></h3>
            </div>

          </div>
            <div class="d-flex justify-content-between m-2">

                <div class='d-flex gap-4 '>
                        <p id="signle_loc"><i class="fa-solid fa-location-dot"></i>: ${element.Place} </p>
                        <p><i class="fa-solid fa-briefcase"></i>: ${element.employment_status}</p>       
                </div>
            

                <div class="">

                  ${token ? `<a  href="job_apply.html" class='button-47 apply-btn'>Apply</a>` : ""
              }
                </div>

              </div>
              <div class="d-flex gap-3">

                  <p><b>Published Date</b>: ${element.published}</p>
                  <p><b>Application Deadline</b>: ${element.application_deadline}</p>
                  <button  class="view_more button-86"><a class="job_btn_link" target="_blank" href="job_details.html?job_id=${element.id}">View More</a></button>

              </div>
            
        </div>
        
        
        
        `




    parent.appendChild(div)




  }
  );


  console.log(loc_array)

  loc_array.forEach(element => {

    fetch(`http://127.0.0.1:8000/place/${element}/`)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById('signle_loc').innerText = `${data.name} `,
        console.log(data)
      })
  })
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

