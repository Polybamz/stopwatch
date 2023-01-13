const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');
const hs = document.querySelector('.h');
const mns = document.querySelector('.m');
const scs = document.querySelector('.s')

let seconds = 0;
let interval = null;
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',ss);
// //function timer(){
//     seconds++;
//     // Format our time
//      hours = Math.floor(seconds / 3600);
//      minutes = Math.floor((seconds - (hrs * 3600))/ 60);
//      seconds = seconds % 60;

//     if(seconds < 10) seconds = '0' + seconds;
//     if(minutes < 10) minutes = '0' + minutes;
//     if(hours < 10) hours = '0' + hours;

//     hrs.innerHTML = hours
// //}
// // let hours=7
// // hrs.innerHTML = hours



function timer(){
   seconds++;
    
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600))/ 60);
    let secs = seconds % 60;

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;
    hs.innerHTML = hrs;
    mns.innerHTML = mins;
    scs.innerHTML = secs;
    
}
function start(){
     if(interval) {
        return
     }
     interval = setInterval(timer,1000 )
}
function stop(){
    clearInterval(interval);
    interval = null;  
}


// document.getElementById('start').addEventListener('click', function (e){
//     e.preventDefault();
 
//         startTimer()
    
        
//     let hrs = Math.floor(seconds / 3600);
//     let mins = Math.floor((seconds - (hrs * 3600))/ 60);
//     let secs = seconds % 60;

//     if(secs < 10) secs = '0' + secs;
//     if(mins < 10) mins = '0' + mins;
//     if(hrs < 10) hrs = '0' + hrs;
//     hs.innerHTML = hrs;
//     mns.innerHTML = mins;
//     scs.innerHTML = secs;
//     _

// });
function reset(){
    
    stop();
    seconds = 0;
   hs.innerHTML = '00';
   mns.innerHTML = '00';
    scs.innerHTML = '00';     
    
}