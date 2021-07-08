function dzielenie(dzielnia: number, dzielnik: number) {
  try {
    if (dzielnik === 0 || dzielnia === 0)
      throw new Error(
        `${dzielnia} : ${dzielnik} = Pamiętaj cholero nie dziel przez zero`
      );
    const wynik = dzielnia / dzielnik;
    console.log(`${dzielnia} : ${dzielnik} = ${wynik}`);
  } catch (e) {
    console.log(e);
  }
}

const dzielniaTab: number[] = [1, 245, 2, 55, 6, 25, 8, 0];
const dzielnikTab: number[] = [43, 5, 23, 0, 9, 2, 5, 67];

for (let i = 0; i < dzielniaTab.length; i++) {
  const dzielnia: number = dzielniaTab[i];

  for (let i = 0; i < dzielnikTab.length; i++) {
    const dzielnik: number = dzielnikTab[i];

    dzielenie(dzielnia, dzielnik);
  }
}

/* 

for (let i = 0; i < dzielniaTab.length; i++) {
  const dzielnia: number = dzielniaTab[i];
  const dzielnik: number = dzielnikTab[i];
  dzielenie(dzielnia, dzielnik);
}

*/
