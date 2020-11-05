export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function splitCamelCase(s) {
  return capitalizeFirstLetter(s.replace(/([a-z](?=[A-Z]))/g, "$1 "));
}
