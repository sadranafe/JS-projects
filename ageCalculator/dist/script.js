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
