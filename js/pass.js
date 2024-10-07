

const handlePass = (event) => {
    event.preventDefault();

    document.getElementById('error-pass').innerText = ""
    document.getElementById('update-pass').innerText=""

    const form = document.getElementById('password-form')

    const form_data = new FormData(form)
    console.log(form_data)

    const token = localStorage.getItem('Token')

    const pass_obj = {
        new_password: form_data.get('pass1'),
        confirm_password: form_data.get('pass2')
    }

    if (pass_obj.new_password != pass_obj.confirm_password) {

        document.getElementById('error-pass').innerText = "Password Doesn't Match"
    }
    else {
        fetch('http://127.0.0.1:8000/passwordChange/', {
            method: "PUT",
            headers: { "Content-Type": "application/json",
                Authorization: `Token ${token}`
            },
            body: JSON.stringify(pass_obj)
        })
        document.getElementById('update-pass').innerText="Password Updated"
    }

    document.getElementById('pass1').innerText=""
    document.getElementById('pass2').innerText=""

}