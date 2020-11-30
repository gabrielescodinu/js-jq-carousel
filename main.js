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

  // usa if per far riniziare il ciclo delle immagini.
  if (immagineAttiva.hasClass("last")) {
    immagineAttiva = $("img.first")
    immagineAttiva.addClass("active");
  }

  // stessa cosa per i puntini.
  if (cerchioAttivo.hasClass("last")) {
    cerchioAttivo = $("i.first")
    cerchioAttivo.addClass("active");
  }
});


// funzione click di sinistra, quindi prev
prev.click(function(){
  var immagineAttiva = $("img.active");

  immagineAttiva.removeClass("active");

  immagineAttiva.prev().addClass("active");

  var cerchioAttivo = $("i.active");
  cerchioAttivo.removeClass("active");
  cerchioAttivo.prev().addClass("active");

  if (immagineAttiva.hasClass("first")) {
    immagineAttiva = $("img.last")
    immagineAttiva.addClass("active");
  }

  if (cerchioAttivo.hasClass("first")) {
    cerchioAttivo = $("i.last")
    cerchioAttivo.addClass("active");
  }
});
