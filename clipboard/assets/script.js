const boxesColor = document.querySelectorAll("div");
const audio = document.querySelector("audio");
const modalBox = document.querySelector('.modalBox');
const p_modal = document.querySelector(".des-modal");
const h1 = document.querySelector("h1");
const volume = document.querySelector(".volume")
let arr = ["Right One !" , "Will Do" , "Paste me" , "Got it" , "I'll Rock" , "Copied"];

for (let i = 0; i < boxesColor.length; i++) {
    boxesColor[i].addEventListener("click", (ev) => {
        const colorCode = ev.target.getAttribute("data-colorCode");
        const randomTxtNum = (Math.floor(Math.random()*6));
        
        modalBox.classList.remove('hidden');
        modalBox.style.backgroundColor =  colorCode;
        h1.innerHTML = arr[randomTxtNum];
        p_modal.innerHTML = colorCode;
        h1.style.color = "#000";
        p_modal.style.color = "#000";
        
        if (colorCode == '#34495e' || colorCode == '#2c3e50'){
            h1.style.color = "#fff";
            p_modal.style.color = "#fff";
        }
        
        navigator.clipboard.writeText(colorCode).then(() => {
            audio.play();
            setTimeout(() => {
                modalBox.classList.add("hidden");
            }, 700);
        })
    })
}

volume.addEventListener("click" , () => {
    for(let i = 0 ; i < volume.classList.length ; i++){
        if(volume.classList[i] == "fa-volume-high"){

            volume.classList.toggle("fa-volume-xmark");
            audio.muted = false;
            
            if(volume.classList[5] == "fa-volume-xmark"){
                audio.muted = true;

                Toastify({
                    text : "Volume is muted",
                    close : true,
                    style : {
                        background : "linear-gradient(to right, #d6d31f, #ed9358)"
                    },
                    stopOnFocus: true,
                    offset: {
                        x: 20
                    }
                }).showToast();
            };
        };
    };
});