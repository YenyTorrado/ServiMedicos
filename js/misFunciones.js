function consultarDoctor(){
    $.ajax({
        url:"http://129.151.101.11:8080/api/Doctor/all",
        type:"GET",
        datatype:"JSON",
        success:function(doctor){
            console.log(doctor);
            imprimirDoctor(doctor);
        }
    });
}

function imprimirDoctor(doctor){
    let myTable="<table>";
    myTable = "<table border='1'><tr><th>Nombre<th>Departamento<th>Año<th>Descripción"
    for(i=0;i<doctor.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+doctor[i].name+"</td>";
        myTable+="<td>"+doctor[i].department+"</td>";
        myTable+="<td>"+doctor[i].year+"</td>";
        myTable+="<td>"+doctor[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarDoctor("+doctor[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='eliminarDoctor("+doctor[i].id+")'> Eliminar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}

function guardarDoctor(){
    let myData={
        name:$("#doctorName").val(),
        department:$("#department").val(),
        year:$("#year").val(),
        description:$("#description").val(),
    };
    $.ajax({
        type:"POST",
        contentType:"application/json; charset-utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        url:"http://129.151.101.11:8080/api/Doctor/save",

        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown) {
          window.location.reload()
        alert("No se guardo correctamente");
    }
    });
}

function actualizarDoctor(idElemento){
    let myData={
        id:idElemento,
        name:$("#doctorName").val(),
        department:$("#department").val(),
        year:$("#year").val(),
        description:$("#description").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Doctor/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(doctor){
            $("#resultado").empty();
            $("#id").val("");
            $("#doctorName").val(""),
            $("#department").val(""),
            $("#year").val(""),
            $("#description").val(""),
            alert("Dato Actualizado")
            window.location.reload()

        }
    });
}

function eliminarDoctor(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Doctor/" + idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(doctor){
            $("#resultado").empty();
            alert("Dato Eliminado")
            window.location.reload()
        }
    });
}


function consultarCliente(){
    $.ajax({
        url:"http://129.151.101.11:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(cliente){
            console.log(cliente);
            imprimirCliente(cliente);
        }
    });
}

function imprimirCliente(cliente){
    let myTable="<table>";
    myTable = "<table border='1'><tr><th>Em@il<th>Contraseña<th>Nombre<th>Años"
    for(i=0;i<cliente.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+cliente[i].email+"</td>";
        myTable+="<td>"+cliente[i].password+"</td>";
        myTable+="<td>"+cliente[i].name+"</td>";
        myTable+="<td>"+cliente[i].age+"</td>";
        myTable+="<td> <button onclick=' actualizarCliente("+cliente[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='eliminarCliente("+cliente[i].idClient+")'> Eliminar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").append(myTable);
}

function guardarCliente(){
    let myData={
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val(),
    };
    $.ajax({
        type:"POST",
        contentType:"application/json; charset-utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        url:"http://129.151.101.11:8080/api/Client/save",

        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown) {
          window.location.reload()
        alert("No se guardo correctamente");
    }
    });
}

function actualizarCliente(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(doctor){
            $("#resultado").empty();
            $("#idClient").val("");
            $("#email").val(""),
            $("#password").val(""),
            $("#name").val(""),
            $("#age").val(""),
            alert("Dato Actualizado")
            window.location.reload()
        }
    });
}

function eliminarCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Client/" + idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(cliente){
            $("#resultado").empty();
            alert("Dato Eliminado")
            window.location.reload()
        }
    });
}


function consultarReservacion(){
    $.ajax({
        url:"http://129.151.101.11:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(reservacion){
            console.log(reservacion);
            imprimirReservacion(reservacion);
        }
    });
}

