class Item{
    constructor(nome, valor){
        this.nome = nome
        this.valor = valor
        
    }

    async informacao(){
        console.log(`${this.nome} -> R$${this.valor}`)
    }
}

export{
    Item
}