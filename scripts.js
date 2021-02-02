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

const transactions = [{
  id: 1,
  description: 'Luz',
  amount: 50000

}]

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