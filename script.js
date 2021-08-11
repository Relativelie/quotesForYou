const button = document.querySelector(".btn");
const par = document.querySelector(".par");

const quotes = ["« Help me, Obi-Wan Kenobi. You’re my only hope.» — Leia Organa",
    "« The Force will be with you. Always.» — Obi-Wan Kenobi",
    "« Never tell me the odds!» — Han Solo",
    "You're a little scary sometimes, you know that? Brilliant ... but scary.» — Ron Weasley",
    "«To the well-organized mind, death is but the next great adventure.» ― Albus Dumbledore",
    "«It does not do well to dwell on dreams and forget to live.» ― Albus Dumbledore",
    "«I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.» ― Hermione Granger",
    "«Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.»"
]
button.addEventListener("click", () => {
    par.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
})