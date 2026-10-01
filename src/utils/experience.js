// Career start: Sep 2022 (OTS Solutions). Whole years only, e.g. "4+".
export function getExperienceYearsLabel() {
  const start = new Date(2022, 8, 1); // September 1, 2022 (0-based month)
  const now = new Date();

  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  return `${Math.floor(months / 12)}+`;
}
