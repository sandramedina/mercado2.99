let producto1 = prompt("ingresar el nombre del producto");
let producto2 = prompt("ingresar el nombre del segundo producto");
let producto3 = prompt("ingresar el nombre del tercer producto");
let stock1: number = Number(
  prompt("ingresar stock disponible del primer producto")
);
let stock2: number = Number(
  prompt("ingresar stock disponible del segundo producto")
);
let stock3: number = Number(
  prompt("ingresar stock disponible del tercer producto")
);
let precio1: number = Number(prompt("ingresar precio del primer producto"));
let precio2: number = Number(prompt("ingresar precio del segundo producto"));
let precio3: number = Number(prompt("ingresar precio del tercer producto"));

console.log("Bienvenido al Supermercado");
console.log(
  `Nuestros productos disponibles son  ${stock1} ${producto1}, cuesta ${precio1} cada uno, ${stock2} ${producto2}, cuesta ${precio2} cada uno, ${stock3} ${producto3}, cuesta ${precio3} cada uno.`
);
let compra1: number = Number(prompt(`cuantas ${producto1} desea llevar?`));
let compra2: number = Number(prompt(`cuantas ${producto2} desea llevar?`));
let compra3: number = Number(prompt(`cuantas ${producto3} desea llevar?`));

let calculo1: number = precio1 * compra1;
let calculo2: number = precio2 * compra2;
let calculo3: number = precio3 * compra3;
let precioTotal: number = calculo1 + calculo2 + calculo3;
let stockRestante1: number = stock1 - compra1;
let stockRestante2: number = stock2 - compra2;
let stockRestante3: number = stock3 - compra3;

while (compra1 <= 0) {
  console.log("numero invalido");
  compra1 = Number(prompt(`cuantas ${producto1} desea llevar?`));
}

while (compra2 <= 0) {
  console.log("numero invalido");
  compra2 = Number(prompt(`cuantas ${producto2} desea llevar?`));
}

while (compra3 <= 0) {
  console.log("numero invalido");
  compra3 = Number(prompt(`cuantas ${producto3} desea llevar?`));
}
let totalCompra1: number;
let totalCompra2: number;
let totalCompra3: number;

for (let i = 0; i < compra1; i++) {
  totalCompra1 = precio1 + totalCompra1;
}

for (let i = 0; i < compra2; i++) {
  totalCompra2 = precio2 + totalCompra2;
}

for (let i = 0; i < compra3; i++) {
  totalCompra3 = precio3 + totalCompra3;
}
let compraTotal = compra1 + compra2 + compra3;

if (compra1 > stock1 || compra2 > stock2 || compra3 > stock3) {
  console.log(`no tenemos stock suficiente para su pedido, intente de vuelta`);
} else {
  console.log(`has comprado ${compra1} ${producto1}, lo que seria ${calculo1}`);
  console.log(`has comprado ${compra2} ${producto2}, lo que seria ${calculo2}`);
  console.log(`has comprado ${compra3} ${producto3}, lo que seria ${calculo3}`);
  console.log(`el precio total seria ${precioTotal}`);
  console.log(
    `el stock restante seria ${stockRestante1} ${producto1} ${stockRestante2} ${producto2} ${stockRestante3} ${producto3}`
  );
  console.log("muchas gracias por su compra, vuelva pronto!");
}
