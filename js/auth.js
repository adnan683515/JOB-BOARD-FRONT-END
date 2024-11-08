
const contact_for_function = (event) => {

    event.preventDefault();


    const ContactForm = document.getElementById('contact-form')
    console.log(ContactForm)

    const formData = new FormData(ContactForm)

    console.log(formData)


    // document.getElementById('username').innerText=" "
    // document.getElementById('eamil').innerText = " "
    // document.getElementById('msg').innerText=" "

    const user_id = localStorage.getItem('user_id')

    const Contact_Obj = {
        user: user_id,
        phone: formData.get('phone'),
        email: formData.get('email'),
        Your_message: formData.get('msg')
    };



    const token = localStorage.getItem('Token')



    fetch('http://127.0.0.1:8000/contact/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        },
        body: JSON.stringify(Contact_Obj)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))



    document.getElementById('phone').value = ""
    document.getElementById('email').value = ""
    document.getElementById('msg').value = ""

}




const handleRegistration = (event) => {
    event.preventDefault();





    const form = document.getElementById('registration-form-2')

    const formData = new FormData(form)


    const register_obj = {
        username: formData.get('username'),
        first_name: formData.get('firstname'),
        last_name: formData.get('lastname'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirm_password: formData.get('inputPassword4'),
        country: formData.get('country')
    }


    if (register_obj.password == register_obj.confirm_password) {

        document.getElementById('error').innerText = ''



        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|-]).{8,}$/.test(register_obj.password)) {


            fetch('http://127.0.0.1:8000/register/', {
                method: "POST",
                headers: { "Content-type": 'application/json' },
                body: JSON.stringify(register_obj)
            })
                .then((res) => res.json())
                .then((data) => {
                    document.getElementById('email_text').innerText = 'Check Your Email!'

                })

        }
        else {
            document.getElementById('validation').innerText = "password must be lowercase letters, uppercase letters, and special characters, and it ensures that the total length is at least 8 characters"
        }


    }
    else {
        document.getElementById('error').innerText = 'Password and Confirm Password not Match'
        alert('Password and Confirm Password not Match')
    }





    document.getElementById('username').value = ""
    document.getElementById('firstname').value = ""
    document.getElementById('lastname').value = ""
    document.getElementById('password').value = ""
    document.getElementById('inputPassword4').value = ""
    document.getElementById('email').value = ""
    document.getElementById('country').value = ""

};






const handlelogin = (event) => {
    event.preventDefault()



    document.getElementById('user-not').innerText = ""

    const form = document.getElementById('login-form')


    const formDATA = new FormData(form)
    console.log(formDATA)




    const lagin_Obj = {

        username: formDATA.get('username'),
        password: formDATA.get('password')
    }

    document.getElementById('username').value = ""
    document.getElementById('password').value = ""

    fetch('http://127.0.0.1:8000/login/', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(lagin_Obj)
    })
        .then((res) => {
            if (!res.ok) {
                console.log('response not ok')
                throw new Error("User not valid");
            }
            else {
                console.log("Response Ok")
                return res.json();
            }
        })
        .then((data) => {
            console.log("Data:", data);
            console.log("Token:", data.token);
            console.log("Staff", data.is_staff)



        
            
            


            localStorage.setItem('Token', data.token);
            localStorage.setItem('user_id', data.user_id);


            fetch(`http://127.0.0.1:8000/user/${data.user_id}/`)
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('Admin',data.is_staff)
                console.log(data.is_staff)
                console.log(localStorage.getItem('Admin'))
            })


            // window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById('user-not').innerText = "username or password not valid"
            alert("Login failed. Please check your credentials and try again.");
        });








}




