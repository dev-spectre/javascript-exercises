const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const lastYearOfPerson =
      "yearOfDeath" in person
        ? person.yearOfDeath
        : new Date().getFullYear();
    const lastYearOfOldest =
      "yearOfDeath" in oldest
        ? oldest.yearOfDeath
        : new Date().getFullYear();
    const ageOfPerson = lastYearOfPerson - person.yearOfBirth;
    const ageOfOldest = lastYearOfOldest - oldest.yearOfBirth;
    if (ageOfPerson > ageOfOldest) oldest = person;
    return oldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
