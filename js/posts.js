function getAllPostsFromCommunities() {
    const allPosts = [];
    
    baseDatos.comunidades.forEach(comunidad => {
        (comunidad.muro || []).forEach(post => {
            const cleanPath = (path) => path ? path.replace(/^\.\.\//, '') : '';
            
            allPosts.push({
                author: post.autor,
                author_avatar: cleanPath(post.avatar_autor),
                time: post.tiempo,
                title: post.titulo,
                content_text: post.contenido_texto || '',
                post_image: cleanPath(post.imagen_publicacion),
                community: comunidad.nombre
            });
        });
    });
    
    return allPosts;
}

function getRandomPosts(amount = 5) {
    const posts = getAllPostsFromCommunities();
    for (let i = posts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [posts[i], posts[j]] = [posts[j], posts[i]];
    }
    return posts.slice(0, amount);
}

function renderFeed(amount = 5) {
    const container = document.querySelector('.feed-content');
    if (!container) return;
    
    const posts = getRandomPosts(amount);
    
    if (posts.length === 0) {
        container.innerHTML = '<div class="publicacionenmuro" style="text-align:center;padding:40px">No hay publicaciones</div>';
        return;
    }
    
    container.innerHTML = posts.map(post => `
        <div class="publicacionenmuro">
            <div class="encabezadopublicacion">
                <div class="avatarminiatura" style="${post.author_avatar ? `background-image:url('${post.author_avatar}')` : 'background-color:#0066ff'};background-size:cover;background-position:center"></div>
                <span>${post.author} • ${post.time}</span>
            </div>
            <h3 class="titulopublicacion">${post.title}</h3>
            <div class="contenidopublicacion">
                ${post.content_text ? `<p>${post.content_text.replace(/<br\s*\/?>/gi, ' ')}</p>` : ''}
                ${post.post_image ? `<img src="${post.post_image}" style="max-width:100%;border-radius:12px;margin-top:12px">` : ''}
            </div>
        </div>
        <br>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof baseDatos !== 'undefined') renderFeed(5);
});