


const get_params = () => {

    const job_id = new URLSearchParams(window.location.search).get('job_id')

    fetch(`http://127.0.0.1:8000/apply_deatils/${job_id}/`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data)





            // console.log(data.job.job_title)



            document.getElementById('user').innerHTML = `
        
                    <img class="user-pic" src="${data.image}" alt="">
                    <h4 class="mt-4 username"><b>Username:</b> ${data.user.username}</h4>
                    <h5 class="fulname"><b>Full Name:</b> ${data.user.first_name} ${data.user.last_name}</h5>
                    <p class="email"><b>Email:</b> ${data.user.email}</p>
                    <p><b>Phone Number: </b>  ${data.phone_number} </p>

            `

            document.getElementById('apply-previous-com-and-detail').innerHTML = `
        
                <div class="previous-details col-lg-6  col-md-5 col-sm-12 m-5 p-4" id="previous-details">

                <h5 class="text-center"><b>Previous Experience</b></h5>
                <hr class="w-50 m-auto text-center">

                <h6 class="mt-4"><b>Company name:</b> ${data.company}</h6>
                <p><b>Job Title:</b> ${data.title}</p>
                <p><b>Location:</b> ${data.office_location} </p>
            


                </div>

                <div class="apply-details col-lg-6 col-md-5 col-sm-12 m-5 p-4">

                    <h5 class="text-center"><b>Apply Details</b></h5>
                    <hr class="w-50 m-auto text-center">

                    <p class="mt-4"><b>Facebook Link:</b>  ${data.facebookLink}</p>


                    <p><b>Resumue link:</b> ${data.resume}</p>
                    <p class='accepted-apply-details'><b>Status:</b> ${data.status} </p>
                    <p><b>Education:</b> ${data.education} </p>

                </div>

                `


            
            document.getElementById('job-expectation').innerHTML = `
                                
                        <img class="apply_data_job_logo float-left image-responsive text-center" src="${data.job.logo}" alt="">
                        <div class="text-center">
                                <h1 id="company-name-dora"  class="text-center font-com">${data.job.Company.company_name}</h1>
                            
                        </div>
                        <hr class="text-center w-50 m-auto mb-5" >
                        <h2 class="font-com"><b>Job Title: ${data.job.job_title}</b></h2>
                        <p class="font-com" ><b>Employment Satus:</b> ${data.job.employment_status}</p>           
                        <p id="orga-name-dora"><b>Organization:</b> ${data.job.organizationtype.name}</p>
                        <p class="font-com"><b>Gender:</b> ${data.job.gender}</p>
                        <p class="edu-admin"><b>Education:</b> ${data.job.education}</p>
                        <p class="font-com" ><b>Experience:</b> ${data.job.experience}</p>
                        <p class="font-com" ><b>Requirment :</b> ${data.job.requirments}</p>


                        `

        })




    // })
}
get_params()


{/* <p class="font-com" ><b>Employment Satus:</b> ${data.employment_}</p>
<p id="orga-name-dora"><b>Organization:</b> ${apply_data.job.organizationtype}</p>
<p class="font-com"><b>Gender:</b> ${apply_data.job.gender}</p>
<p class="edu-admin"><b>Education:</b> ${apply_data.job.education}</p>
<p class="font-com" ><b>Experience:</b> ${apply_data.job.experience}</p>
<p class="font-com" ><b>Requirment :</b> ${apply_data.job.requirments}</p>
           */}


