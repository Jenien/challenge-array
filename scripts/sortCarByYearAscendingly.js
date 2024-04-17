
function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.table(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil sorting secara ascending
  //console tabel
  let i, j, temp;
  for (i = 0; i < result.length; i++) {
    for (j = 0; j < result.length - 1 - i; j++) {
      if (result[j].year > result[j + 1].year) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  console.table(result);

  return result;
}
