let fetchPokemon = async () => {
  for (let i = 1; i < 36; ++i) {
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
  if (poke_types[1] == undefined) {
    document.getElementById(
      "div1"
    ).innerHTML += `<div class="d-flex align-content-end flex-wrap contenido">
    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="${imagen}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
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
    ).innerHTML += `<div class="d-flex align-content-end flex-wrap contenido contcard">
    <div class="bg-white rounded shadow-sm py-5 px-4 contcard" ><img src="${imagen}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
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
  let codigo = $(this).closest(".bg-white")[0].childNodes[2].firstChild.data;
  let img = $(this).closest(".bg-white")[0].firstChild.currentSrc;
  let htmlimg = `<img src="${img}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">`;
  console.log(codigo);
  console.log(img);
  // var title = $("h5").append[0];
  $(".modal-header").html(codigo);
  $(".modal-body").html(htmlimg);
  // console.log(title);
});
//document.getElementsByClassName("bg-white")[0].childNodes[2].innerText

$("#pagination-demo").twbsPagination({
  totalPages: 3,
  visiblePages: 3,
  next: "Next",
  prev: "Prev",
  onPageClick: function (event, page) {
    //  fetchPokemon();
    //fetch content and render here
    $("#page-content").text("Page " + page) + " content here";
  },
});
