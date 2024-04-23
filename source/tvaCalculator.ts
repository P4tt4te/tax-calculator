export function calculateTVA(amount: number): number {
  const value = amount / 20;
  return value > 0 ? value : 0;
}