function imprimirReservacion(reservacion){
    let myTable="<table>";
    myTable = "<table border='1'><tr><th>Inicio<th>Devolución<th>Estado"
    for(i=0;i<reservacion.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+reservacion[i].startDate+"</td>";
        myTable+="<td>"+reservacion[i].devolutionDate+"</td>";
        myTable+="<td>"+reservacion[i].status+"</td>";
        myTable+="<td> <button onclick=' actualizarReservacion("+reservacion[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='eliminarReservacion("+reservacion[i].idReservation+")'> Eliminar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}

function guardarReservacion(){
    let myData={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        type:"POST",
        contentType:"application/json; charset-utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        url:"http://129.151.101.11:8080/api/Reservation/save",

        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown) {
          window.location.reload()
        alert("No se guardo correctamente");
    }
    });
}

function actualizarReservacion(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(reservacion){
            $("#resultado").empty();
            $("#startDate").val(""),
            $("#devolutionDate").val(""),
            $("#status").val(""),
            alert("Dato Actualizado")
            window.location.reload()
        }
    });
}

function eliminarReservacion(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Reservation/"+ idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(reservacion){
            $("#resultado").empty();
            alert("Dato Eliminado.")
            window.location.reload()

        }
    });
}


function consultarEspecialidad(){
    $.ajax({
        url:"http://129.151.101.11:8080/api/Specialty/all",
        type:"GET",
        datatype:"JSON",
        success:function(especialidad){
            console.log(especialidad);
            imprimirEspecialidad(especialidad);
        }
    });
}

function imprimirEspecialidad(especialidad){
    let myTable="<table>";
    myTable = "<table border='1'><tr><th>Nombre<th>Descripción"
    for(i=0;i<especialidad.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+especialidad[i].name+"</td>";
        myTable+="<td>"+especialidad[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarEspecialidad("+especialidad[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='eliminarEspecialidad("+especialidad[i].id+")'> Eliminar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").append(myTable);
}

function guardarEspecialidad(){
    let myData={
        name:$("#specialtyName").val(),
        description:$("#specialtyDescription").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        type:"POST",
        contentType:"application/json; charset-utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        url:"http://129.151.101.11:8080/api/Specialty/save",

        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown) {
          window.location.reload()
        alert("No se guardo correctamente");
    }
    });
}

function actualizarEspecialidad(idElemento){
    let myData={
        id:idElemento,
        name:$("#specialtyName").val(),
        description:$("#specialtyDescription").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Specialty/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(mensaje){
            $("#resultado").empty();
            $("#specialtyName").val(""),
            $("#specialtyDescription").val(""),
            alert("Dato Actualizado")
            window.location.reload()
        }
    });
}

function eliminarEspecialidad(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Specialty/"+ idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(especialidad){
            $("#resultado").empty();
            alert("Dato Eliminado.")
            window.location.reload()
        }
    });
}


function consultarMensaje(){
    $.ajax({
        url:"http://129.151.101.11:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(mensaje){
            console.log(mensaje);
            imprimirMensaje(mensaje);
        }
    });
}

function imprimirMensaje(mensaje){
    let myTable="<table>";
    myTable = "<table border='1'><tr><th>Mensaje"
    for(i=0;i<mensaje.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+mensaje[i].messageText+"</td>";
        myTable+="<td> <button onclick=' actualizarMensaje("+mensaje[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='eliminarMensaje("+mensaje[i].idMessage+")'> Eliminar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").append(myTable);
}

function guardarMensaje(){
    let myData={
        messageText:$("#messageText").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        type:"POST",
        contentType:"application/json; charset-utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        url:"http://129.151.101.11:8080/api/Message/save",

        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
    },

    error: function(jqXHR, textStatus, errorThrown) {
          window.location.reload()
        alert("No se guardo correctamente");
    }
    });
}

function actualizarMensaje(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messageText").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(mensaje){
            $("#resultado").empty();
            $("#messageText").val(""),
            alert("Dato Actualizado")
            window.location.reload()
        }
    });
}

function eliminarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.101.11:8080/api/Message/"+ idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(mensaje){
            $("#resultado").empty();
            alert("Dato Eliminado.")
            window.location.reload()
        }
    });

}


