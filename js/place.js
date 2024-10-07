
const show_loc_list = () => {


    fetch('http://127.0.0.1:8000/place/')
        .then((res) => res.json())
        .then((data) => view_list(data))
}

show_loc_list()

const view_list = (all_data) => {

    document.getElementById('add_loc_done').innerText = `Total ${all_data.length} Place Add`



    all_data.forEach(element => {



        const parent = document.getElementById('loc-t-body')

        const tr = document.createElement('tr')
        tr.innerHTML = `

        <th scope="row">${element.name}</th>
            <td ><a href="edit_location.html?loc_id=${element.id}"><i class="fa-solid fa-pen-to-square"></i></a></td>
            <td onclick= delete_pace('${element.id}')><i class="fa-solid fa-trash"></i></td>
        
        
        `
        parent.appendChild(tr)
    });
}


const delete_pace = (id) => {

    document.getElementById('delete_done_place').innerText=""

    fetch(`http://127.0.0.1:8000/place/${id}/`,
        {
            method: "DELETE"
        }
    )
        .then(res => res.text())
        .then(res => {

            document.getElementById('delete_done_place').innerText = `Successfully! Deleted!`
        })



}


const handlPlace = (event) => {
    event.preventDefault();


    document.getElementById('p-add').innerText = ""
    const form = document.getElementById('Add-Place-form')

    const form_data = new FormData(form)

    const Place_obj = {
        name: form_data.get('p-name'),
        slug: ""
    }


    console.log(Place_obj)

    fetch('http://127.0.0.1:8000/place/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Place_obj)
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('p-add').innerText = `Successfully ${data.name} Place Name Added!`
        })

    document.getElementById('p-name').value = ""

}



