function superheroes(heroes) {
  return heroes.filter((x) => !x.endsWith('oman') && x.endsWith('man')).sort();
}
const result = superheroes(['Batman', 'Superman', 'Spider-man', 'Hulk', 'Wolverine', 'Wonder-Woman']);

console.log(result);
