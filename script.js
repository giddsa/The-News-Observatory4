document.addEventListener("DOMContentLoaded", function() {
    fetch("news.json")
        .then(response => response.json())
        .then(newsData => {
            const newsSection = document.getElementById("news");

            newsData.forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.classList.add("news-card");

                const newsImage = document.createElement("img");
                newsImage.src = news.image;
                newsCard.appendChild(newsImage);

                const newsTitle = document.createElement("h3");
                newsTitle.textContent = news.title;
                newsCard.appendChild(newsTitle);

                const newsText = document.createElement("p");
                newsText.textContent = news.content;
                newsCard.appendChild(newsText);

                newsSection.appendChild(newsCard);
            });
        })
        .catch(error => console.error("خطأ في تحميل الأخبار:", error));
});