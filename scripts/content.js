// pop up to query the reason for visiting the page
const reason = prompt('Why are you visiting this page?');
console.log(reason)

// reason cannot be empty ask again if empty
if (reason === null || reason === '') {
  alert('Please enter a reason');
  window.location.reload();
}

// add css to the head of the page
const style = document.createElement('style');
style.innerHTML = `
  .banner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    color: #000000;
    text-align: center;
    z-index: 9999;
  }
`;
document.head.appendChild(style);

// create banner using custom HTML div that shows time spent on page and reason
const banner = document.createElement('div');
// set custom html
// banner.innerHTML = `
//   <div class="banner">
//     <p>Reason: ${reason}</p>
//   </div>
// `

banner.classList.add('banner');
document.body.appendChild(banner);

// keep track of the time
let startTime;

function startTimer() {
  startTime = Date.now();
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  // display elapsed in 0h 0m 0s format
  const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(elapsedTimeInSeconds / 3600);
  const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
  const seconds = Math.floor(elapsedTimeInSeconds % 60);
  banner.innerHTML = `Reason: ${reason}; Time: ${hours}h ${minutes}m ${seconds}s`;
}

startTimer();
setInterval(updateTimer, 1000);
