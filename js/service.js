
const load_leaders=()=>{
    fetch('http://127.0.0.1:8000/Ourleaders/')
    .then((res) => res.json())
    .then((data) =>display_leaders(data))
}


load_leaders()


const display_leaders=(alldata)=>{
    
    // console.log(alldata)
    console.log(alldata)

    alldata.forEach(element => {
        const parent = document.getElementById('ourleader')

        const div = document.createElement('div')
        div.classList.add('single-leader')
        div.className='col-lg-3 col-md-4 col-sm-12 ml-1 mt-1';
    
    
        div.innerHTML = `
        <div class="card align-items-center p-1 shadow" style="width: 18rem;">
                        <img class="card-img-top circle-img" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text"><b>Name:</b> ${element.name}</p>
                            <p class="card-text"><b>Title:</b> ${element.title}</p>
                            <p class="card-text"><b>Description:</b> ${element.descriptions.slice(0,40)}</p>
                        </div>
                    </div>
        
        
        
        `
        parent.appendChild(div)
    });
}