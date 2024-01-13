const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");
const form = document.querySelector("form");
const commentList = document.getElementById("comment-list");

form.addEventListener("submit", (event) => {
  //Empêcher la soumission du formulaire par défaut
  event.preventDefault();

  //Vérifier les erreurs pour chaque champ
  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    showError();
  } else {
    //Si aucun champ est vide, appeller la fonction
    createComment();
  }
});

//Afficher le message d'erreur
function showError() {
  errorMessage.style.display = "block";
}

//Création du nouveau commentaire
function createComment() {
  console.log("fonction appelée");

  //Création des nouveaux éléments
  const newDiv1 = document.createElement("div");
  const newDiv2 = document.createElement("div");
  const newH3 = document.createElement("h3");
  const newDiv3 = document.createElement("div");
  const newP = document.createElement("p");
  console.log("éléments créés");

  //Récupération des valeurs
  newTextH3 = document.createTextNode(firstName.value + " " + lastName.value);
  newTextP = document.createTextNode(message.value);
  console.log("valeurs récupérées");

  //Récupération des classes CSS
  newDiv1.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
  newDiv2.classList.add("flex-1", "py-10");
  newH3.classList.add("font-medium", "text-gray-900");
  newDiv3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
  console.log("classes CSS récupérées");

  //Hiérarchisation des nouveaux éléments
  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(newH3);
  newDiv2.appendChild(newDiv3);
  newDiv3.appendChild(newP);
  newH3.appendChild(newTextH3);
  newP.appendChild(newTextP);
  console.log("éléments hiérarchisés");

  //Publication du commentaire
  commentList.appendChild(newDiv1);
  console.log("commentaire publié");

  // Effacer le contenu des champs du formulaire
  firstName.value = "";
  lastName.value = "";
  message.value = "";
  console.log("contenu des champs effacé");

  //Masquer le message d'erreur
  function hideError() {
    errorMessage.style.display = "none";
    console.log("message d'erreur masqué");
  }

  hideError();
}
