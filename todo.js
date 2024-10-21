taskList= JSON.parse(localStorage.getItem("tasks"))||[];
displayItems()
function addTask(){
    let taskVal = document.querySelector("#taskInput").value;
    let dateVal = document.querySelector("#dateInput").value;
    if(taskVal!="" && dateVal!=""){
        taskList.push({task : taskVal, date : dateVal});
        localStorage.setItem("tasks", JSON.stringify(taskList));
        document.querySelector("#taskInput").value="";
        document.querySelector("#dateInput").value="";
    }
    displayItems();
}
function deleteAll(){
    if(taskList.length!=0){
        taskList=[]
        localStorage.setItem("tasks", JSON.stringify(taskList));
        displayItems()
    }
}
function deleteItems(i){
    taskList.splice(i,1)
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayItems();
}
function displayItems(){
    let toDoItems=document.querySelector(".toDoitems");
    let newHtml="";
    toDoItems.innerText="";
    for(let i=0;i<taskList.length;i++){
        newHtml += `
        <span>${taskList[i].task}</span>
        <span>${taskList[i].date}</span>
        <button class="delete-btn" onClick="deleteItems(${i})">Delete</button>
        `;
    }
    toDoItems.innerHTML = newHtml;
}