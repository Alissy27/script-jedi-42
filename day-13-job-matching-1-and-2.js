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
