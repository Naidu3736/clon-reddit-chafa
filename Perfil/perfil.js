const contenidoPerfil = document.getElementById("contenidoPerfil");

function mostrarPublicaciones() {
  contenidoPerfil.innerHTML = `
    <h3 class="titulo-seccion">
        Publicaciones
    </h3>
    <article class="tarjeta ">
        <img class="imagenTarjeta" src="https://preview.redd.it/realistic-minecraft-v0-kwwt07nc0k5d1.png?auto=webp&s=c636e0b08f6dc68ea710b06de2678b3f525921fa">
        <div class="contenidoTarjeta">
            <h2>
                Volví a jugar Minecraft
            </h2>
            <p>
                Honestamente sigue siendo uno de los
                juegos más relajantes que existen.
            </p>
            <div class="estadisticaspost">
                <span>❤️ 230</span>
                <span>💬 52</span>
            </div>
        </div>
    </article>
 <article class="tarjeta ">
        <img class="imagenTarjeta" src="https://images.squarespace-cdn.com/content/v1/580fbaac440243d8731ffc57/46cb49b3-63d7-40e1-9cd0-540fbecdc39c/Lofi+Girl+16x9.jpeg">
        <div class="contenidoTarjeta">
            <h2>
                Música para trabajar de noche
            </h2>
            <p>
                Últimamente escucho mucho lo-fi y jazz
                mientras hago proyectos.
            </p>
            <div class="estadisticaspost">
                <span>❤️ 74</span>
                <span>💬 9</span>
            </div>
        </div>
    </article>

      <article class="tarjeta ">
    <img class="imagenTarjeta" src="https://media.vandal.net/m/42943/red-dead-redemption-2-20181025130125_18.jpg">
    <div class="contenidoTarjeta">
        <h2>
            Red Dead Redemption 2 sigue viéndose increíble
        </h2>
        <p>
            Pasaron años y todavía siento que ningún
            juego supera ciertos paisajes de RDR2.
        </p>
        <div class="estadisticaspost">
            <span>❤️ 230</span>
            <span>💬 41</span>
        </div>
    </div>
</article>

<article class="tarjeta ">
    <img class="imagenTarjeta" src="https://guionbajo.cl/wp-content/uploads/2020/09/AUDIFONOS-KZ-ZS10-PRO-09-600x398.jpg">
    <div class="contenidoTarjeta">
        <h2>
            Volví a usar audífonos con cable
        </h2>
        <p>
            Honestamente el sonido se siente muchísimo mejor
            que varios inalámbricos que probé.
        </p>
        <div class="estadisticaspost">
            <span>❤️ 71</span>
            <span>💬 9</span>
        </div>
    </div>
</article>
    `;

}


function mostrarComentarios() {
  contenidoPerfil.innerHTML = `
    <h3 class="titulo-seccion">
        Comentarios
    </h3>

    <div class="tarjeta ">
        <span class="publicacionesComentadas">
                Comentaste en:
        "¿Qué juego recomiendan para relajarse?"
        </span>
        <p>
          Stardew Valley es peligrosamente adictivo.
        </p>
    </div>

   <div class="tarjeta ">

        <span class="publicacionesComentadas">
            Comentaste en:
        "Películas que todos deberían ver"
        </span>

        <p>
            Aun no supero "La vida es Bella"
        </p>

    </div>
    
   <div class="tarjeta ">

        <span class="publicacionesComentadas">
            Comentaste en:
        "¿Qué hacen cuando no pueden dormir?"
        </span>

        <p>
            Normalmente termino viendo videos random a las 2 a.m.
        </p>

    </div>

   <div class="tarjeta ">

        <span class="publicacionesComentadas">
         Comentaste en:
    "¿Qué artista escuchan últimamente?"
        </span>

        <p>
             Últimamente escucho mucho The Weeknd de madrugada.
        </p>

    </div>

   <div class="tarjeta ">

        <span class="publicacionesComentadas">
            Comentaste en:
    "¿Si pudieran, qué película volverían a ver por primera vez?"
        </span>

        <p>
         Interstellar sin pensarlo demasiado.
        </p>

    </div>

    `;
}



function mostrarGuardados() {
  contenidoPerfil.innerHTML = `

    <h3 class="titulo-seccion">
        Guardados
    </h3>

    <article class="tarjeta ">

        <img class="imagenTarjeta" src="https://static.abc.es/media/tecnologia/2018/12/11/mejores-videojuegos-2018-montaje-k0vB--1248x698@abc.jpg">

        <div class="contenidoTarjeta">
            <h2>
                Top 10 videojuegos de la ultima decada
            </h2>
            <p>
                Post guardado el 22/05/2026
            </p>
        </div>
    </article>

    <article class="tarjeta ">

        <img class="imagenTarjeta" src="https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2025/04/rui_palha_1.jpg?resize=672%2C372&ssl=1">

        <div class="contenidoTarjeta">
            <h2>
               Fotografías tomadas con cámaras antiguas
            </h2>
            <p>
                 Post guardado el 14/05/2026
            </p>
        </div>
    </article>

    <article class="tarjeta ">

        <img class="imagenTarjeta" src="https://media.vandal.net/m/12-2024/2/202412215421216_1.jpg">

        <div class="contenidoTarjeta">
            <h2>
                Juegos relajantes para jugar de noche
            </h2>
            <p>
                Post guardado el 03/05/2026
            </p>
        </div>
    </article>

    <article class="tarjeta ">

        <img class="imagenTarjeta" src="https://imagenes.businessinsider.es/files/image_640_360/uploads/imagenes/2023/10/31/68bff6d0d15a2.jpeg">

        <div class="contenidoTarjeta">
            <h2>
               Videojuegos con las mejores bandas sonoras
            </h2>
            <p>
                Guardado el 26/04/2026
            </p>
        </div>
    </article>
    `;
}


function mostrarLikes() {
  contenidoPerfil.innerHTML = `

    <h3 class="titulo-seccion">
        Likes
    </h3>
    <article class="tarjeta ">
        <img class="imagenTarjeta" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugVk8TcTaFw58ksvOlkVllTvA9jjEoMtqKQ&s">
        <div class="contenidoTarjeta">
            <h2>
                ❤️ Miren mi colección de consolas retro
            </h2>
            <p>
                Me encanta ver setups llenos de consolas antiguas.
            </p>
        </div>

    </article>

    <article class="tarjeta ">
        <img class="imagenTarjeta" src="https://cdn-3.expansion.mx/dims4/default/382c7a4/2147483647/strip/true/crop/1200x630+0+10/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fd3%2F75%2F0660f3454d29977a82717557667b%2F31-discos.jpg">
        <div class="contenidoTarjeta">
            <h2>
                ❤️ Vinilos que deben comprar si o si.
            </h2>
            <p>
                Ni siquiera tengo un tocadiscos jajaj
            </p>
        </div>
    </article>

    <article class="tarjeta ">
        <img class="imagenTarjeta" src="https://www.shutterstock.com/shutterstock/videos/3747830775/thumb/11.jpg?ip=x480">
        <div class="contenidoTarjeta">
            <h2>
                ❤️ 2 semanas ensayando esta cancion, que tal me salió?
            </h2>
            <p>
                Suena genial, quisiera aprender a tocar piano
            </p>
        </div>

    </article>
    `;
}

/* Cargamos inicialmente los post */
mostrarPublicaciones();