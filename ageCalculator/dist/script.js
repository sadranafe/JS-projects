// Powered By Mohammad Sadra Nafe
const yearEle = document.querySelector(".year")
const monthEle = document.querySelector(".month")
const dayEle = document.querySelector(".day")   

const formSubmitter = document.querySelector("input[type='submit']");
let datePicker = document.querySelector("input[type='date']");
let inputPicker;
let birthYear , birthMonth , birthDate;

formSubmitter.addEventListener("click" , ev => {
    ev.preventDefault();
    if(datePicker.value == ""){
        return;
    }
    else{
        ageCalculate();
    }
});

function ageCalculate(){
    // we define this function one time, then we use it n times.
    let today = new Date()
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1 ;
    const currentYear = today.getFullYear();
    // ☝☝☝☝this part return the current date☝☝☝☝

    // 👇👇👇👇this part return the birth date👇👇👇👇
    let birth = new Date(datePicker.value);
    let birthDetails = {
        date : birth.getDate(),
        month : birth.getMonth() + 1,
        year : birth.getFullYear()
    };

    if( (birthDetails.year > currentYear) || (birthDetails.month > currentMonth && birthDetails.year === currentYear) || (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)){
        alert("Not Born Yet , Please try again !");
        displayAge("-" , "-" , "-");
    } else if(birthDetails.year === currentYear && birthDetails.month === currentMonth && birthDetails.date === currentDate){
        displayAge(currentDate - birthDetails.date , currentMonth - birthDetails.month , currentYear - birthDetails.year);
    } else{
        birthYear = currentYear - birthDetails.year;

        if(currentMonth > birthDetails.month){
            birthMonth = currentMonth - birthDetails.month;
        } else{
            birthYear--;
            if(currentMonth - birthDetails.month == 0 && birthYear <= 0){
                birthMonth = currentMonth - birthDetails.month;
                birthYear = 0;
            } else{
                birthMonth = 12 + currentMonth - birthDetails.month;
            }
        }

        if(currentDate > birthDetails.date){
            birthDate = currentDate - birthDetails.date;
        } else{
            birthMonth--;
            if(birthMonth <= 0){
                birthMonth = 1;
            };

            let days = currentMonth - 2;
            birthDate = days + currentDate - birthDetails.date;
        }
        displayAge(birthDate , birthMonth , birthYear);
    }
};

function displayAge(bDate , bMonth , bYear){
    yearEle.innerHTML = bYear;
    monthEle.innerHTML = bMonth;
    dayEle.innerHTML = bDate;
};

// datePicker.addEventListener("click" , (ev) =>{
//     if(datePicker.value == "" || datePicker.value == " "){
//         return;
//     } else{
//         inputPicker = datePicker.value
//         console.log(inputPicker)
//     }
// })


// formSubmitter.addEventListener("click" , ev =>{
//     ev.preventDefault();
//     datePicker = document.querySelector("input[type='date']");
//     ageCalculate()
// });

// const months = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31]
// function ageCalculate(){
//     let today = new Date();
//     let inputDate = new Date(datePicker.value);
//     let birthMonth , birthDate , birthYear;
//     let birthDetails = {
//         date : inputDate.getDate(),
//         month : inputDate.getMonth(),
//         year : inputDate.getFullYear()
//     };

//     let currentYear = today.getFullYear();
//     let currentMonth = today.getMonth() + 1;
//     let currentDate = today.getDate();

//     // leapChecker(currentYear);

//     if(birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear){
//         alert("Not Born Yet");
//         displayResult( "-" , "-" , "-" );
//     };
//     birthYear = currentYear - birthDetails.year;

//     if(currentMonth > birthDetails.month){
//         birthMonth = currentMonth - birthDetails.month;
//     } else{
//         birthYear--;
//         birthMonth = 12 + currentMonth - birthDetails.month;
//     }

//     if(currentDate > birthDetails.date){
//         birthDate = currentDate - birthDetails.date;
//     } else{
//         birthMonth--;
//         let days = months[currentMonth - 2];
//         birthDate = days + currentDate - birthDetails.date;
//         if(birthMonth < 0){
//             birthMonth = 11;
//             birthYear--;
//         }
//     }
//     displayResult(birthDate , birthMonth , birthYear)
// }

// function displayResult(bDate , bMonth , bYear){
//     yearEle.innerHTML = bYear;
//     monthEle.innerHTML = bMonth;
//     dayEle.innerHTML = bDate;
// }

// function leapChecker(year){
//     if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
//         months[1] = 29;
//     } else{
//         months[1] = 28;
//     }
// }

