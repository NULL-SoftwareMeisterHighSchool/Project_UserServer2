const offset = 1000 * 60 * 60 * 9;

export function convertToKorDate(date: Date): Date {
  return new Date(date.getTime() + offset);
}

export function convertToKorMilli(date: number): number {
  return date + offset;
}

export function stringify(date: Date): string {
  return date.toISOString().split('.')[0];
}
