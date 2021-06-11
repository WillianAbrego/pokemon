let fetchPokemon = async (incial, final) => {
  for (let i = incial; i < final; ++i) {
    await getPokemon(i);
  }
};

let getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let pokemon = await res.json();

  createPokemonCard(pokemon);
};
fetchPokemon();

function createPokemonCard(pokemon) {
  //creating each HTML element
  const poke_types = pokemon.types.map((type) => type.type.name);

  let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  imagenback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`;
  let peso = pokemon.weight;
  const poke_abilities = pokemon.abilities.map(
    (ability) => ability.ability.name
  );
  //console.log(poke_abilities[0]);
  //console.log(pokemon.abilities);
  // console.log(pokemon.weight);
  if (poke_types[1] == undefined) {
    document.getElementById(
      "div1"
    ).innerHTML += `<div class="d-flex align-content-end flex-wrap contenido">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="${imagen}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
    <div class="hidden">${poke_abilities[0]} / ${poke_abilities[1]}<img src="${imagenback}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"><spam>${peso}</spam></div>
    <h5 class="mb-0" >${name}</h5><span class="small text-capitalize text-muted">${poke_types[0]}</span>
        <button type="button" class="btn  btn-info btn-sm" data-toggle="modal" data-target="#myModal" id="botonmodal">
        Informacion
      </button>
      
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    
</div>

`;
  } else {
    document.getElementById(
      "div1"
    ).innerHTML += `<div class="d-flex align-content-end flex-wrap contenido">
    <div class="bg-white rounded shadow-sm py-5 px-4 contcard" ><img src="${imagen}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
    <div class="hidden">${poke_abilities[0]}/${poke_abilities[1]}<img src="${imagenback}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"><spam>${peso}</spam></div>
    <h5 class="mb-0 nombrepokemon" title="f">${name}</h5><span class="small text-capitalize text-muted">${poke_types[0]} /${poke_types[1]} </span>
      <button type="button" title="tituli"class="btn  btn-info btn-sm" data-toggle="modal" data-target="#myModal" id="botonmodal">
        Información
      </button>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button type="button" title="funciona"class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </div>
</div>`;
    // console.log(pokemon.id);
  }
}

// $(document).click(function (event) {
//   // event.preventDefault();
//   // var content = $(".modal-body");
//   console.log("f");
//   // content.empty();
//   // var title = $(this).attr("title");
//   // $(".modal-title").html(title);
//   // content.html($(this).html());
//   // $(".modal fade").modal({ show: true });
// });

$(document).on("click", "button.btn", function (e) {
  // e.preventDefault();
  let peso =
    $(this).closest(".bg-white")[0].childNodes[2].childNodes[2].lastChild.data;
  let codigo =
    $(this).closest(".bg-white")[0].childNodes[4].childNodes[0].nodeValue;
  let co = $(this).closest(".bg-white")[0];
  let img = $(this).closest(".bg-white")[0].firstChild.currentSrc;
  let imgback =
    $(this).closest(".bg-white")[0].childNodes[2].childNodes[1].currentSrc;
  let hidden =
    $(this).closest(".bg-white")[0].childNodes[2].childNodes[0].nodeValue;
  let htmlimg = `<img src="${img}" alt="" width="100" class="imginterna rounded-circle mb-2 img-thumbnail shadow-sm">
                <img src="${imgback}" alt="" width="100" class="imginterna rounded-circle mb-2 img-thumbnail shadow-sm"> 
                 <div class="descriptions"><br><br><br></div>
                 <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Ability</th>
      <th scope="col">Weigth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${hidden}</td>
      <td>${peso}</td>
    </tr>
  </tbody>
</table>`;
  // console.log(codigo);
  // console.log(img);
  // var title = $("h5").append[0];
  $(".modal-header").html(codigo);
  $(".modal-body").html(htmlimg);
  // console.log(title);
  console.log(peso);
});
//document.getElementsByClassName("bg-white")[0].childNodes[2].innerText
const cleandiv = () => {
  document.getElementById("div1").innerHTML = "";
};
const cleandivpaginacion = () => {
  document.getElementById("wrapper").innerHTML = "";
};
$("#pagination-demo").twbsPagination({
  totalPages: 6,
  visiblePages: 6,
  next: "Next",
  prev: "Prev",
  onPageClick: function (event, page) {
    if (page == 1) {
      cleandiv();

      fetchPokemon((a = 1), (b = 29));
    } else if (page == 2) {
      fetchPokemon((a = 30), (b = 58));
      cleandiv();
    } else if (page == 3) {
      fetchPokemon((a = 59), (b = 87));
      cleandiv();
    } else if (page == 4) {
      fetchPokemon((a = 88), (b = 116));
      cleandiv();
    } else if (page == 5) {
      fetchPokemon((a = 117), (b = 145));
      cleandiv();
    } else {
      fetchPokemon((a = 146), (b = 151));
      cleandiv();
    }
    //console.log(page);
    //fetch content and render here
    $("#page-content").text("Page " + page) + " content here";
  },
});

$(document).on("click", ".aleatorio", function (e) {
  let minimo = 1,
    maximo = 151,
    res;
  res = Math.floor(Math.random() * (maximo + 1 - minimo) + minimo);

  cleandiv();
  // console.log(res);
  getPokemon(res);

  cleandivpaginacion();
  cleandiv();
});
