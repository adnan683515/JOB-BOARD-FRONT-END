const handlelogout=()=>{

    const token = localStorage.getItem('Token')

    console.log("log out")

    fetch('http://127.0.0.1:8000/logout/',{
        method:"POST",
        headers:{
            Authorization:`Token ${token}`,
            "Content-type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((data) =>{
        console.log(data);
        localStorage.removeItem('Token');
        localStorage.removeItem('user_id');
        localStorage.removeItem("Admin")
        window.location.href = 'index.html';
    })


}