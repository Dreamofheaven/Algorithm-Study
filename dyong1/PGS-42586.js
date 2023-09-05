function solution(progresses, speeds) {
  let precedingFeatureDaysLeft = null;
  const featureCountPerDeploy = [];
  for (let i = 0; i < progresses.length; i++) {
    const daysLeft = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (precedingFeatureDaysLeft == null) {
      precedingFeatureDaysLeft = daysLeft;
      featureCountPerDeploy.push(1);
      continue;
    }
    if (precedingFeatureDaysLeft < daysLeft) {
      precedingFeatureDaysLeft = daysLeft;
      featureCountPerDeploy.push(1);
      continue;
    }
    featureCountPerDeploy[featureCountPerDeploy.length - 1]++;
  }
  return featureCountPerDeploy;
}
