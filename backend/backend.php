<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*'):

$guardar=file_get_contents('php://input');
//$json=json_encode($notas);
//$notas = json_decode($guardar);
$archivo = fopen("notas.json","w");
fwrite($archivo,$guardar);


echo $guardar;

?>