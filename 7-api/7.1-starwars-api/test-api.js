function navnAllePlaneter() {
   // Loope planeter
   // Navn på alle planeter
   fetch("https://swapi.info/api/planets")
  .then((res) => res.json())
  .then((planeter) => { console.log(planeter);
    let planetnavn = []
    for(let planet of planeter) {
        planetnavn.push(planet.name); 
    }
    console.log(planetnavn.join(", "));

  })
  .catch((error) => console.error(error))
}
navnAllePlaneter();

// fetch("https://swapi.info/api/people")
//   .then((res) => res.json())
//   .then((json) =>  { 
//     // console.log(json); // All people
//     console.log(json[0]);  // The first: Luke
//     // Hente ut bare navnet?
//     console.log(json[0].name);
//     // Hente ut navnet til homeworld?
//     let homeworldAPI = json[0].homeworld;
//     // Siden homeworld er ny api url, må vi lage en ny fetch
//     fetch(homeworldAPI)
//   .then((res) => res.json())
//   .then((json) => console.log(json.name))
//   .catch((error) => console.error(error))

   
    
//   }
//     )
//   .catch((error) => console.error(error))