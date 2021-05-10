export function timer (timedLength, timerStartTime) {
// given a start timer and timerStartTime
    // given a start time
    
    // given a the currentTime
    const currentTime = new Date(Date.now());

    // when I calculate the difference

    // calculate the span of seconds since the timer began
    let timeSpan = Math.floor((currentTime - timerStartTime) / 1000);

    // then I return time left until timer ends
    return timeSpan;
}
/*
const timerCurrentTime = new Date(Date.now());
        const initalTime = new Date('May 9, 2021 17:29');


        let timeShiftAmount = 60000;
        // timer end time 
        let endTime = initalTime + timeShiftAmount

        let timeSince = (timerCurrentTime - initalTime);
        console.log('Time since initial time ' + Math.floor(timeSince / 1000));
  
*/


setTimeout((start, setSeconds) => {
    const milliSeconds = Date.now() - start;
  
    return Math.floor(milliSeconds / 1000)
  }, 1000);