
  document.addEventListener("DOMContentLoaded", () => {
    const characterList = document.getElementById("character-list");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    let currentPage = 1;
  
    async function loadCharacters(page) {
      const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
  
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayCharacters(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    function displayCharacters(characters) {
      characterList.innerHTML = "";
  
      characters.forEach((character) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <p>${character.name}</p>
          <p>${character.species}</p>
        `;
        characterList.appendChild(li);
      });
    }
  
    function handlePageChange(direction) {
      if ((direction === "prev" && currentPage > 1) || direction === "next") {
        currentPage += direction === "prev" ? -1 : 1;
        loadCharacters(currentPage);
      }
    }
  
    prevPageButton.addEventListener("click", () => handlePageChange("prev"));
    nextPageButton.addEventListener("click", () => handlePageChange("next"));
  
    loadCharacters(currentPage);
  });
  


