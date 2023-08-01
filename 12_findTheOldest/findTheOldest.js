const findTheOldest = function(people) {
    const oldestPerson = people.reduce((accumulator, person) => {
        const personAgeLimit = person.hasOwnProperty("yearOfDeath") ? person.yearOfDeath : new Date().getFullYear();
        const accumulatorAgeLimit = accumulator.hasOwnProperty("yearOfDeath") ? accumulator.yearOfDeath : new Date().getFullYear();
        const agePerson = personAgeLimit - person.yearOfBirth;
        const ageAccumulator = accumulatorAgeLimit - accumulator.yearOfBirth;
        if (agePerson > ageAccumulator) {
          return person;
        } else {
          return accumulator;
        }
      }, people[0]);      
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
