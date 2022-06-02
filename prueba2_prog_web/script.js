function validar()
{
   var nombre = document.formulario.txt_nombre.value
   var apellidos = document.formulario.txt_apellidos.value
   var telefono = document.formulario.txt_telefono.value
   var rut = document.formulario.txt_rut.value
   var direccion = document.formulario.txt_direccion.value
   var edad = document.formulario.nmb_edad.value


    //NOMBRE

   if (nombre.length<3)
   {
       alert("Nombre debe tener al menos 3 caracteres")
       document.formulario.txt_nombre.focus();
       return false;
   }

    //APELLIDOS

   if (apellidos.length<3)
   {
       alert("Apellidos debe tener al menos 3 caracteres")
       document.formulario.txt_apellidos.focus();
       return false;
   }


    //RUT

   if(document.formulario.txt_rut.value.length<=8||document.formulario.txt_rut.value.length>10)
   {
       alert("Rut debe tener entre 9 y 10 caracteres")
       document.formulario.datos.txt_rut.focus()
       return false
   }
   var rut = document.formulario.txt_rut.value
   var rutInvertido = rut.split('').reverse().join('')
   if(rutInvertido.substring(2,1)!="-")
   {
       alert("Rut debe contener el guión")
       document.formulario.datos.txt_rut.focus()
       return false
   }

   if (rut.substring(8,9)!="-")
   {
       alert("El formato del rut debe ser sin puntos y con guion")
       document.formulario.txt_rut.focus()
       return false
   }

    //TELEFONO

   if (telefono.substring(0,1)!="9")
   {
       alert("Teléfono debe comenzar con 9")
       document.formulario.txt_telefono.focus()
       return false;
   }

   if (telefono.length!=9)
   {
       alert("El número de teléfono debe contener solo 9 caracteres")
       return false
   }

    //EDAD

    if(edad<18)
    {
     alert("Debe ser mayor de edad para registrarse")
     document.formulario.nmb_edad.focus()   
     return false
    }

    //DIRECCION

   if (direccion.length<5)
   {
       alert("La dirección ingresada debe ser mayor a 6 caracteres")
       document.formulario.txt_direccion.focus()
       return false
   }





   alert("Todo correctamente ingresado")
   document.formulario.action() = "..."

}



//FUNCION MOSTRAR DATOS

function mostrar()
{
    var nombre = document.formulario.txt_nombre.value
    var apellidos = document.formulario.txt_apellidos.value
    var telefono = document.formulario.txt_telefono.value
    var rut = document.formulario.txt_rut.value
    var direccion = document.formulario.txt_direccion.value
    var edad = document.formulario.nmb_edad.value


    if (nombre.length<3)
    {
        return false;
    }
    if (apellidos.length<3)
    {
        return false;
    }
    if (telefono.substring(0,1)!="9")
    {
        return false;
    }
 
    if (telefono.length!=9)
    {
        return false
    }
 
    if (rut.length<9 || rut.length>10)
    {
        return false
    }
 
    if (rut.substring(8,9)!="-")
    {
        return false
    }

    if (direccion.length<5)
    {
        return false
    }
    if(edad<18)
    {
 
     return false
    }




    
    alert("Datos del usuario resigtrado:\n\nNombre: " + nombre + "\nApellidos : " + apellidos + "\nTeléfono: " + telefono + "\nRUT: " + rut + "\nDirección: " + direccion + "\nEdad: " + edad)
    window.location.href="formulario.html";
    
}
