function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const resultBox = document.getElementById('ageOutput');
  const countdownBox = document.getElementById('bdayCountdown');

  if (!dobInput) {
    resultBox.innerHTML = "⚠️ Please select your date of birth.";
    countdownBox.innerHTML = "";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultBox.innerHTML = "⚠️ Birth date cannot be in the future!";
    countdownBox.innerHTML = "";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultBox.innerHTML = `🎉 You are <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days old.`;

  // BIRTHDAY COUNTDOWN
  const nextBday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (today > nextBday) {
    nextBday.setFullYear(today.getFullYear() + 1);
  }

  const timeDiff = nextBday - today;
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  countdownBox.innerHTML = `🎂 Your next birthday is in <b>${dayDiff}</b> day(s)!`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
