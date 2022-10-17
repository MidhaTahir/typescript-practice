type NestedNumbers = number | NestedNumbers[];

const nestedNumbers: NestedNumbers = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

nestedNumbers.push(1);
nestedNumbers.push([1, 2, 3]);
// nestedNumbers.push(['errorrrr'])
