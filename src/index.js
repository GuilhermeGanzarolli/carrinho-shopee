import { carrinhoShopee } from "./services/carrinho.js";
import { Item } from "./services/item.js";

const mouse = new Item('Mouse',58)
const teclado = new Item('Teclado', 70)
const monitor = new Item('Monitor', 120)
const processador = new Item('Processador', 95)
const hd = new Item('HD', 45)


carrinhoShopee.adicionarItem(mouse)
carrinhoShopee.adicionarItem(mouse)
carrinhoShopee.adicionarItem(monitor)
carrinhoShopee.adicionarItem(mouse)
carrinhoShopee.adicionarItem(teclado)
carrinhoShopee.adicionarItem(processador)
carrinhoShopee.adicionarItem(teclado)
carrinhoShopee.adicionarItem(hd)
carrinhoShopee.adicionarItem(hd)
carrinhoShopee.removerItem(mouse)
carrinhoShopee.removerItem(mouse)
carrinhoShopee.removerItem(teclado)
carrinhoShopee.relatorio()
