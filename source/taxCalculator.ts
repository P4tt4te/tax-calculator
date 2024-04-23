export function calculateVAT(amount: number, rate: number): number {
  const value = amount * (rate / 100);
  return value > 0 ? value : 0;
}
