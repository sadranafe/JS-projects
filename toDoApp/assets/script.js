const input = document.querySelector(".task-input");
const list_el = document.querySelector(".tasks");
const addTaskBtn = document.querySelector(".task-btn");

localStorageNotes()

addTaskBtn.addEventListener("click", () => {
    const task = input.value;

    if (!task) {
        alert("Please fill out the task!")
    } else {
        let notes = localStorage.getItem('notes');
        let notesObj = [];
        if (notes == null) {
            noteObj = []
        } else {
            notesObj = JSON.parse(notes)
        }

        notesObj.push(input.value)
        localStorage.setItem('notes', JSON.stringify(notesObj))

        /////👆 Set localStorage 👆 /////

        let notesElm = document.querySelector(".tasks");

        if (notesObj.length != 0) {
            if (notesElm.textContent === "Nothing to show ! Create your first Note 😀.") {
                notesElm.textContent = ""
            }

            const task_el = document.createElement("div");
            task_el.classList.add("task")

            const taskContent_el = document.createElement("div");
            taskContent_el.classList.add("content")

            task_el.appendChild(taskContent_el)

            const taskInput_el = document.createElement("input");
            taskInput_el.classList.add("text", "taskInputCustom")
            taskInput_el.type = "text"
            taskInput_el.value = task
            taskInput_el.setAttribute("readonly", "readonly")
            taskInput_el.setAttribute("value", taskInput_el.value)

            taskContent_el.appendChild(taskInput_el)

            const taskActions_el = document.createElement("div");
            taskActions_el.classList.add("actions")

            const taskEdit_el = document.createElement("button");
            taskEdit_el.classList.add("edit")
            taskEdit_el.innerHTML = "Edit"

            const taskDelete_el = document.createElement("button");
            taskDelete_el.classList.add("delete")
            taskDelete_el.innerHTML = "Delete"

            taskActions_el.appendChild(taskEdit_el)

            taskActions_el.appendChild(taskDelete_el)

            task_el.appendChild(taskActions_el)

            list_el.appendChild(task_el)

            
            
            let countChild = list_el.childElementCount - 1

            taskEdit_el.addEventListener("click", () => {
                if (taskEdit_el.innerText.toLowerCase() == "edit") {
                    taskInput_el.removeAttribute("readonly")
                    taskInput_el.focus()
                    taskEdit_el.innerHTML = "Save"
                } else {
                    taskInput_el.setAttribute("readonly", "readonly")
                    taskEdit_el.innerText = "Edit"

                    let notes = localStorage.getItem("notes");
                    if (notes == null) {
                        notesObj = [];
                    } else {
                        notesObj = JSON.parse(notes);
                    }
                    console.log(countChild);
                    notesObj.splice(countChild, 1, taskInput_el.value)
                    localStorage.setItem("notes", JSON.stringify(notesObj));
                }
            });

            taskDelete_el.addEventListener("click", () => {
                if (confirm("Are you sure ?") == true) {
                    task_el.remove()

                    let notes = localStorage.getItem("notes");
                    if (notes == null) {
                        notesObj = [];
                    } else {
                        notesObj = JSON.parse(notes);
                    }

                    notesObj.splice(countChild, 1)
                    localStorage.setItem("notes", JSON.stringify(notesObj));
                    localStorageNotes()
                };
            });
        };
    };
    input.value = ""
});

/////👇 Read From LocalStorage 👇/////

function localStorageNotes() {
    let notes = localStorage.getItem("notes")
    let notesObj = []
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }

    let html = "";
    notesObj.forEach(function (ele, index) {
        html += `
            <div class="task" data-counter="${index}">
                <div class="content">
                    <input type="text" class="text taskInputCustom" value="${ele}" readonly>
                </div>
                <div class="actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `
    });
    let notesElm = document.querySelector(".tasks")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    }
    else {
        notesElm.innerHTML = `Nothing to show ! Create your first Note 😀.`
        notesElm.style.fontSize = '20px'
    }

    const taskEdit_el = document.querySelectorAll(".edit");
    const taskInput_el = document.querySelectorAll(".text");

    for (let i = 0; i < taskEdit_el.length; i++) {
        taskEdit_el[i].addEventListener("click", () => {

            if (taskEdit_el[i].innerText.toLowerCase() == "edit") {
                taskInput_el[i].removeAttribute("readonly")
                taskInput_el[i].focus()
                taskEdit_el[i].innerHTML = "Save"
            } else {
                taskInput_el[i].setAttribute("readonly", "readonly")
                taskEdit_el[i].innerText = "Edit"

                let dataCounter = task_el[i].getAttribute("data-counter")
                let notes = localStorage.getItem("notes");

                if (notes == null) {
                    notesObj = [];
                } else {
                    notesObj = JSON.parse(notes);
                }

                notesObj.splice(dataCounter, 1, taskInput_el[i].value)
                localStorage.setItem("notes", JSON.stringify(notesObj));

                localStorageNotes()
            }
        });

        const taskDelete_el = document.querySelectorAll(".delete")
        const task_el = document.querySelectorAll(".task")
        let dataCounter = task_el[i].getAttribute("data-counter")

        taskDelete_el[i].addEventListener("click", () => {
            if (confirm("Are you sure ?") == true) {
                task_el[i].remove()
                let notes = localStorage.getItem("notes");
                if (notes == null) {
                    notesObj = [];
                } else {
                    notesObj = JSON.parse(notes);
                }

                notesObj.splice(dataCounter, 1)
                localStorage.setItem("notes", JSON.stringify(notesObj));
                localStorageNotes()
            };
        });
    };
};
