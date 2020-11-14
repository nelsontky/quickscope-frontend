import db from "../db.json";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function splitCamelCase(s) {
  return capitalizeFirstLetter(s.replace(/([a-z](?=[A-Z]))/g, "$1 "));
}

export const dbApplications = Object.keys(db.applications).reduce(
  (acc, key) => [...acc, ...db.applications[key]],
  []
);
