class Timer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.days = document.querySelector(`${selector} span[data-value="days"]`);
    this.hours = document.querySelector(`${selector} span[data-value="hours"]`);
    this.mins = document.querySelector(`${selector} span[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
    this.start();
  }

  start() {
    const countdown = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();

      this.days.textContent = this.pad(
        Math.floor(deltaTime / (1000 * 60 * 60 * 24)),
      );
      this.hours.textContent = this.pad(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.mins.textContent = this.pad(
        Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      this.secs.textContent = this.pad(
        Math.floor((deltaTime % (1000 * 60)) / 1000),
      );
    }, 1000);
  }
  pad(digits) {
    return String(digits).padStart(2, '0');
  }
}
const countdownToNewYear = new Timer({
  selector: '#timer-1',
  targetDate: new Date('01/01/2022'),
});
