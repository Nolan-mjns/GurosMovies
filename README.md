# Prueba técnica para la posición de front-end @ Guros

Proyecto realizado para prueba técnica con los requisitos:

- Crear el maquetado usando figma como referencia
    - https://www.figma.com/design/7cSQIukYC87cttQi0P2ZErPruebaTecnicaFront?node-id=0-1&t=vb1RWzMhVoVGo21j-1
- Uso del API
    - https://developer.themoviedb.org/docs/getting-started
- Crear las funcionalidades descritas en el contexto
    - Crear página principal donde estarán las tarjetas de cada película
    - Mostrar 5 películas por página de manera aleatoria*
    - Agregar paginado
    - Crear tarjeta de película con:
        - portada
        - nombre
        - tag de género
        - calificación
- Crear detalle de la tarjeta con:
    - modal cuando se seleccione
    - descripción de la película.
    - calificación

- Versión desktop y mobile*

- Usar los lenguajes (mínimo)
    - [x] React
    - Next
    - [x] Typescript plus
    - [x] Tailwind

## [CLICK PARA VER DEMO PROYECTO](https://66754d06edca865679351b1e--ornate-gecko-b389d6.netlify.app) 

## Indicaciones
1. Clona el repositorio:

    ```bash
    git clone https://github.com/Nolan-mjns/GurosMovies.git
    ```

2. Ve al directorio del proyecto:

    ```bash
    cd GurosMovies
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno necesarias. 
    - Variables de entorno: 
        #### VITE_MOVIE_DB_TOKEN= Aquí debe estar tu token para la API de TMDB
        #### VITE_API_BASE_URL= https://api.themoviedb.org/3

6. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Compilación para Producción

Si deseas compilar el proyecto para producción, ejecuta:

```bash
npm run build
```
## Notas y dudas

### Notas
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- 1*: De momento no cuenta con mostrar películas aleatoriamente, sino en el orden que la API me brinda.

- 2*: De momento no cuenta con versión movil. NOTA: Me enfoqué mayormente en la funcionalidad y fidelidad del diseño web acordé al Figma brindado, respetando lo más posible las medidas, creando paleta de color global, fuentes, etc. Lamento no poder mostrar en estos momentos una versión movil.

### Dudas

- Debido a la hora en que estaba trabajando esta etapa no pude enviar un mensaje para esta duda: ¿La calificación brindada por el usuario debe ser con el endpoint brindado por la API o debe ser una simulación?
    - Al no tener esto muy claro, opté por simular la calificación de la película, botón, estrellas, popup, etc. Debido a que, según entendí en la API, es necesario que una persona inicie sesion para obtener un sessionKey/sessionID
    - No encontré una pantalla en Figma acerca del inicio de sesión de usuario

### COMENTARIOS
- Comunmente trato de crear mis variables, clases, funciones, etc. Utilizando Inglés, sin embargo hay veces que, por costumbre, algunos elementos tengan nombres en Español, espero no sea un inconveniente, es algo que sigo trabajando para adaptarme a tal practica.

- Este es de mis primeros proyectos realizados con Typescript, estuve investigando y adaptandome a las diferencias que tiene con Javascript, cualquier sugerencia, comentario, consejo es bien recibida, me emociona mucho aprender esta tecnología.

- Comunmente cuando tengo alguna prueba técnica, utilizo dicha prueba para seguir mejorandola en un futuro por lo cual, si tengo la autorización, me gustaría seguir actualizando estre proyecto a futuro, independientemente del resultado, haganme saber si estan de acuerdo con ello, respeto mucho la confidencialidad de las empresas, por lo cúal me gustaría saber su respuesta al respecto.

#### Por hacer:
- Resultados aleatorios
- Versión responsiva: movil

## Muchas gracias por la atención a mi proyecto y por esta gran oportunidad, soy una persona abierta al feedback así que cualquier crítica constructiva es muy bien recibida.


#### - Atte: José Nolan

