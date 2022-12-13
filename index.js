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
  console.log("Receita removida com sucesso!");
  console.log("=============================");
};

const atualizarReceita = (
  id,
  { titulo, dificuldade, ingredientes, preparo, video, vegana }
) => {
  const posicao = receitas.findIndex((receita) => receita.id === id);

  if (posicao === -1) {
    console.log("Receita não encontrada.");
    return;
  }

  // const receita = {
  //   ...receitas[posicao],
  //   ...(titulo ? { titulo } : {}),
  //   ...(dificuldade ? { dificuldade } : {}),
  //   ...(ingredientes ? { ingredientes } : {}),
  //   ...(preparo ? { preparo } : {}),
  //   ...(video ? { video } : {}),
  //   ...(vegana ? { vegana } : {}),
  // };

  // receitas[posicao] = receita;

  receitas[posicao].titulo = titulo ? titulo : receitas[posicao].titulo;
  receitas[posicao].dificuldade = dificuldade
    ? dificuldade
    : receitas[posicao].dificuldade;
  receitas[posicao].ingredientes = ingredientes
    ? ingredientes
    : receitas[posicao].ingredientes;
  receitas[posicao].preparo = preparo ? preparo : receitas[posicao].preparo;
  receitas[posicao].video = video ? video : receitas[posicao].video;
  receitas[posicao].vegana = vegana ? vegana : receitas[posicao].vegana;

  console.log("=============================");
  console.log(`Receita ${titulo} atualizada com sucesso!`);
  console.log("=============================");
};

const exibirReceitas = () => {
  console.log("=============================");
  // for (i = 0; i < receitas.length; i++) {
  //   console.log(`Título: ${receitas[i].titulo}`);
  //   console.log(`Ingredientes: ${receitas[i].ingredientes}`);
  //   console.log(`Vegana: ${receitas[i].vegana ? "Sim" : "Não"}`);
  //   console.log("-----------------------------");
  // }
  receitas.forEach((receita) => {
    console.log(`Título: ${receita.titulo}`);
    console.log(`Ingredientes: ${receita.ingredientes}`);
    console.log(`Vegana: ${receita.vegana ? "Sim" : "Não"}`);
    console.log("-----------------------------");
  });
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

// deletarReceita(1);

atualizarReceita(2, { titulo: "Pipoca do Francis", vegana: true });

exibirReceitas();
