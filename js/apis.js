var mapa ;// Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -38.0054771, lng: -57.54261059999999}	
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
	mapa = new google.maps.Map(document.getElementById('map'),{center:posicionCentral,zoom:15});
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
