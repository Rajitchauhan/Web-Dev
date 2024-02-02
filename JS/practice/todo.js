let data = [
    {name : 'Shiva' , age : 'inf'}
];

function getData(){
    // console.log('hey i am working');
    let name = document.querySelector('#name');
    let nameVal = name.value;
    let age = document.querySelector('#age');
    let ageVal = age.value; 

    data.push({name : nameVal , age : ageVal});
    name.value = '';
    age.value = '';
    show(data);
}

let show = (data) => {
    // let showData = document.querySelector('#show-todo');

    let newHtml = ` `;
    let tTable = document.querySelector('#t-body');
    data.forEach(ele => {
        newHtml += `
        <tr class="">
        <td scope="row">${ele.name}</td>
        <td>${ele.age}</td>
        </tr>
        `;
    });
    tTable.innerHTML = newHtml
    
}