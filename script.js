const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const similarArtist = document.getElementById("similar-artist");
const resultPlaylist = document.getElementById('result-playlists');
const dividerText = document.querySelector('.divider-text'); // Referência ao texto da linha divisória

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

// function displayResults(result, searchTerm) {
//     resultPlaylist.classList.add("hidden");
//     resultArtist.innerHTML = '';
//     similarArtist.innerHTML = '';

//     const filteredArtists = result.filter(artist => 
//         artist.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Exibe os artistas encontrados no result-artist
//     if (filteredArtists.length > 0) {
//         filteredArtists.forEach(artist => {
//             const artistCard = document.createElement('div');
//             artistCard.classList.add('artist-card');

//             artistCard.innerHTML = `
//                 <div class="card-img">
//                     <img class="artist-img" src="${artist.urlImg}" />
//                     <div class="play">
//                         <span class="fa fa-solid fa-play"></span>
//                     </div>
//                 </div>
//                 <div class="card-text">
//                     <span class="artist-name">${artist.name}</span>
//                     <span class="artist-categorie">Artista</span>
//                 </div>
//             `;
//             resultArtist.appendChild(artistCard);
//         });

//         // Se houver resultados, o texto da linha divisória é "Recomendado"
//         dividerText.textContent = "Recomendado";
//     } else {
//         // Se não houver resultados, o texto da linha divisória é "Experimente outras Músicas"
//         dividerText.textContent = "Experimente outras Músicas";
//     }

//     resultArtist.classList.remove('hidden');

//     // Busca artistas recomendados com base na primeira letra do termo de busca
//     const firstLetter = searchTerm.charAt(0).toUpperCase();
//     fetch(`http://localhost:3000/artists?name_like=^${firstLetter}`)
//         .then((response) => response.json())
//         .then((similarResults) => displaySimilarArtists(similarResults));
// }

// function requestApi(searchTerm) {
//     const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => displayResults(result, searchTerm));
// }

// function displayResults(result, searchTerm) {
//     resultPlaylist.classList.add("hidden");
//     resultArtist.innerHTML = '';
//     similarArtist.innerHTML = '';

//     const filteredArtists = result.filter(artist => 
//         artist.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     // Exibe os artistas encontrados no result-artist
//     if (filteredArtists.length > 0) {
//     filteredArtists.forEach(artist => {
//         const artistCard = document.createElement('div');
//         artistCard.classList.add('artist-card');

//         artistCard.innerHTML = `
//             <div class="card-img">
//                 <img class="artist-img" src="${artist.urlImg}" />
//                 <div class="play">
//                     <span class="fa fa-solid fa-play"></span>
//                 </div>
//             </div>
//             <div class="card-text">
//                 <span class="artist-name">${artist.name}</span>
//                 <span class="artist-categorie">Artista</span>
//             </div>
//         `;
//         resultArtist.appendChild(artistCard);
//     });

//         // Se houver resultados, o texto da linha divisória é "Recomendado"
//         dividerText.textContent = "Recomendado";
//     } else if (resultArtist){
//         // Se não houver resultados, o texto da linha divisória é "Experimente outras Músicas"
//         dividerText.textContent = "Experimente outras Músicas";
//     } else {
//         dividerText.textContent = "Putinhas do Putin";
//     }

//     resultArtist.classList.remove('hidden');

//     // Busca artistas recomendados com base na primeira letra do termo de busca
//     const firstLetter = searchTerm.charAt(0).toLowerCase(); // Pegando a primeira letra minúscula
//     const similarArtists = result.filter(artist => 
//         artist.name.toLowerCase().includes(firstLetter) // Verificando se a letra está no nome do artista
//     );
//     displaySimilarArtists(similarArtists);
// }

// function requestApi(searchTerm) {
//     const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => displayResults(result, searchTerm));
// }

// function displaySimilarArtists(similarResults) {
//     similarArtist.innerHTML = '';

//     // Exibe os artistas recomendados no similar-artist
//     similarResults.forEach(artist => {
//         const artistCard = document.createElement('div');
//         artistCard.classList.add('artist-card');

//         artistCard.innerHTML = `
//             <div class="card-img">
//                 <img class="artist-img" src="${artist.urlImg}" />
//                 <div class="play">
//                     <span class="fa fa-solid fa-play"></span>
//                 </div>
//             </div>
//             <div class="card-text">
//                 <span class="artist-name">${artist.name}</span>
//                 <span class="artist-categorie">Artista</span>
//             </div>
//         `;
//         similarArtist.appendChild(artistCard);
//     });

