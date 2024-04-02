// /
// let amount = document.getElementsByClassName("item-name")[0]; // Assuming you want the first element
// let main_solution = document.getElementsByClassName("solution")[0]; // Assuming you want the first element
// let input = document.getElementsByClassName("main-solution")[0]; // Corrected method name and removed dot
// let user_value = document.getElementsByTagName("input");

// function totalAmount() {
//     console.log("applied");
//     let value = input.value;
//     let ans = 0;
//     // Assuming you want to multiply the value of the first element in the amount collection by value
//     ans = parseFloat(amount.textContent) * parseFloat(value);

//     main_solution.textContent = ans;
// }

// // // Corrected method name and added missing 'document' keyword
// document.getElementsByClassName("main-solution")[0].addEventListener('change', totalAmount);

// document.querySelectorAll('.note-input').forEach(input => {
//     input.addEventListener('change', function() {
//         const noteValue = parseInt(this.parentElement.previousElementSibling.textContent);
//         const inputValue = parseInt(this.value);
//         const total = noteValue * inputValue;
//         this.nextElementSibling.textContent = total;
//         console.log(total)
//     });
// });
// let totalAmount = 0;
let total_value=document.getElementsByClassName("main-totalcount")[0];
let totalAmount = 0;
document.querySelectorAll('.note-input').forEach(input => {
    input.value=0;
    input.addEventListener('change', function() {
        // Extract the note value directly from the text content of the parent div
        // let totalAmount = 0;

        // let total_value=document.getElementsByClassName("main-totalcount")
     
        const noteValue = parseInt(this.parentElement.parentElement.textContent.split(' ')[0]);
        const inputValue = parseInt(this.value);
        const total = noteValue * inputValue;
        // this.nextElementSibling.textContent = total;
        this.parentElement.nextElementSibling.textContent = total;
        totalAmount+=total;
        total_value.textContent=totalAmount;
// totalAmount.textContent=amountTotal;
    });
});
total_value.textContent=totalAmount;
// document.querySelectorAll('.note-input').forEach(input => {
//     input.addEventListener('change', function() {
//         // Initialize total amount
//         let totalAmount = 0;

//         // Iterate over each note input to calculate the total
        // document.querySelectorAll('.note-input').forEach(input => {
        //     // Extract the note value directly from the text content of the parent div
        //     const noteValue = parseInt(input.parentElement.parentElement.textContent.split(' ')[0]);
        //     console.log("Note Value:", noteValue);

        //     const inputValue = parseInt(input.value);
        //     // Calculate the total for this note
        //     const total = noteValue * inputValue;
        //     this.parentElement.nextElementSibling.textContent = total;
        //     // Add this total to the running total
        //     totalAmount += total;
        // });

//         // Update the .main-totalcount element with the final total amount
//         document.querySelector('.main-totalcount').textContent = totalAmount;
//     });
// });