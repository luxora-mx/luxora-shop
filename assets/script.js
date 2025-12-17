// Luxora — script base (carrito simple placeholder)
console.log('Luxora script cargado');

window.luxora = {
  openProduct: function(id){ console.log('abrir producto', id) },
  buyNow: function(priceId){ 
    // redirige al checkout (esto se conectará a la API)
    console.log('comprar', priceId);
    alert('Comprar: ' + priceId);
  }
}
