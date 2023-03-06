const startButton = document.querySelector('#start-button');
const navBar = document.querySelector('.nav-bar');
const computerScreen = document.querySelector('.computer-screen');
const bottomBar = document.querySelector('#bottom-bar');

window.addEventListener('load', () => {
    navBar.style.display = 'none';
})

startButton.addEventListener('click', () => {
    if(navBar.style.display === 'none') {
        startButton.classList.add('active');
        navBar.style.display = 'block';
    } else {
        startButton.classList.remove('active');
        navBar.style.display = 'none';
    }
})


//function to show realtime for div clock id
function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = hours >= 12 ? 'PM' : 'AM'; // determine the AM/PM period
  
    // convert from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be treated as '12'
  
    var time = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + period;
  
    document.getElementById('clock').textContent = time;
}

setInterval(displayTime, 1000); // update every second








//email idea: group emails by senders....take all emails by specifc senders and group them. Have the groups go up chronlogically when a new email is sent into that group
//have a dropdown of emails when clicking on that group


//another idea for my portfolio: have the navigation bar at the top be different versions of the Windows screen