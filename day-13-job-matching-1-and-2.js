// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  const minSalaryDiscount = candidate.minSalary * 0.9;
  const maxSalaryDiscount = job.maxSalary * 0.9;
  if (minSalaryDiscount <= job.maxSalary) {
    return true;
  } else if (candidate.minSalary > job.maxSalary) {
    return false;
  } else if (job.maxSalary !== "Number" || candidate.minSalary !== "Number") {
    throw new Error(`Error. Not enough data`);
  }
}
// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript
// IT DOESN'T WORK!(

function match(job, candidates) {
  const [currentLocationCandidate] = candidates.currentLocation
  const [desiredLocationsCandidate] = candidates.desiredLocations
  const [jobLocations] = job.locations
      
  const candidateArrLocation = [...currentLocationCandidate, ...desiredLocationsCandidate]
  
   const matchLocation = candidateArrLocation.some( n => jobLocations.includes(n))
  
  const result = [];
    
  
  for (let candidate in candidates) {
    if (matchLocation === true)  {
      if (job.equityMax > 0 && candidate.desiresEquity === true) {
        result.push(candidate);
      }
    } else if (job.equityMax === false && candidate.desiresEquity === false) {
      result.push(candidate);
    }
  }
  return result;
}

