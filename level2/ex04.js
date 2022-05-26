function solution(n) {
  const arr = [0, 1];
  const mod = 1234567;
  
  for (let i = 2; i <= n; i++) {
      arr[i] = arr[i-1] % mod + arr[i-2] % mod;
  }
  
  return arr[n] % mod;
}