async function search() {
  const reset = () => {
    document.getElementById("sprite").style.display = "none";
    document.getElementById("pokemon-name").innerHTML = "";
    document.getElementById("pokemon-id").innerHTML = "";
    document.getElementById("weight").innerHTML = "";
    document.getElementById("height").innerHTML = "";
    document.getElementById("types").innerHTML = "";
    document.getElementById("hp").innerHTML = "";
    document.getElementById("attack").innerHTML = "";
    document.getElementById("defense").innerHTML = "";
    document.getElementById("special-attack").innerHTML = "";
    document.getElementById("special-defense").innerHTML = "";
    document.getElementById("speed").innerHTML = "";
  };
  reset();
  var search = document
    .getElementById("search-input")
    .value.toLowerCase()
    .replace(" ", "");

  if (search === "") {
    alert("Please enter a Pokemon name");
    reset();
  } else {
    let data;
    try {
      const response = await fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${search}`
      );
      data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    if (data == undefined || data == "") {
      alert("Pokemon not found");
      reset();
    } else {
      document.getElementById("sprite").style.display = "block";
      document.getElementById("sprite").src = data.sprites.front_default;
      document.getElementById("pokemon-name").innerHTML = data.name;
      document.getElementById("pokemon-id").innerHTML = data.id;
      document.getElementById("weight").innerHTML = "weight: " + data.weight;
      document.getElementById("height").innerHTML = "height: " + data.height;
      document.getElementById("types").innerHTML = data.types.map((elem) => {
        return `<div class="type ${elem.type.name}">${elem.type.name}</div>`;
      });
      document.getElementById("hp").innerHTML = data.stats[0].base_stat;
      document.getElementById("attack").innerHTML = data.stats[1].base_stat;
      document.getElementById("defense").innerHTML = data.stats[2].base_stat;
      document.getElementById("special-attack").innerHTML =
        data.stats[3].base_stat;
      document.getElementById("special-defense").innerHTML =
        data.stats[4].base_stat;
      document.getElementById("speed").innerHTML = data.stats[5].base_stat;
    }
  }
}
