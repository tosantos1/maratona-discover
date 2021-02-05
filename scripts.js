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

// Eu preciso somar as entradas
// Depois eu preciso somar as saídas e
// Remover das entradas os valores das saídas
// Assim, eu terei o total

const Transaction = {  // "=" Atribuindo valor
    all: [
      {
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
      },
      {
        description: 'Internet',
        amount: 500000,
        date: '23/01/2021'
      },
      {
        description: 'Website',
        amount: -20000,
        date: '23/01/2021'
      },
      {
        description: 'Ignite',
        amount:  20000,
        date: '23/01/2021'
      },
    
    ],

    add(transaction){
        transactions.all.push(transaction)

        App.reload()
    }, 

    remove() {
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes(){
    let income = 0;
      // pegar todas as transacoes
      // para cada transacao,
    transactions.all.forEach(transaction => {
      // se ela for maior que zero
      if (transaction.amount > 0){
        // somar a uma variavel e retornar a variavel
      income = income + transaction.amount;
    }})
     return income;
    },

    expenses(){
    let expense = 0;
      // pegar todas as transacoes
      // para cada transacao,
    transactions.all.forEach(transaction => {
      // se ela for menor que zero
      if (transaction.amount < 0){
        // somar a uma variavel e retornar a variavel
      expense = expense + transaction.amount;
      }})
      return expense;
    },

    total(){
      return Transaction.incomes() + Transaction.expenses();
    }
}

// Eu preciso pegar as minhas transções do meu
// objeto aqui no Javascript
// e colocar lá no HTML

// Substituir os dados do HTML com os dados do JS

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index){
    const tr = document.createElement('tr') // Criando o elemento "tr" do html mesmo!
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
  },

  innerHTMLTransaction(transaction){
    const CSSclass = transaction.amount > 0 ? "income" : "expense" // "?" = 'então' - ":" = 'se não'

    const amount = Utils.formatCurrency(transaction.amount)

    // Montando o html
    const html = `    
      
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="svg/minus.svg" alt="Remover transação" />
        </td>
     
    `
    return html
  },

  updateBalance(){
    document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes())
    document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())
  },

  clearTransactions(){
    DOM.transactionsContainer.innerHTML = ""
  }



}

const Utils = {
  formatCurrency(value){
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",  // Estilo Moeda
      currency: "BRL"   // Tipo de Moeda
    })

    return signal + value

  }
}

const Form = {
  formatData(){

  },
  validateFields(){

  },
  submt(event){
    event.preventDefault()

    // verificar se todas as informações foram preenchidas
    Form.validateFields()
    // formatar os dados para salvar
    Form.formatData()
    // salvar 
    // apagar os dados do formulario 
    // modal feche
    // atualizar a aplicação
  }
}

const App = {
  init(){

    Transaction.all.forEach(transaction => {
      DOM.addTransaction(transaction)
    })
    
    DOM.updateBalance()
  },
  reload(){
    DOM.clearTransactions()
    App.init()
  },
}

App.init()

Transaction.remove(1)