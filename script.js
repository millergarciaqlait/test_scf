// Función para enviar la solicitud AJAX
function sendRequest(searchTerm, categoryId, isVerified) {
    // Creamos el objeto JSON con los datos de la solicitud
    var data = {
      "search_request": searchTerm,
      "search_type": "PAGES",
      "is_verified": isVerified,
      "category_id": categoryId
    };
  
    // Enviamos la solicitud AJAX
    $.ajax({
      type: "POST",
      url: "http://18.226.107.203/facebook/search-profile",
      data: data,
      success: function(response) {
        // Si la respuesta es exitosa, la procesamos
        if (response.ok) {
          // Mostramos los resultados
          showResults(response.data);
        } else {
          // Mostramos un mensaje de error
          alert(response.message);
        }
      },
      error: function(error) {
        // Mostramos un mensaje de error
        alert(error.message);
      }
    });
  }
  
  // Función para mostrar los resultados
  function showResults(data) {
    // Limpiamos el contenido del div de resultados
    $("#results").empty();
  
    // Iteramos sobre los resultados
    for (var i = 0; i < data.length; i++) {
      // Creamos un elemento div para cada resultado
      var result = $("<div>");
  
      // Agregamos el nombre del resultado
      result.append("<h2>" + data[i].name + "</h2>");
  
      // Agregamos el tipo de resultado
      result.append("<p>" + data[i].type + "</p>");
  
      // Agregamos la imagen del perfil
      if (data[i].profile_photo) {
        result.append("<img src='" + data[i].profile_photo + "'>");
      }
  
      // Agregamos el resultado al div de resultados
      $("#results").append(result);
    }
  }
  