

const all_apply_list_for_view_user=()=>{

    fetch('http://127.0.0.1:8000/applylist/')
    .then((res) => res.json())
    .then((dta) => display_for_viewer(dta))
}

all_apply_list_for_view_user()

const display_for_viewer=(alldata)=>{

    alldata.forEach(element => {
        
        const parent = document.getElementById('viewer-apply-list')

        const tr = document.createElement('tr')

        tr.innerHTML = `
        
                        <th scope="row">img</th>
                        <td>${element.company}</td>
                        <td>${element.title}</td>
                        <td>${element.education}</td>
                        <td>${element.status}</td>
        
        
        `

        parent.appendChild(tr)
    });
}