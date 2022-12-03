







const ulEl = document.querySelector('#ul-el')


let myLeads = [];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', let  =()=> {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ''
    renderLeads()
})


let renderLeads = ()=>{

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


