let task = JSON.parse(localStorage.getItem('input')) || [];
let buton = document.getElementById("buton");
let inputp = document.getElementById("input");
let container = document.getElementById("container");
let list = document.getElementById("list");
function render() {
    list.innerHTML = "";
    task.forEach(function (taskobject) {
        let taskHTML = `
       <div class="task-item"> 
       <input type="checkbox" class="ceckbox" data-id="${taskobject.id}" ${taskobject.done ? "checked" : ""}>
       <span>${taskobject.text}</span>
       <button class="delete" data-id="${taskobject.id}">
       <img src="dustbinnn.png" alt="deleteimg" id="delet">
       </button>
       </div>
       `;
        list.innerHTML += taskHTML;
    });

}
buton.addEventListener("click", function () {
    let addtask = inputp.value
    if (addtask.trim() === "") return;
    taskobject = {
        id: Date.now().toString(),
        text: addtask,
        done: false,

    }
    task.push(taskobject);
    localStorage.setItem('input', JSON.stringify(task));
    render();
    inputp.value = "";
    //  
})
container.addEventListener("click", function (e) {
    let deletebtn = e.target.closest(".delete");
    if (deletebtn) {
        let id = deletebtn.dataset.id;
         task = task.filter(t => t.id !== id);
        localStorage.setItem('input', JSON.stringify(task));
        render();
    }
    // console.log(e.target);
    // if (e.target.classList.contains("delete")) {
    //     const taskId = e.target.getAttribute("data-id");
       
    // }
    if (e.target.classList.contains("checkbox")) {
        const taskId = e.target.getAttribute("data-id");
        task = task.map(task => {
            if (task.id === taskId) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        localStorage.setItem('input', JSON.stringify(task));
        render();
    }
})
render();