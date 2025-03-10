
document.addEventListener("DOMContentLoaded", function () {
    let basePath = window.location.pathname.includes("institution") || window.location.pathname.includes("departements") ? "../" : "./";
  
    fetch(basePath + "../header.html")
      .then(response => {
        if (!response.ok) throw new Error("Header non trouvé");
        return response.text();
      })
      .then(data => {
        document.querySelector("header").innerHTML = data;
      })
      .catch(error => console.error("Erreur chargement header:", error));
  
    fetch(basePath + "../footer.html")
      .then(response => {
        if (!response.ok) throw new Error("Footer non trouvé");
        return response.text();
      })
      .then(data => {
        document.querySelector("footer").innerHTML = data;
      })
      .catch(error => console.error("Erreur chargement footer:", error));
  });
  
  