// Count the number of monitors for office
function monitorCount(rows,columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount (5,4);
  console.log(numOfMonitors);

  // Calculate total cost of monitor purchased
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5,4);
  console.log ('Total cost is ' + totalCost + 'USD');

  // Define when to water the plan
  const plantNeedsWater = (day) =>
{
 if (day === 'Wednesday') {
   return true;
 } else {
   return false;
 }
};

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

//declare global variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

//arrow function
const callMyNightSky = () => {
  console.log(callMyNightSky());
  console.log('Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy);
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}



