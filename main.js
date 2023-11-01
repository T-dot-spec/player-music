let musicas = [
    { titulo: 'Agora Hills', artista: 'Doja Cat', source: 'music/SnapInsta.io - Doja Cat - Agora Hills (Lyrics) (128 kbps).mp3', img: 'image/WhatsApp Image 2023-09-25 at 19.45.15.jpeg' },
    { titulo: 'Endless Fashion', artista: 'Lil Uzi Vert feat. Nicki Minaj', source: 'music/SnapInsta.io - Lil Uzi Vert - Endless Fashion (Feat. Nicki Minaj) [Official Audio] (128 kbps).mp3', img: 'image/Lil Uzi Vert - Endless Fashion (Feat_ Nicki Minaj) [Official Audio].jpg' },
    { titulo: 'Needs', artista: 'Tinashe', source: 'music/SnapInsta.io - Tinashe - _Needs_ OFFICIAL VERSION (128 kbps).mp3', img: 'image/Tinashe_Needs.jpg' },
    { titulo: 'Umbrella', artista: 'Rihanna ft. Jay-Z', source: 'music/SnapInsta.io - Rihanna - Umbrella (Audio) ft. Jay-Z (128 kbps).mp3', img: 'image/download (1).jpg' }
];

// INICIO
let musica = document.querySelector('audio');
let musicaIndex = 0;

let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let imagem = document.querySelector('img');
let tempoDecorrido = document.querySelector('.tempo .inicio');
let duracaoMusica = document.querySelector('.tempo .fim');

nomeMusica.textContent = musicas[musicaIndex].titulo;
nomeArtista.textContent = musicas[musicaIndex].artista;
imagem.setAttribute('src', musicas[musicaIndex].img);
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    musicaIndex--;
    if (musicaIndex < 0) {
        musicaIndex = 2;
    }
    renderizarMusica(musicaIndex);
});

document.querySelector('.proximo').addEventListener('click', () => {
    musicaIndex++;
    if (musicaIndex > 2) {
        musicaIndex = 0;
    }
    renderizarMusica(musicaIndex);
});

// FUNÇÕES

function renderizarMusica(musicaIndex) {
    musica.setAttribute('src', musicas[musicaIndex].source);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;

        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

    document.body.append(musica);
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

// let musica = document.querySelector('audio');
// let indexMusica = 0;

// let duracaoMusica = document.querySelector('.fim');
// let imagem = document.querySelector('img');
// let nomeMusica = document.querySelector('.descricao h2');
// let nomeArtista = document.querySelector('.descricao i');

// renderizarMusica(indexMusica);

// // Eventos
// document.querySelector('.botao-play').addEventListener('click', tocarMusica);

// document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

// musica.addEventListener('timeupdate', atualizarBarra);

// document.querySelector('.anterior').addEventListener('click', () => {
//     indexMusica--;
//     if (indexMusica < 0) {
//         indexMusica = 2;
//     }
//     renderizarMusica(indexMusica);
// });

// document.querySelector('.proxima').addEventListener('click', () => {
//     indexMusica++;
//     if (indexMusica > 2){
//         indexMusica = 0;
//     }
//     renderizarMusica(indexMusica);
// });

// // Funções
// function renderizarMusica(index){
//     musica.setAttribute('src', musicas[index].src);
//     musica.addEventListener('loadeddata', () => {
//         nomeMusica.textContent = musicas[index].titulo;
//         nomeArtista.textContent = musicas[index].artista;
//         imagem.src = musicas[index].img;
//         duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
//     });
// }

// function tocarMusica(){
//     musica.play();
//     document.querySelector('.botao-pause').style.display = 'block';
//     document.querySelector('.botao-play').style.display = 'none';
// }

// function pausarMusica(){
//     musica.pause();
//     document.querySelector('.botao-pause').style.display = 'none';
//     document.querySelector('.botao-play').style.display = 'block';
// }

// function atualizarBarra(){
//     let barra = document.querySelector('progress');
//     barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
//     let tempoDecorrido = document.querySelector('.inicio');
//     tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
// }

// function segundosParaMinutos(segundos){
//     let campoMinutos = Math.floor(segundos / 60);
//     let campoSegundos = segundos % 60;
//     if (campoSegundos < 10){
//         campoSegundos = '0' + campoSegundos;
//     }

//     return campoMinutos+':'+campoSegundos;
// }