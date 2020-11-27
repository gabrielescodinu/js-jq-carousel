var next = $(".next i");
var prev = $(".prev i");

// funzione click di destra, quindi next
next.click(function(){
  // assegno ad una variabile l'immagine attiva
  var immagineAttiva = $("img.active");

  // rimuovo dall'immagine la classe active,
  // quindi l'immagine non è più attiva
  immagineAttiva.removeClass("active");

  // assegno all'immagine fratello successiva di destra
  // (con .next) la classe active.
  immagineAttiva.next().addClass("active");

  // faccio la stessa cosa per i tre puntini blu
  var cerchioAttivo = $("i.active");
  cerchioAttivo.removeClass("active");
  cerchioAttivo.next().addClass("active");
})

// funzione click di sinistra, quindi prev
prev.click(function(){
  var immagineAttiva = $("img.active");

  immagineAttiva.removeClass("active");
  // assegno all'immagine fratello precedente di sinistra
  // (con .next) la classe active.

  immagineAttiva.prev().addClass("active");

  // faccio la stessa cosa per i tre puntini blu
  var cerchioAttivo = $("i.active");
  cerchioAttivo.removeClass("active");
  cerchioAttivo.prev().addClass("active");
})
