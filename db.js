import Sequelize from "sequelize";

const conexaoSequelize = new Sequelize("gerenciamento", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

conexaoSequelize
  .authenticate()
  .then(() => {
    console.log("------------------------");
    console.log("Conexão feita !");
  })
  .catch((err) => {
    console.error("Erro na conexão com banco !", err);
  });

const Projetos = conexaoSequelize.define("projetos", {
  nome: {
    type: Sequelize.STRING,
  },
  descricao: {
    type: Sequelize.STRING,
  },
  data: {
    type: Sequelize.DATE,
  },
  funcionarios: {
    type: Sequelize.STRING,
  },
  
});

//  Projetos.sync({ force: false }); // Execute apenas uma vez para criar a tabela
//  Projetos.create ({
//   nome: 'Aniversario',
//   descricao: 'projeto bom',
//   data: '2022-10-20',
//   funcionarios: 'sla'
// });

export default Projetos;

