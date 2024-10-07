

const handlBCetagory = (event) => {
    event.preventDefault();

    const form = document.getElementById('browse-cetagory')
    document.getElementById('b-name').innerText = ""
    document.getElementById('b-success').innerText=""

    const form_data = new FormData(form)

    const B_obj = {
        name: form_data.get('b-name'),
        slug: ""
    }


console.log(B_obj)



    fetch('http://127.0.0.1:8000/BrowseCetagory/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(B_obj)
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('b-success').innerText = `Successfully Browse Cetagory ${data.name} added!`
        })

    document.getElementById('b-name').value = ""
}




const B_T_browseLoad = () => {

    fetch('http://127.0.0.1:8000/BrowseCetagory/')
        .then((res) => res.json())
        .then((data) => display_for_table(data))
}

B_T_browseLoad()

const display_for_table = (allList) => {

    document.getElementById('length-of-browse').innerText = `Total Job Title (${allList.length}) Add`
    allList.forEach(element => {


        const parent = document.getElementById('B_T_Body')

        const tr = document.createElement('tr')

        tr.innerHTML = `

            <th scope="row">${element.name}</th>
            <td ><a  href="edit_browse_cetagory.html?edit_id=${element.id}"><i class="fa-solid fa-pen-to-square edit-box"></i></a></td>
            <td onclick="delete_Browse(${element.id})"><i class="fa-solid fa-trash"></i></td>
        
    
    
    `

        parent.appendChild(tr)
    });
}



const delete_Browse = (id) => {



    document.getElementById('delete_done_browse').innerTex = ""



    fetch(`http://127.0.0.1:8000/BrowseCetagory/${id}/`, {
        method: 'DELETE'
    })
        .then(res => res.text()) // or res.json()
        .then(res => {

            document.getElementById('delete_done_browse').innerText = `Successfully! Deleted!`
        })
}
