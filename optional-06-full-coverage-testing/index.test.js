// sum.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

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

test('should return 0 when one input is negative', () => {
  // Arrange
  const value1 = -1;
  const value2 = 5;

  // Action
  const actualValue = sum(value1, value2);

  // Assert
  assert.equal(actualValue, 0);
});

test('should return 0 when both inputs are negative', () => {
  // Arrange
  const value1 = -1;
  const value2 = -1;

  // Action
  const actualValue = sum(value1, value2);

  // Assert
  assert.equal(actualValue, 0);
});

test('should return 0 when inputs are not numbers', () => {
  // Arrange
  const value1 = "satu";
  const value2 = 2;

  
  // Action
  const actualValue = sum(value1, value2);

  // Assert
  assert.equal(actualValue, 0);
});
