let myLeads = [];
const ulEl = document.querySelector('#ul-el')
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener('click', let  =()=> {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads (){

    let listItems = '';
    for (let i = 0; i < myLeads.length; i++){
       listItems += `
       <li>
         <a target='_blank' href ='${myLeads[i]}'>
            ${myLeads[i]}
          </a>
       </li>
       `
        // const li = document.createElement('li')
        // li.textContent = myLeads[i] + listItems;
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}






document.title = "Chrome Extension"


