
 $("#seleccion").on('change',function(){
    var selectValor = '#'+$(this).val();
    $("#greg").children("div").hide();
    $("#greg").children(selectValor).show();
 });


