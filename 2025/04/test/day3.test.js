var countGoodNumbers = function (n) {
  // even 0 2 4 6 8
  // prime 2 3 5 7

  const MOD = 1e9 + 7;

  const binaryExponentiation = (base, power) => {
    let result = 1n;
    base = BigInt(base);
    power = BigInt(power);
    const mod = BigInt(MOD);

    while (power > 0) {
      if (power % 2n === 1n) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      power /= 2n;
    }

    return result;
  };

  const even = Math.ceil(n / 2);
  const odd = Math.floor(n / 2);

  const evenWays = binaryExponentiation(5, even);
  const oddWays = binaryExponentiation(4, odd);

  return Number((evenWays * oddWays) % BigInt(MOD));
};
