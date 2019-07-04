// Biznezz in the back
function Transportation(fun, work) {
  this.fun = fun,
  this.work = work
};

// UI in the front
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();

    var userWorkResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userWorkResponses.push(workTransportationMode);
    });

    var userFunResponses = [];
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      userFunResponses.push(funTransportationMode);
    });
    // console.log(userWorkResponses);
    // console.log(userFunResponses);

    var newTransport = new Transportation(userFunResponses, userWorkResponses);
    console.log(newTransport);
  });
});
