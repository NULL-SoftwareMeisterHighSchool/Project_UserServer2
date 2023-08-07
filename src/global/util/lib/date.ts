const offset = 1000 * 60 * 60 * 9;

export function convertToKorDate(date: Date): string {
  const newDate = new Date(date.getTime() + offset);
  return newDate.toISOString().split('.')[0];
}
