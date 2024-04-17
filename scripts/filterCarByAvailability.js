function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.table(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Rubah code ini dengan array hasil filter berdasarkan availablity
 
  cars.forEach(mobil => {
    if (mobil.available === true) {
      result.push(mobil);
    }
  });
 console.table(result);
  return result;
}