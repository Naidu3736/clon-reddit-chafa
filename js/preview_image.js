// Vista previa para banner
const bannerInput = document.getElementById('banner');
const vistaPreviaBanner = document.getElementById('vistaPreviaBanner');

if (bannerInput && vistaPreviaBanner) {
    bannerInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                vistaPreviaBanner.innerHTML = `
                    <div class="imagen-preview">
                        <img src="${event.target.result}" alt="Vista previa banner">
                        <button type="button" class="btn-remove-image" onclick="eliminarBanner()">✕</button>
                    </div>
                `;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Vista previa para logo
const logoInput = document.getElementById('logo');
const vistaPreviaLogo = document.getElementById('vistaPreviaLogo');

if (logoInput && vistaPreviaLogo) {
    logoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                vistaPreviaLogo.innerHTML = `
                    <div class="imagen-preview">
                        <img src="${event.target.result}" alt="Vista previa logo">
                        <button type="button" class="btn-remove-image" onclick="eliminarLogo()">✕</button>
                    </div>
                `;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Vista previa para imagen del post
const imagenInput = document.getElementById('imagen');
const vistaPreviaImagen = document.getElementById('vistaPreviaImagen');

if (imagenInput && vistaPreviaImagen) {
    imagenInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                vistaPreviaImagen.innerHTML = `
                    <div class="imagen-preview">
                        <img src="${event.target.result}" alt="Vista previa imagen">
                        <button type="button" class="btn-remove-image" onclick="eliminarImagen()">✕</button>
                    </div>
                `;
            };
            reader.readAsDataURL(file);
        }
    });
}

// ========== FUNCIONES PARA ELIMINAR ==========
function eliminarBanner() {
    const bannerInput = document.getElementById('banner');
    const vistaPreviaBanner = document.getElementById('vistaPreviaBanner');
    if (bannerInput) bannerInput.value = '';
    if (vistaPreviaBanner) vistaPreviaBanner.innerHTML = '';
}

function eliminarLogo() {
    const logoInput = document.getElementById('logo');
    const vistaPreviaLogo = document.getElementById('vistaPreviaLogo');
    if (logoInput) logoInput.value = '';
    if (vistaPreviaLogo) vistaPreviaLogo.innerHTML = '';
}

function eliminarImagen() {
    const imagenInput = document.getElementById('imagen');
    const vistaPreviaImagen = document.getElementById('vistaPreviaImagen');
    if (imagenInput) imagenInput.value = '';
    if (vistaPreviaImagen) vistaPreviaImagen.innerHTML = '';
}

// ========== FORMULARIO CREATE COMMUNITY ==========
const comunidadForm = document.getElementById('comunidadForm');
if (comunidadForm) {
    comunidadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre');
        const descripcion = document.getElementById('descripcion');
        const categoria = document.getElementById('categoria');
        const mensajeDiv = document.getElementById('mensaje');
        
        if (!nombre || !descripcion || !categoria) {
            if (mensajeDiv) {
                mensajeDiv.textContent = 'Error: Elementos del formulario no encontrados';
                mensajeDiv.className = 'mensaje error';
                mensajeDiv.style.display = 'block';
                setTimeout(() => {
                    mensajeDiv.style.display = 'none';
                }, 3000);
            }
            return;
        }
        
        if (mensajeDiv) {
            mensajeDiv.textContent = `¡Comunidad x/${nombre.value} creada exitosamente!`;
            mensajeDiv.className = 'mensaje success';
            mensajeDiv.style.display = 'block';
            
            setTimeout(() => {
                mensajeDiv.style.display = 'none';
            }, 3000);
        }
    });
}

// ========== FORMULARIO CREATE POST ==========
const postForm = document.getElementById('postForm');
if (postForm) {
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const titulo = document.getElementById('titulo');
        const contenido = document.getElementById('contenido');
        const mensajeDiv = document.getElementById('mensaje');
        
        if (!titulo || !contenido) {
            if (mensajeDiv) {
                mensajeDiv.textContent = 'Error: Elementos del formulario no encontrados';
                mensajeDiv.className = 'mensaje error';
                mensajeDiv.style.display = 'block';
                setTimeout(() => {
                    mensajeDiv.style.display = 'none';
                }, 3000);
            }
            return;
        }

        if (mensajeDiv) {
            mensajeDiv.textContent = `¡Post creada exitosamente!`;
            mensajeDiv.className = 'mensaje success';
            mensajeDiv.style.display = 'block';
            
            setTimeout(() => {
                mensajeDiv.style.display = 'none';
            }, 3000);
        }
    });
}