
let compra= document.querySelector('compra');
let venta= document.querySelector('venta');

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(response => response.json())
  .then(data => {
     /* compra.innerHTML= `
      ${data[0].casa.compra}
      ` */
      console.log(data[0].casa.compra);
  });

 


// compra.innerHTML = fet.PromiseResult[0].casa.compra;
// console.log(fet.PromiseResult);