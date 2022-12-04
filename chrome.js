let myLeads = [];
let oldleads = [];
const ulEl = document.querySelector('#ul-el')
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.getElementById('tab-btn')

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render (leads){
    let listItems = '';
    for (let i = 0; i < leads.length; i++){
       listItems += `
       <li>
         <a target='_blank' href ='${leads[i]}'>
             ${leads[i]}
         </a>
       </li>
       `
        // const li = document.createElement('li')
        // li.textContent = myLeads[i] + listItems;
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active:true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify (myLeads))
        render(myLeads)
    }) 
})

deleteBtn.addEventListener ('dblclick', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', let  =()=> {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})








document.title = "Chrome Extension"