//     similarArtist.classList.remove('hidden');
// }


function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    resultArtist.innerHTML = '';
    similarArtist.innerHTML = '';

    const filteredArtists = result.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Se não houver resultados, esconder a área de resultados
    if (filteredArtists.length === 0) {
        resultArtist.classList.add('hidden');  // Esconde o resultado
        dividerText.textContent = "Não encontramos artistas com esse nome"; // Mensagem de "nenhum resultado"
        return; // Para a execução aqui se não houver resultados
    }

    // Exibe os artistas encontrados no result-artist
    filteredArtists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <div class="card-img">
                <img class="artist-img" src="${artist.urlImg}" />
                <div class="play">
                    <span class="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div class="card-text">
                <span class="artist-name">${artist.name}</span>
                <span class="artist-categorie">Artista</span>
            </div>
        `;
        resultArtist.appendChild(artistCard);
    });

    // Se houver resultados, o texto da linha divisória é "Recomendado"
    dividerText.textContent = "Recomendado";
    resultArtist.classList.remove('hidden');  // Exibe os resultados

    // Busca artistas recomendados com base na primeira letra do termo de busca
    const firstLetter = searchTerm.charAt(0).toUpperCase();
    fetch(`http://localhost:3000/artists?name_like=${firstLetter}`)
        .then((response) => response.json())
        .then((similarResults) => displaySimilarArtists(similarResults));
}


document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        similarArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});


document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        similarArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        similarArtist.classList.add('hidden');
        dividerText.textContent = "Recomendado"; // Restaura o texto padrão
        return;
    }

    requestApi(searchTerm);
});








// const searchInput = document.getElementById('search-input');
// const resultArtist = document.getElementById("result-artist");
// const similarArtist = document.getElementById("similar-artist");
// const resultPlaylist = document.getElementById('result-playlists');

// function requestApi(searchTerm) {
//     const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => displayResults(result, searchTerm));
// }

// function displayResults(result, searchTerm) {
//     resultPlaylist.classList.add("hidden");
//     resultArtist.innerHTML = '';
//     similarArtist.innerHTML = '';

//     const filteredArtists = result.filter(artist => 
//         artist.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     filteredArtists.forEach(artist => {
//         const artistCard = document.createElement('div');
//         artistCard.classList.add('artist-card');

//         artistCard.innerHTML = `
//             <div class="card-img">
//                 <img class="artist-img" src="${artist.urlImg}" />
//                 <div class="play">
//                     <span class="fa fa-solid fa-play"></span>
//                 </div>
//             </div>
//             <div class="card-text">
//                 <span class="artist-name">${artist.name}</span>
//                 <span class="artist-categorie">Artista</span>
//             </div>
//         `;
//         resultArtist.appendChild(artistCard);
//     });

//     resultArtist.classList.remove('hidden');

//     // Busca artistas recomendados com base na primeira letra do termo de busca
//     const firstLetter = searchTerm.charAt(0).toUpperCase();
//     fetch(`http://localhost:3000/artists?name_like=^${firstLetter}`)
//         .then((response) => response.json())
//         .then((similarResults) => displaySimilarArtists(similarResults));
// }

// function displaySimilarArtists(similarResults) {
//     similarArtist.innerHTML = '';

//     similarResults.forEach(artist => {
//         const artistCard = document.createElement('div');
//         artistCard.classList.add('artist-card');

//         artistCard.innerHTML = `
//             <div class="card-img">
//                 <img class="artist-img" src="${artist.urlImg}" />
//                 <div class="play">
//                     <span class="fa fa-solid fa-play"></span>
//                 </div>
//             </div>
//             <div class="card-text">
//                 <span class="artist-name">${artist.name}</span>
//                 <span class="artist-categorie">Artista</span>
//             </div>
//         `;
//         similarArtist.appendChild(artistCard);
//     });

//     similarArtist.classList.remove('hidden');
// }

// document.addEventListener('input', function () {
//     const searchTerm = searchInput.value.toLowerCase().trim();

//     if (searchTerm === '') {
//         resultPlaylist.classList.remove('hidden');
//         resultArtist.classList.add('hidden');
//         similarArtist.classList.add('hidden');
//         return;
//     }

//     requestApi(searchTerm);
// });






// imersão 4 

// const searchInput = document.getElementById('search-input');
// const resultArtist = document.getElementById("result-artist");
// const similarArtist = document.getElementById("similar-artist");
// const resultPlaylist = document.getElementById('result-playlists');

