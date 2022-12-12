const nomeEmpresa = "Omma Sistemas";
const receitas = [
  {
    id: 1,
    titulo: "Cachorro quente",
    dificuldade: "simples",
    ingredientes: [
      "1x pão",
      "2x salsicha",
      "Purê de batata",
      "Molho de tomate",
      "Cebola a gosto",
      "Alho a gosto",
      "Sal a gosto",
      "Batata palha",
      "Ketchup",
    ],
    preparo:
      "Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Quem manda na minha terra sou euzis!Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.",
    video: "https://www.google.com",
    vegana: false,
  },
];

console.log("=============");
console.log(nomeEmpresa);
console.log("=============");

const cadastrarReceita = (
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  video,
  vegana
) => {
  // let id = 1;
  // if (receitas.length) {
  //   id = receitas[receitas.length - 1].id + 1;
  // }

  const id = receitas[receitas.length - 1].id + 1 || 1;
  receitas.push({
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    video,
    vegana,
  });

  console.log("=======================");
  // console.log("Receita " + titulo + " cadastrada com sucesso!");
  console.log(`Receita ${titulo} cadastrada com sucesso!`);
  console.log("=======================");
};

const deletarReceita = (id) => {
  const posicao = receitas.findIndex((receita) => receita.id === id);

  if (posicao === -1) {
    console.log("Receita não encontrada.");
    return;
  }

  receitas.splice(posicao, 1);

  console.log("=============================");
  console.log(`Receita removida com sucesso!`);
  console.log("=============================");
};

// console.table(receitas);

cadastrarReceita(
  "Pipoca doce",
  "simples",
  [
    "8 colheres de milho pipoca",
    "8 colheres de açucar",
    "8 colheres de água",
    "8 colheres de óleo",
  ],
  "Coloque todos os ingredientes dentro da pipoqueira, ligue o fogo e mexa até terminar de estourar.",
  "https://google.com",
  false
);

// console.table(receitas);

deletarReceita(1);
