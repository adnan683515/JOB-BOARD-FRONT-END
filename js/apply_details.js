

const Get_params = () => {

    const apply_params = new URLSearchParams(window.location.search).get('apply_details')

    console.log(apply_params)


}
Get_params()