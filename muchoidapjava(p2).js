document.addEventListener("DOMContentLoaded", function() {
    const categoryHeadings = document.querySelectorAll(".category-heading");
    
    categoryHeadings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            const faqQuestions = this.nextElementSibling;
            if (faqQuestions.style.display === "block") {
                faqQuestions.style.display = "none";
            } else {
                faqQuestions.style.display = "block";
            }
        });
    });
    
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
