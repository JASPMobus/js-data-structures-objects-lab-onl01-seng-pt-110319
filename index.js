// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver }
 
  newDriver[key] = value;
 
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
}