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

    const pokeSprite = `
    <h2>${poke}</h2>
    <img src="${pokeImg}">
    `
    document.getElementById("infoPokemon").innerHTML = pokeSprite;

    //tipo del pokemon
    var pokeType = dataJson.types;
    console.log(pokeType)

    var pokemonTypeText = "";

    pokeType.forEach(function(elemento, i){
        pokemonTypeText +=`
        <p><span id="colorSpan">Tipo(${i+1}):</span> ${elemento.type.name}</p>
        `
        console.log(pokemonTypeText)
        document.getElementById("typePokemon").innerHTML = pokemonTypeText;
    })

    //stats del pokemon
    var pokeStats = dataJson.stats;
    console.log(pokeStats)

    var pokemonStatsText = "";

    pokeStats.forEach(function(elemento){
        pokemonStatsText +=`
        <p><span id="colorSpan">${elemento.stat.name}:</span> ${elemento.base_stat}</p>
        `
        document.getElementById("statsPokemon").innerHTML = pokemonStatsText;
    })
}