$(document).ready(function() {
    var users = []; // Lista para almacenar los usuarios registrados

    // Manejar el evento de envío del formulario de Sign In
    $("#signin-form").submit(function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        var email = $("#email").val();
        var password = $("#password").val();

        // Buscar el usuario en la lista de usuarios registrados
        var user = findUserByEmail(email);
        if (user && user.password === password) {
            // Mostrar mensaje de bienvenida con el nombre del usuario
            alert("¡Bienvenido, " + user.email + "!");

            // Aquí puedes redirigir a la página de inicio de sesión exitosa, por ejemplo.
        } else {
            // Mostrar mensaje de error si las credenciales son incorrectas
            alert("Credenciales incorrectas");
        }
    });

    // Manejar el evento de envío del formulario de Sign Up
    $("#signup-form").submit(function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        var email = $("#signup-email").val();
        var password = $("#signup-password").val();

        // Validar que el correo electrónico y la contraseña sean válidos
        if (!validateEmail(email)) {
            alert("Correo electrónico no válido");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        // Crear un objeto de usuario
        var user = {
            name: "", // Agrega un campo para el nombre del usuario
            email: email,
            password: password
        };

        // Agregar el usuario a la lista
        users.push(user);

        // Mostrar mensaje de registro exitoso
        alert("Registro exitoso");

        // Limpiar los campos del formulario
        $("#signup-email").val("");
        $("#signup-password").val("");
    });

    // Función para validar el formato de correo electrónico
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Función para buscar un usuario por su correo electrónico
    function findUserByEmail(email) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return users[i];
            }
        }
        return null;
    }
});
