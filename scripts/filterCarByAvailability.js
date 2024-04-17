function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.table(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.table(result);
  cars.forEach(mobil => (mobil.available === true) ? result.push(mobil) : null);

  return result;
}