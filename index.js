// Code your solution here
const drivers = ['bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function fuzzyMatch(arr , str){
   return arr.filter(driver =>driver.toLowerCase().startsWith(str.toLowerCase()))
}
console.log(fuzzyMatch(drivers, 'S'));




function findMatching(drivers , str){
    return  drivers.filter(driver=> driver.toLowerCase() === str.toLowerCase())
   }
   console.log(findMatching(drivers, 'Bobby'));
const men = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(arr , str){
   return  arr.filter(obj=> obj.name === str)
}
console.log(matchName(men, 'Bobby'));
console.log(drivers[0].slice(0,2));