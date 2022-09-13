let pokeApi = "https://pokeapi.co/api/v2/pokemon";
const d = document,
  $main = d.querySelector("main"),
  $slide = d.getElementById("slide");
console.log($main);

async function loadPokemon(url) {
  try {
    let res = await fetch(url),
      json = await res.json(),
      $template = "",
      $prevLink,
      $nextLink;

    for (let i = 0; i < json.results.length; i++) {
      let element = json.results[i];
      try {
        let res = await fetch(element.url),
          pokemon = await res.json(),
          capitalize =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        $template += `
          <figure>
             <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="rounded-circle img-thumbnail ">  
              <figcaption>${capitalize}</figcaption>  
           </figure>`;
      } catch (err) {
        console.log(err);
      }
    }

    $main.innerHTML = $template;

    $prevLink = json.previous
      ? `<a class="carousel-control-prev" href="${json.previous}"  role="button" data-slide="prev">
        <span class="carousel-control-prev-icon alter" data-url="${json.previous}"></span>
      </a>`
      : "";

    $nextLink = json.next
      ? `<a class="carousel-control-next" href="${json.next}" role="button" data-slide="next">
          <span class="carousel-control-next-icon alter" data-url="${json.next}"></span>
        </a>`
      : "";
    $slide.innerHTML = $prevLink + "" + $nextLink;
  } catch (err) {
    console.log(err);
  }
}

d.addEventListener("DOMContentLoaded", (e) => {
  loadPokemon(pokeApi);
});
d.addEventListener("click", (e) => {
  if (e.target.matches(".alter")) {
    e.preventDefault();

    loadPokemon(e.target.nextSibling.parentElement);

    //
  }
});
