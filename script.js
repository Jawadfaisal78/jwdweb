// Simple fade-in animation for articles
document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".article");
  articles.forEach((article, index) => {
    setTimeout(() => {
      article.style.opacity = 1;
      article.style.transform = "translateY(0)";
    }, index * 200);
  });
});

