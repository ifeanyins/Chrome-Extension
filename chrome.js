







const ulEl = document.querySelector('#ul-el')


let myLeads = ['www.nswater', 'www.nsrice', 'www.nsestate'];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', let  =()=> {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
})


let renderLeads = ()=>{

    let listItems = '';
    for (let i = 0; i < myLeads.length; i++){
       listItems += "<li>" + myLeads[i] + ' </li>'
        // const li = document.createElement('li')
        // li.textContent = myLeads[i] + listItems;
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}






document.title = "Chrome Extension"


