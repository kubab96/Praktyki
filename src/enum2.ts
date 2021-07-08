function wykonajDzialanie(a: Operacje) {
  let wynik;
  switch (a) {
    case 5:
      wynik = a * a;
      break;
    case 10:
      wynik = a + a;
      break;
    case 15:
      wynik = a * a * 15;
      break;
    case 20:
      wynik = a + a + 15;
      break;
    default:
      console.log(a);
  }
  console.log(wynik);
}

enum Operacje {
  Operacja1 = 5,
  Operacja2 = 10,
  Operacja3 = 15,
  Operacja4 = 20,
}

wykonajDzialanie(5);
