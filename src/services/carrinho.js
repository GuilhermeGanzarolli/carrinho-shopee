class Carrinho{
    constructor(){
        this.itens = []
        this.total = 0
    }


    //Métodos da classe
    async adicionarItem(item){
        this.itens.push(item)
        this.total+=item.valor
        console.log(`${item.nome} adicionado com sucesso`)
    }

    async removerItem(item){
        let index = this.itens.indexOf(item)
        if (index != -1) {
            this.itens.splice(index,1)
            this.total-=item.valor
        }
        else{
            console.log('Este item não está no carrinho')
        }
    }

    async relatorio(){
        console.log(this.itens)
        this.itens.forEach((item, index) => {
            console.log(`${index+1} - ${item.nome} = R$ ${item.valor},00`)
        });
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
        console.log(`Total --> R$ ${this.total}`)
    }
}

const carrinhoShopee = new Carrinho()



export{
    carrinhoShopee,
}