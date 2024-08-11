// Node modules
import { describe, expect, test } from "vitest";

// Project files
import superSorter from "./superSorter";

interface User {
  id: number;
  name: string;
  age: number;
}

test("Does not crash if array is emtpy", () => {
  // Arrange
  const key = "id"; // it does not matter the value, the array is empty
  const array: User[] = [];
  const result: User[] = [];

  // Act
  const test = superSorter(array, key);

  // Assert
  expect(test).toEqual(result);
});

describe("Sort text data", () => {
  test("Sorts in ascending order (A to Z)", () => {
    // Arrange
    const key = "name"; // matches the key "name" inside the object array
    const isAscending = true;
    const array: User[] = [
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 2, name: "Alexia Alvarez", age: 42 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
    ];
    const result: User[] = [
      { id: 2, name: "Alexia Alvarez", age: 42 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
      { id: 1, name: "Eduardo Alvarez", age: 37 },
    ];

    // Act
    const test = superSorter(array, key, isAscending);

    // Assert
    expect(test).toEqual(result);
  });

  test("Sorts in descending order (Z to A)", () => {
    // Arrange
    const key = "name"; // matches the key "name" inside the object array
    const isAscending = false;
    const array: User[] = [
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 2, name: "Alexia Alvarez", age: 42 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
    ];
    const result: User[] = [
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
      { id: 2, name: "Alexia Alvarez", age: 42 },
    ];

    // Act
    const test = superSorter(array, key, isAscending);

    // Assert
    expect(test).toEqual(result);
  });
});

describe("Sort numeric data", () => {
  test("Sorts in ascending order (A to Z)", () => {
    // Arrange
    const key = "age"; // matches the key "age" inside the object array
    const isAscending = true;
    const array: User[] = [
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 2, name: "Alexia Alvarez", age: 42 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
    ];
    const result: User[] = [
      { id: 3, name: "Babily Goatislov", age: 0.1 },
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 2, name: "Alexia Alvarez", age: 42 },
    ];

    // Act
    const test = superSorter(array, key, isAscending);

    // Assert
    expect(test).toEqual(result);
  });

  test("Sorts in descending order (Z to A)", () => {
    // Arrange
    const key = "age"; // matches the key "age" inside the object array
    const isAscending = false;
    const array: User[] = [
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 2, name: "Alexia Alvarez", age: 42 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
    ];
    const result: User[] = [
      { id: 2, name: "Alexia Alvarez", age: 42 },
      { id: 1, name: "Eduardo Alvarez", age: 37 },
      { id: 3, name: "Babily Goatislov", age: 0.1 },
    ];

    // Act
    const test = superSorter(array, key, isAscending);

    // Assert
    expect(test).toEqual(result);
  });
});
