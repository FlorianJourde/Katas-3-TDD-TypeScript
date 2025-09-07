import { it, expect } from "bun:test";

it("returns 2 when adding 1 + 1", () => {
    // Arrange
    const a = 1;
    const b = 1;

    // Act
    const sum = a + b;

    // Assert
    expect(sum).toBe(2);
});