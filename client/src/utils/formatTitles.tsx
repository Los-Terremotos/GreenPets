export function formatTitles (string: string) {
  const updated: string = string[0].toUpperCase() + string.slice(1);

  const result: string = updated.replace(/_/g, " ");

  return result;
}