

/////////////////////////////////////////////////////////////////////////////////////////////

const edit_b_input = (id) => {


    const input_field = document.getElementById('edit-b-name')

    fetch(`http://127.0.0.1:8000/BrowseCetagory/${id}/`)
        .then((res) => res.json())
        .then((dta) => {

            input_field.value = dta.name
            // console.log(dta)
        })

}


const post_edit_b = (event) => {

    event.preventDefault();



    const edit_param_post = new URLSearchParams(window.location.search).get('edit_id')

    console.log(edit_param_post)

    // const form = new FormData('Edit_form_b')

    // console.log(form)

    const value = document.getElementById('edit-b-name').value
    console.log(value)

    const edit_b_obj = {

        name: value,
        slug: ""
    }

    console.log(edit_b_obj)

    fetch(`http://127.0.0.1:8000/BrowseCetagory/${edit_param_post}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(edit_b_obj)
    })
        .then((res) => {

            document.getElementById('edit-b-text').innerText = `Browse Cetagory name ${edit_b_obj.name} Updated!`,
                document.getElementById('edit-b-name').value = ""

        })



}



const initial_valu_B = () => {

    const edit_param = new URLSearchParams(window.location.search).get('edit_id')

    edit_b_input(edit_param)

}

initial_valu_B()
////////////////////////////////////////////////////////////////////////////////////////

const initial_company_name = (id) => {

    const field_value = document.getElementById('edit-com-name')

    fetch(`http://127.0.0.1:8000/companys/${id}/`)
        .then((res) => res.json())
        .then((data) => {

            field_value.value = data.company_name
        })



}


const edit_com_post = (event) => {

    event.preventDefault();

    const input_value = document.getElementById('edit-com-name').value

    const id = new URLSearchParams(window.location.search).get('edit_com_id')

    const com_obj = {

        company_name: input_value,
        slug: ""
    }

    fetch(`http://127.0.0.1:8000/companys/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(com_obj)
    })
        .then((Res) => {
            document.getElementById('edit-com-text').innerText = `Successfully company name ${com_obj.company_name} updated!`,
                document.getElementById('edit-com-name').value = ""
        })
}


const get_params_com = () => {

    const com_param = new URLSearchParams(window.location.search).get('edit_com_id')
    initial_company_name(com_param)
}

get_params_com()

//////////////////////////////////////////////////////////////////////////////////////


const initial_value_loc = (id) => {

    const loc_value = document.getElementById('edit-loc-name')

    fetch(`http://127.0.0.1:8000/place/${id}/`)
        .then((res) => res.json())
        .then((dta) => {

            loc_value.value = dta.name

        })

}


const location_edit_post = (event) => {

    event.preventDefault();

    const id = new URLSearchParams(window.location.search).get("loc_id")

    const input_value = document.getElementById('edit-loc-name').value

    const loc_obj = {
        name: input_value,
        slug: ""
    }

    fetch(`http://127.0.0.1:8000/place/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loc_obj)
    })
        .then((rs) => {

            document.getElementById('edit-l-text').innerText = `Successfully company name ${loc_obj.name} updated!`,
                document.getElementById('edit-loc-name').value = ""

        })


}


const get_param_loc = () => {

    const loc_id = new URLSearchParams(window.location.search).get('loc_id')
    initial_value_loc(loc_id)
}

get_param_loc()