contador = 0;
verificador = "";
trazado = "";
respuesta = "";
score = 0;

quick_draw_data_set = ['pez', 'reloj', 'manzana', 'lapiz'];
na = Math.floor((Math.random ()* quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set [na];
console.log(Element_of_array);

function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}