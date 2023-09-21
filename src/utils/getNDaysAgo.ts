/**
 * Receive a number between 0 and 31 and returns a date (yyyy-mm-dd)
 * @param {number} n
 * @returns {string}
 */

function isValidNumber(n: unknown): n is number {
  return typeof n === "number" && n <= 31 && n >= 0;
}

export default function getNDaysAgo(n: number) {
  if (!isValidNumber(n))
    throw new Error(
      "Invalid number! This function receives a number between 0 and 31"
    );

  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}
