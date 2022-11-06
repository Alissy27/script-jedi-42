// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/

// Pass 3 tests of 7!!! (

function match(candidate, job) {
  if (
    candidate.skills.name === job.skills.name ||
    candidate.skills.name === job.skills.substitutions
  ) {
    if (candidate.skills.preference !== "avoid") {
      if (
        candidate.skills.experience >= job.skills.idealYears &&
        candidate.skills.preference === "neutral"
      ) {
        return true;
      } else if (
        candidate.skills.experience * 2 >= job.skills.idealYears &&
        candidate.skills.preference === job.skills.name
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
