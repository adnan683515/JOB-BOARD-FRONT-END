

const handlCompany = (event) => {
    event.preventDefault();

    document.getElementById('com-add').innerText = ""

    const form = document.getElementById('Add-Company-Name')

    const form_data = new FormData(form)

    const Com_obj = {
        company_name: form_data.get('com-name'),
        slug: ""
    }

    fetch('http://127.0.0.1:8000/companys/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Com_obj)
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('com-add').innerText = `Successfully! Company Name '${data.company_name}' Added!`
        })

    document.getElementById('com-name').value = ""
}




const ld_company = () => {

    document.getElementById('length-of-com').innerText=""


    // const parent = document.getElementById('com-t-body')

    fetch('http://127.0.0.1:8000/companys/')
        .then((res) => res.json())
        .then((dta) => {

            document.getElementById('length-of-com').innerText=`Total (${dta.length}) Company`,
            console.log(dta.length),
            Edit_delete_view_com(dta)
        })

}

ld_company()



const Edit_delete_view_com = (allcom) => {


    


    allcom.forEach(element => {

        const parent = document.getElementById('com-t-body')

        const tr = document.createElement('tr')

        tr.innerHTML = `
        
            <th scope="row">${element.company_name}</th>
            <td><a href="edit_com_name.html?edit_com_id=${element.id}"><i class="fa-solid fa-pen-to-square"></i></a></td>
            <td  onclick="delete_company(${element.id})"><i class="fa-solid fa-trash"></i></td>
        
        `

        parent.appendChild(tr)

    });

}

const delete_company = (id) => {
    console.log("Delete Function")
    console.log(id)

    document.getElementById('delete_done').innerTex = ""



    fetch(`http://127.0.0.1:8000/companys/${id}/`, {
        method: 'DELETE'
    })
        .then(res => res.text()) // or res.json()
        .then(res => {

            document.getElementById('delete_done').innerText = `Successfully! Deleted!`
        })
}



const edit_company_name = (id) => {


    fetch(`http://127.0.0.1:8000/companys/${id}/`)
        .then((res) => res.json())
        .then((data) => final_edit(id, data))




    // fetch(`http://127.0.0.1:8000/companys/${id}/`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body:JSON.stringify()
    // })

}

const final_edit = (id, data) => {


    fetch(`http://127.0.0.1:8000/companys/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            company_name: "user"
        })
    })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))

}

