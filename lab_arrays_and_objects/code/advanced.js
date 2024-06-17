/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = null;
england = unitedKingdom[1];
england.touristAttractions = ["Windsor Castle", "Buckingham Palace"]
// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = null;
wales = unitedKingdom[2];
wales.capital = "Cardiff"
// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = null;
northernIrelandKeys = Object.keys(unitedKingdom[3]);
// console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the population of Wales, and say which is bigger.
 */

if (unitedKingdom[0].population > wales.population) {
  console.log("Scotland has a higher population than wales");
} else {
  console.log("Wales has a higher population than Scotland");
}
