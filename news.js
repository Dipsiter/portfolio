const API_KEY = "2ec308b32a3245e0ada4046513be7b87";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
    });

    

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    if (isImageVisible) {
        // Hide the image
        image.style.display = "none";
    } else {
        // Show the image
        image.style.display= "block";
        image.style.visibility= "visible"; 
    }

    // Toggle the visibility state
    //isImageVisible = !isImageVisible;
    setTimeout(function() {
        image.style.display = "none";
    }, 1000);
    
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}
let isImageVisible = false; // Variable to track image visibility

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");
const image = document.getElementById("content");


searchButton.addEventListener("click", function()  {
    
    // Set a timeout to hide the image after 1 second
    if (isImageVisible) {
        // Hide the image
        image.style.display = "none";
    } else {
        // Show the image
        image.style.display= "block";
        image.style.visibility= "visible"; 
    }

    // Toggle the visibility state
    //isImageVisible = !isImageVisible;
    setTimeout(function() {
        image.style.display = "none";
    }, 1000);
    
    
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});