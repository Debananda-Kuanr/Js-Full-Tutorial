//Skip multiples of 3 (1 to 20)

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue; // skip multiples of 3
  }
  console.log(i);
}
// Output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20