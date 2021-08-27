//gets number of days until birthday
const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [birthdayDay, birthdayMonth, birthdayYear] = ['13', '12', '2002'];
const birthDate = new Date(`${birthdayMonth}/${birthdayDay}/${birthdayYear}`);

let birthdayDate
if (month > birthDate.getMonth() || (month == birthDate.getMonth() && day > birthDate.getDay())) { //if birthdate has already occurred this year
    const birthday = `${birthdayMonth}/${birthdayDay}/${year+1}`;
    birthdayDate = new Date(birthday);
} else {
    const birthday = `${birthdayMonth}/${birthdayDay}/${year}`;
    birthdayDate = new Date(birthday);
}

const diffTime = Math.abs(birthdayDate - date); //returns the magnitude, the dates are miliseconds from January 1, 1970
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //ceil rounds up

console.log(`Number of days until birthday: ${diffDays}`)