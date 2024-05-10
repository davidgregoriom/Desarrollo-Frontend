# Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.


### Enunciado:

Para esta quinta practica se pide desarrollar una aplicación web de correo electrónico
Dicha aplicación constara de 4 paginas principalmente

1. /auth/ -> Será una pagina donde el usuario deberá poner una dirección de correo valida y una contraseña de mínimo de 6 caracteres
2. /client/home - Será una pagina donde se muestren un listado de todos los correos electrónicos, siguiendo el estilo de GMAIL (asunto, body y fecha)

3. /client/new - Será una pagina donde el usuario pueda enviar un correo electrónico, donde los requisitos son:
    1. Un email valido

    2. Un asunto de mínimo 5 palabras

    3. Un cuerpo de mínimo de 1 carácter

4. /client/[id] - Será una pagina donde el usuario pueda ver el detalle de un correo electrónico

La aplicación deberá tener la siguiente estructura

1. Todos las urls que empiecen con /elient deberán tener un header común a todas ellas donde haya dos enlaces. El primero indicando el nombre de la
universidad dedberá estar en el borde izquierdo del header, y el segundo que pondrá cerrar sesión ira en el borde derecho del header:
    1. El primer enlace llevara a la home

    2. El segundo enlace cerrara la sesión, redirigiéndolo al usuario a la pagina de /auth

REQUISITOS A TENER EN CUENTA

- Como base de datos se deberá usar las cookies
- Deberá renderizarse principalmente en el servidor
- Un usuario que no tiene la sesión iniciada (cookie de sesión) no podrá acceder a las urls que contengan /client y deberá redirigirse a /auth
- Un usuario con sesión iniciada no podrá acceder a /auth y deberá redirigirse a /clienthome

RECOMENDACIONES

Usar dos cookies, una para los datos y otra para la sesión
Ver el vídeo de teoría 14
