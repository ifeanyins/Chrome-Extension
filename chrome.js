







const ulEl = document.querySelector('#ul-el')


let myLeads = ['www.nswater', 'www.nsrice', 'www.nsestate'];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', let  =()=> {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


for (let i = 0; i < myLeads.length; i++){
   ulEl.textContent += myLeads[i] + ' '
}






document.title = "Chrome Extension"








