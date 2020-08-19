let prompt = require('prompt-sync')();
let numberOfStudents = prompt('Please enter the number of students: ');
let numberOfTeams = prompt('Please enter the number of teams: ');
let studentRegularTeam = Math.floor(numberOfStudents/numberOfTeams);
let numberLargeTeam = numberOfStudents % numberOfTeams;
let numberRegularTeam = numberOfTeams - numberLargeTeam;
let studentLargeTeam = studentRegularTeam + 1;
console.log(`${numberLargeTeam} teams with ${studentLargeTeam} members and ${numberRegularTeam} with ${studentRegularTeam} members`)