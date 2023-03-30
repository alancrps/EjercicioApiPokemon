async function generarPoke(){
    //Generación de numero al azar para la obtención del pokemon
    var randomNumber = Math.floor((Math.random() * 1010) + 1);
    console.log(randomNumber)
    
    var apiUser = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    console.log(apiUser)

    var dataJson = await apiUser.json()
    console.log(dataJson)

    //nombre del pokemon
    var poke = dataJson.name;
    console.log(poke)

    //imagen del pokemon
    var pokeImg = dataJson.sprites.front_default;
    console.log(pokeImg)

    const pokeInfo = `
    <h2>${poke}</h2>
    <img src="${pokeImg}">
    `
    document.getElementById("infoPokemon").innerHTML = pokeInfo;

    //stats y tipo de pokemon

    var pokeType = dataJson.types;
    console.log(pokeType)

    var pokemonType = pokeType.forEach(function(elemento){
        var elementoName = (elemento.type.name)
        console.log(elementoName)
        const pokeStats = `
        <p>Tipo: ${elementoName}</p>
        `
        document.getElementById("statsPokemon").innerHTML = pokeStats;
        
    })
}