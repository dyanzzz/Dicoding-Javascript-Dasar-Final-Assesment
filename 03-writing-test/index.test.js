import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should sum correctly', () => {
  // Arrange
  const value1 = 3;
  const value2 = 1;

  // Action
  const actualValue = sum(value1, value2);

  // Assert
  const expectedValue = 4;
  assert.equal(actualValue, expectedValue);
});