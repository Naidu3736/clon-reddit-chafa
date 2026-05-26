const globalPosts = [
    {
        id: 1,
        author: 'u/astr4x_0',
        author_avatar: 'images/Ryoicon.jpg',
        time: 'Hace 10 minutos',
        title: 'Bonito ASCII Art',
        content_text: 'Miren este bonito arte ASCII!',
        post_image: 'images/imagenpublicacion.jpg',
        community: 'x/FCC',
        communityId: 'fcc'
    },
    {
        id: 2,
        author: 'u/jvl7_0',
        author_avatar: 'images/avatar2.jpg',
        time: 'Hace 40 minutos',
        title: 'Que tal mi escritorio',
        content_text: 'I use arch btw',
        post_image: 'images/postp2.jpg',
        community: 'x/FCC',
        communityId: 'fcc'
    },
    {
        id: 3,
        author: 'u/moonlight120',
        author_avatar: 'images/avatar3.jpg',
        time: 'Hace 3 horas',
        title: 'Cual es su proyecto mas reciente?',
        content_text: '',
        post_image: 'images/postp3.jpg',
        community: 'x/FCC',
        communityId: 'fcc'
    },
    {
        id: 4,
        author: 'u/mrrobot_99',
        author_avatar: 'images/Mrroboticon.jpg',
        time: 'Hace 2 horas',
        title: 'Duda con Nmap, ¿Qué flags recomiendan para evasión de firewalls?',
        content_text: '',
        post_image: 'images/posth1.gif',
        community: 'x/Hacking',
        communityId: 'hacking'
    },
    {
        id: 5,
        author: 'u/ilovearch123',
        author_avatar: 'images/avatarh2.jpg',
        time: 'Hace 5 horas',
        title: 'Como empezar en el mundo del hacking?',
        content_text: 'Soy nuevo en esto, ¿alguna recomendación?',
        post_image: 'images/posth2.jpg',
        community: 'x/Hacking',
        communityId: 'hacking'
    },
    {
        id: 6,
        author: 'u/Astra',
        author_avatar: 'images/Ryoicon.jpg',
        time: 'Hace 5 horas',
        title: 'WIP',
        content_text: '',
        post_image: 'images/postart.png',
        community: 'x/Arte Digital',
        communityId: 'arte_digital'
    },
    {
        id: 7,
        author: 'u/codexmaster',
        author_avatar: '',
        time: 'Hace 3 horas',
        title: '¿Alguien ha trabajado con algoritmos de optimización?',
        content_text: 'Estoy buscando información sobre algoritmos de optimización para un proyecto personal.',
        post_image: '',
        community: 'x/Algoritmos',
        communityId: 'algoritmos'
    },
    {
        id: 8,
        author: 'u/datascientist_01',
        author_avatar: '',
        time: 'Hace 1 hora',
        title: '¿Cómo manejar datos faltantes en un dataset?',
        content_text: 'Estoy trabajando con un dataset que tiene valores faltantes. ¿Cuáles son las mejores prácticas para manejar esto?',
        post_image: '',
        community: 'x/Minería de Datos',
        communityId: 'mineria_datos'
    }
];

function getRandomPosts(amount = 5) {
    const postsCopy = [...globalPosts];
    
    for (let i = postsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [postsCopy[i], postsCopy[j]] = [postsCopy[j], postsCopy[i]];
    }
    
    return postsCopy.slice(0, amount);
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'publicacionenmuro';
    
    const header = document.createElement('div');
    header.className = 'encabezadopublicacion';
    
    const avatar = document.createElement('div');
    avatar.className = 'avatarminiatura';
    if (post.author_avatar) {
        avatar.style.backgroundImage = `url('${post.author_avatar}')`;
        avatar.style.backgroundSize = 'cover';
        avatar.style.backgroundPosition = 'center';
    } else {
        avatar.style.backgroundColor = '#0066ff';
    }
    
    const authorInfo = document.createElement('span');
    authorInfo.textContent = `${post.author} • ${post.time}`;
    
    header.appendChild(avatar);
    header.appendChild(authorInfo);
    
    const title = document.createElement('h3');
    title.className = 'titulopublicacion';
    title.textContent = post.title;
    
    const content = document.createElement('div');
    content.className = 'contenidopublicacion';
    
    if (post.content_text) {
        const text = document.createElement('p');
        text.textContent = post.content_text;
        content.appendChild(text);
    }
    
    if (post.post_image) {
        const image = document.createElement('img');
        image.src = post.post_image;
        image.style.maxWidth = '100%';
        image.style.borderRadius = '12px';
        image.style.marginTop = '12px';
        content.appendChild(image);
    }
    
    postDiv.appendChild(header);
    postDiv.appendChild(title);
    postDiv.appendChild(content);
    
    return postDiv;
}

function renderFeed(postAmount = 5) {
    const feedContent = document.querySelector('.feed-content');
    
    if (!feedContent) {
        console.error('Feed container not found');
        return;
    }
    
    feedContent.innerHTML = '';
    
    const randomPosts = getRandomPosts(postAmount);
    
    randomPosts.forEach(post => {
        const postElement = createPostElement(post);
        feedContent.appendChild(postElement);
        
        const separator = document.createElement('br');
        feedContent.appendChild(separator);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeed(5);
});