// function requestApi(searchTerm) {
//     const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => displayResults(result, searchTerm));
// }

// function displayResults(result, searchTerm) {
//     resultPlaylist.classList.add("hidden");
//     const gridContainer = document.querySelector('.grid-container');
//     gridContainer.innerHTML = ''; // Limpa os resultados anteriores    

//     const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm) );


//   filteredArtists.forEach(artist => {    
//       const artistCard = document.createElement('div');
//       artistCard.classList.add('artist-card');

//       artistCard.innerHTML = `
//           <div class="card-img">
//               <img class="artist-img" src="${artist.urlImg}" />
//               <div class="play">
//                   <span class="fa fa-solid fa-play"></span>
//               </div>
//           </div>
//       <div class="card-text">              
//               <span class="artist-name">${artist.name}</span>
//               <span class="artist-categorie">Artista</span>
//           </div>
//       `;
//        gridContainer.appendChild(artistCard);
//   });

//   resultArtist.classList.remove('hidden');

//     // Remove o bloco .B-div anterior, se existir
//     const existingBdiv = document.querySelector('.B-div');
//     if (existingBdiv) {
//         existingBdiv.remove();
//     }

//     // Cria o bloco .B-div e o adiciona logo após o result-artist
//     const testDiv = document.createElement('div');
//     testDiv.classList.add('B-div');
//     testDiv.textContent = 'oi'; // Mensagem de teste
//     resultArtist.insertAdjacentElement('afterend', testDiv); // Adiciona logo após o result-artist

// }

// // function displayResults(result, searchTerm) {
// //     // Oculta a lista de playlists
// //     resultPlaylist.classList.add("hidden");

// //     // Seleciona o container onde os resultados serão exibidos
// //     const gridContainer = document.querySelector('.grid-container');
// //     gridContainer.innerHTML = ''; // Limpa os resultados anteriores

// //     // Cria o bloco de teste
// //     const testDiv = document.createElement('div');
// //     testDiv.classList.add('B-div');
// //     testDiv.textContent = 'oi'; // Mensagem de teste

// //     // Cria o 2º bloco de teste
// //     const testDi = document.createElement('div');
// //     testDi.classList.add('B-div');
// //     testDi.textContent = 'oi'; // Mensagem de teste    

// //     // Adiciona o bloco ao container
// //     gridContainer.appendChild(testDiv);
// //     gridContainer.appendChild(testDi);

// //     // Exibe o container de resultados
// //     resultArtist.classList.remove('hidden');
// // }

// document.addEventListener('input', function () {
//     const searchTerm = searchInput.value.toLowerCase().trim();

//     if (searchTerm === '') {
//         resultPlaylist.classList.remove('hidden');
//         resultArtist.classList.add('hidden');
//         similarArtist.classList.add('hidden');
//         return;
//     }

//     // if (searchTerm === '') {
//     //     resultPlaylist.classList.remove('hidden');
//     //     resultArtist.classList.add('hidden');
        
//     //     // Remove o bloco .B-div se o campo estiver vazio
//     //     const existingBdiv = document.querySelector('.B-div');
//     //     if (existingBdiv) {
//     //     existingBdiv.remove();

//     // }
//     //     return;
//     // }

//     requestApi(searchTerm);
// });



// // const searchInput = document.getElementById('search-input');
// // const resultArtist = document.getElementById("result-artist");
// // const resultPlaylist = document.getElementById('result-playlists');

// // function requestApi(searchTerm) {
// //     const url = `http://localhost:3000/artists?name_like=${searchTerm}`
// //     fetch(url)
// //         .then((response) => response.json())
// //         .then((result) => displayResults(result))
// // }

// // function displayResults(result) {
// //     resultPlaylist.classList.add("hidden")
// //     const artistName = document.getElementById('artist-name');
// //     const artistImage = document.getElementById('artist-img');

// //     result.forEach(element => {
// //         artistName.innerText = element.name;
// //         artistImage.src = element.urlImg;
// //     });

// //     resultArtist.classList.remove('hidden');
// // }

// // document.addEventListener('input', function () {
// //     const searchTerm = searchInput.value.toLowerCase();
// //     if (searchTerm === '') {
// //         resultPlaylist.classList.add('hidden');
// //         resultArtist.classList.remove('hidden');
// //         return
// //     }
    
// //     requestApi(searchTerm);
// // })

// // imersão 4 
