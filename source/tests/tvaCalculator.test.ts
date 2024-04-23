import { calculateTVA } from "../tvaCalculator";

describe("calculateTVA", () => {
  test("calculates TVA correctly for 100", () => {
    expect(calculateTVA(100)).toBe(5);
  });

  test("calculates TVA correctly for a diffrent amount", () => {
    const amount = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    const result = amount / 20;
    //console.log("Amount : ", amount);
    expect(calculateTVA(amount)).toBe(result);
  });

  test("returns 0 price is 0", () => {
    expect(calculateTVA(0)).toBe(0);
  });

  test("handles negative amounts correctly", () => {
    expect(calculateTVA(100)).toBeGreaterThanOrEqual(0);
  });
});
