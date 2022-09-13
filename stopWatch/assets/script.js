let time = document.querySelector(".time");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let lap = document.querySelector(".lap");
let reset = document.querySelector(".reset");
let hrs = 0;
let mins = 0;
let seconds = 0;
let t = false;
const laps = document.querySelector(".laps")

start.addEventListener("click" , timer)
stop.addEventListener("click" , stopTimer)
reset.addEventListener("click" , resetTimer)

function addTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        mins++;

        if (mins >= 60) {
            mins = 0;
            hrs++;
        }
    }
    time.innerHTML = (hrs ? (hrs <= 9 ? "0" + hrs : hrs) : "00") + " : " + (mins ? (mins <= 9 ? "0" + mins : mins) : "00") + " : " + (seconds ? (seconds <= 9 ? "0" + seconds : seconds) : "00");
}

        
function timer() {
    if(!t){
        t = setInterval(addTime, 1000);
    }
};

function stopTimer() {
    clearTimeout(t);
    t = false;
};       

function resetTimer() {
    clearTimeout(t);
    hrs = 0;
    mins = 0;
    seconds = 0;
    time.innerHTML = "00" + " : " + "00" + " : " + "00";
    t = false;
    laps.replaceChildren("");
};

lap.addEventListener("click", () => {
    let lapObj = [];
    
    const lap_wrapper = document.createElement("div");
    lap_wrapper.classList.add("lap-wrapper");

    const lap_content = document.createElement("div");
    lap_content.classList.add("content");

    lap_wrapper.appendChild(lap_content);

    const lap_value = document.createElement("p")
    lap_value.classList.add("lap-value")
    lap_value.innerHTML = time.innerHTML;

    lap_content.appendChild(lap_value)

    const lap_action = document.createElement("div")
    lap_action.classList.add("actions")

    const lap_delete = document.createElement("button")
    lap_delete.classList.add("delete")
    lap_delete.classList.add("fas")
    lap_delete.classList.add("fa-minus")

    lap_action.appendChild(lap_delete)
    lap_wrapper.appendChild(lap_action)
    laps.appendChild(lap_wrapper)

    const lap_wrapper_el = document.querySelectorAll(".lap-wrapper");
    lap_wrapper_el.forEach( ele => {
        ele.addEventListener("click" , () => {
            ele.remove();
        })
    });
});
