function drawVisualization(){
//Llamamos a nuestra fuente de datos que es una tabla en Google Spread Sheet, además especificamos un rango
var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1VTYklLO4bW5y9XBharUcafLBhTcBO8vNxm2BQsVR9eI/edit?usp=sharing/tq?&range=A1:D8');

query.send(handleQueryResponse);

                            }

function handleQueryResponse(response) {

if (response.isError()) {   

  window.alert('Error importando datos: ' + response.getMessage() + ',Detalles: ' + response.getDetailedMessage ())

return;
                        }

var data = response.getDataTable();

//Iniciamos una visualizaci�n tipo TableChart llamada "tabla"
new google.visualization.Table(document.getElementById('tabla'))
.draw(data, null);

new google.visualization.BarChart(document.getElementById('barras')).

draw(data,{chart: {title: 'Nivel de Logro Promedio'}, hAxis: {title: '% de Logro'}, vAxis: {title: 'Cursos'}});

                                        }
                                        
google.setOnLoadCallback(drawVisualization); //Una vez todo listo dibujamos la visualizaci�n