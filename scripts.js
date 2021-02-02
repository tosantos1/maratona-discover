const Modal = {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document
          .querySelector('.modal-overlay')
          .classList
          .add('active');
    },
    close(){
        //Fechar o modal 
        // remover a class active do modal
        document
          .querySelector('.modal-overlay')
          .classList
          .remove('active');
    }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Luz',
    amount: 500000,
    date: '23/01/2021'
  },
  {
    id: 1,
    description: 'Luz',
    amount: -20000,
    date: '23/01/2021'
  },

]

// Eu preciso somar as entradas
// Depois eu preciso somar as saídas e
// Remover das entradas os valores das saídas
// Assim, eu terei o total

const Transaction = {  // "=" Atribuindo valor
    incomes(){
      // somar as entradas


    },
    expenses(){
      // somar as saídas


    },
    total(){
      // entradas - saídas


    }



}

// Eu preciso pegar as minhas transções do meu
// objeto aqui no Javascript
// e colocar lá no HTML

// Substituir os dados do HTML com os dados do JS

