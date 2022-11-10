/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleNetworks` variable below to gain access to an array of bike network information.

  Keep in mind that your functions must still have and use a parameter for accepting all network data.
*/
const exampleNetworks = require("./bike-networks");
// Do not change the line above.

/**
 * getAllBikeNetworkNames()
 * -----------------------------
 * Returns all of names from an array of networks. If the inputted `networks` array is empty, return `[]`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are network names.
 *
 * EXAMPLE:
 *  getAllBikeNetworkNames(networks);
 *  //> [
      "UBike",
      "Bay Wheels",
      "Relay Bike Share",
      "BikeRecife",
      "BikeSampa",
      "BikeRio",
      "BikeSalvador",
      "BikePOA",
      "MIBICI",
      "Just Eat Cycles",
      // ...
    ];
 */
function getAllBikeNetworkNames(networks) {
  let bikeNetworks = []
  for (let i = 0; i < networks.length; i++){
    bikeNetworks.push(networks[i].name)
  }
  return bikeNetworks
}

/**
 * getAllBikeNetworksInTheUS()
 * -----------------------------
 * Returns an array of all networks located in the United States (i.e. "US"). If there are no networks in the "US" or the input is empty, return an empty array.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object[]} An array of objects, where each network object has a location in the "US".
 * 
 * EXAMPLE:
 *  getAllBikeNetworksInTheUS(networks);
 *  //> [
      {  
        company: ["Clean Energy Coalition", "BCycle, LLC"],
        gbfs_href: "https://gbfs.bcycle.com/bcycle_arborbike/gbfs.json",
        href: "/v2/networks/arborbike",
        id: "arborbike",
        location: {
          city: "Ann Arbor, MI",
          country: "US",
          latitude: 42.27853,
          longitude: -83.74536,
        },
        name: "ArborBike",
      },
      // ...
    ]
 */
function getAllBikeNetworksInTheUS(networks) {
  let allNetworks = []
  for (let i = 0; i < networks.length; i++){
    if (networks[i].location.country === "US"){
      allNetworks.push(networks[i])
    } else{
      allNetworks === networks[i]
    }
    }
  
  return allNetworks
}


/**
 * getBikeNetworkWithLowestLongitude()
 * -----------------------------
 * Returns the bike network which has the smallest value for `longitude`. If there are no networks in the input, returns `null`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object} The bike network with the smallest value for `longitude`.
 * 
 * EXAMPLE:
 *  getBikeNetworkWithLowestLongitude(networks);
 *  //> {
      company: [
        "Portland Bureau of Transportation (PBOT)",
        "Motivate International, Inc",
        "Social Bicycles Inc.",
      ],
      gbfs_href: "http://biketownpdx.socialbicycles.com/opendata/gbfs.json",
      href: "/v2/networks/biketown",
      id: "biketown",
      location: {
        city: "Portland, OR",
        country: "US",
        latitude: 45.52175423291714,
        longitude: -122.68107935786247,
      },
      name: "BIKETOWN",
    }
 */
function getBikeNetworkWithLowestLongitude(networks) {
  
  let lowestLongitude = {}
  let smallLongVal = null
  for (let i = 0; i < networks.length; i++) {
   let bikeNetwork = networks[i].company
    if (bikeNetwork < networks[i].longitude) {
      lowestLongitude = bikeNetwork.fliter(networks[i].longitude)
    }
  }
  return smallLongVal
}

/**
 * countByCountry()
 * -----------------------------
 * Returns an object where the keys are countries and the values are the number of networks in the array with that country. If the inputted `networks` array is empty, return `{}`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object} An object where keys are countries (e.g. "AU") and the values are how many networks in the array are in that country (e.g. 2).
 *
 * EXAMPLE:
 *  countByCountry(networks);
 *  //> {
      AU: 2,
      BE: 1,
      BR: 6,
      // ... 
    }
 */
function countByCountry(networks) {
  let objKey = {}
  for (let i = 0; i < networks.length; i++) {
    if (!objKey[networks[i].country]) {
      objKey[networks[i].country] = 1
    } else {
      objKey[networks[i].country]++
    }
  }
  return objKey
}

/**
 * findById()
 * -----------------------------
 * Returns a network object from an array of objects based on the ID. If the inputted `networks` array is empty or the ID does not match any bike network, return `null`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @param {string} id - A unique `id`.
 * @returns {Object|null} The network object with the matching `id`.
 *
 * EXAMPLE:
 *  findById(networks, "indego");
 *  //> {
      company: [
        "City of Philadelphia",
        "Bicycle Transit Systems",
        "BCycle, LLC",
      ],
      gbfs_href: "https://gbfs.bcycle.com/bcycle_indego/gbfs.json",
      href: "/v2/networks/indego",
      id: "indego",
      location: {
        city: "Philadelphia, PA",
        country: "US",
        latitude: 39.95378,
        longitude: -75.16374,
      },
      name: "Indego",
    }
 */
function findById(networks, id) {
  let companyId = null
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].id === id) {
      companyId = networks[i]

    }
  }

  return companyId
}


/**
 * filterByCountry()
 * -----------------------------
 * Returns an array of network objects where the network country matches the inputted `country`. If there are no matching objects, or the input is empty, return an empty array.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @param {String} country - A country name abbreviation
 * @returns {Object[]} An array of objects, where each network object has a location in the matching country.
 * 
 * EXAMPLE:
 *  filterByCountry(networks, "AU");
 *  //> [
      { name: "Curtin Bike Share", ... },
      { name: "Monash BikeShare", ... },
    ]
 */
function filterByCountry(networks, country) {
  let countryNetwork = []
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].company.includes(country)) {
      countryNetwork.push(networks[i].country)

    }

  }


  return countryNetwork
}


/**
 * transformNetworks()
 * -----------------------------
 * Returns an array of objects based off of the inputted networks. However, each network is transformed so that it has the following keys:
 *  - id: The ID of the network.
 *  - name: The name of the network.
 *  - location: The network's city and country, joined together.
 *  - companies: The network's company array joined together by commas.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object[]} An array of objects, where each network is transformed in the prescribed way.
 * 
 * EXAMPLE:
 *  transformNetworks(networks);
 *  //> [
      {
        id: "velib",
        name: "Velib' M\u00e9trop\u00f4le",
        location: "Paris, FR",
        companies: "Smovengo",
      },
      ...
    ]
 * 
 * EXAMPLE:
 *  transformNetworks(networks);
 *  //> [
     {
        id: "edinburgh-cycle-hire",
        name: "Just Eat Cycles",
        location: "Edinburgh, UK",
        companies: "Your Bike, Urban Sharing",
      },
      ...
    ]
 */
function transformNetworks(networks) {
  let arrNetwork = []
  for (let i = 0; i < networks.length; i++) {

  }


  return arrNetwork
}

module.exports = {
  getAllBikeNetworkNames,
  getAllBikeNetworksInTheUS,
  getBikeNetworkWithLowestLongitude,
  countByCountry,
  findById,
  filterByCountry,
  transformNetworks,
};
