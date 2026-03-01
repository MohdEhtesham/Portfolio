export function getExperienceYearsLabel() {
  const start = new Date(2022, 7, 1); // August 1, 2022 (0-based month)
  const now = new Date();

  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = months / 12;
  const yearsRounded = years.toFixed(1);

  return `${yearsRounded}+`;
}

