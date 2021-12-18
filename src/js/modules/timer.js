/* eslint-disable no-use-before-define */
const timer = (
  containerClockSelector,
  timeout,
  daySelector,
  hoursSelector,
  minutesSelector,
  secondsSelector,
) => {
  function getTimerInfo(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const day = Math.floor((time / (1000 * 60 * 60 * 24)));
    const hour = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((time / (1000 * 60)) % 60);
    const second = Math.floor((time / (1000)) % 60);

    return {
      time,
      day,
      hour,
      minute,
      second,
    };
  }

  function setClock(deadline) {
    const container = document.querySelector(containerClockSelector);
    const day = container.querySelector(daySelector);
    const hour = container.querySelector(hoursSelector);
    const minute = container.querySelector(minutesSelector);
    const second = container.querySelector(secondsSelector);
    const upgradeTime = setInterval(upgradeClock, 1000);

    upgradeClock();

    function timeLessThanZero(mainClock, interval) {
      if (mainClock.time < 0) {
        day.textContent = '00';
        hour.textContent = '00';
        minute.textContent = '00';
        second.textContent = '00';

        clearInterval(interval);
      }
    }

    function addZeroBeforeNumber(partClock) {
      if (partClock < 10) {
        return `0${partClock}`;
      }
      return partClock;
    }

    function upgradeClock() {
      const clock = getTimerInfo(deadline);

      day.textContent = addZeroBeforeNumber(clock.day);
      hour.textContent = addZeroBeforeNumber(clock.hour);
      minute.textContent = addZeroBeforeNumber(clock.minute);
      second.textContent = addZeroBeforeNumber(clock.second);

      timeLessThanZero(clock, upgradeTime);
    }
  }

  setClock(timeout);
};

export default timer;
