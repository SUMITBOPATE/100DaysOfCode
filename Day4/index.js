// // app.js
// document.addEventListener('DOMContentLoaded', function() {
//     const upvoteButtons = document.querySelectorAll('.upvote');
//     const downvoteButtons = document.querySelectorAll('.downvote');
//     const voteCounts = document.querySelectorAll('.vote-count');
// let upvoteCount=document.querySelectorAll(".upvoteCount");

//     upvoteButtons.forEach((button, index) => {
//         button.addEventListener('click', function() {
//             let currentCount = parseInt(voteCounts[index].innerText);
//             voteCounts[index].innerText = currentCount + 1;
//             // console.log(currentCount)
//             upvoteCount.textContent="currentCount";
//         });
//     });

//     downvoteButtons.forEach((button, index) => {
//         button.addEventListener('click', function() {
//             let currentCount = parseInt(voteCounts[index].innerText);
//             voteCounts[index].innerText = currentCount - 1;
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const upvoteButtons = document.querySelectorAll('.upvote');
    const downvoteButtons = document.querySelectorAll('.downvote');
    const upvoteCounts = document.querySelectorAll('.upvote-count');
    const downvoteCounts = document.querySelectorAll('.downvote-count');

    upvoteButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let currentUpvoteCount = parseInt(upvoteCounts[index].innerText);
            upvoteCounts[index].innerText = currentUpvoteCount + 1;
        });
    });

    downvoteButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let currentDownvoteCount = parseInt(downvoteCounts[index].innerText);
            downvoteCounts[index].innerText = currentDownvoteCount + 1;
        });
    });
});