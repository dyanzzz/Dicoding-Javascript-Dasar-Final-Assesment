function fibonacci(n) {
  // Array untuk menyimpan deret Fibonacci
  const series = [];

  // Fungsi rekursif untuk menghitung nilai Fibonacci
  function fib(i) {
      if (i === 0) return 0;
      if (i === 1) return 1;
      return fib(i - 1) + fib(i - 2);
  }

  // Menghitung dan menyimpan nilai Fibonacci dalam array
  for (let i = 0; i <= n; i++) {
      series.push(fib(i));
      //getBack = `[ ${series.join(', ')} ]`;
  }

  return series
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
