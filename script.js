const quiz = [
  {q:"What does `margin` do in CSS?", a:"Inside", b:"Outside", c:"Border", d:"Font", cKey:"b"},
  {q:"Which property sets the line around an element?", a:"padding", b:"margin", c:"border", d:"outline", cKey:"c"},
  {q:"Can `padding` have negative values?", a:"Yes", b:"No", c:"Sometimes", d:"Only in grid", cKey:"b"},
  {q:"Order in box model (inside→outside)?", a:"Margin→Border→Padding→Content", b:"Content→Padding→Border→Margin", c:"Border→Content→Margin→Padding", d:"Padding→Content→Margin→Border", cKey:"b"}
];

const container = document.getElementById("quizContainer");
quiz.forEach((q,i) => {
  let block = document.createElement("div");
  block.className = "question-block";
  block.innerHTML = `
    <h3>${i+1}. ${q.q}</h3>
    ${["a","b","c","d"].map(k => `<div class="option" onclick="selectAnswer(this,'${q.cKey}','${k}')">${q[k]}</div>`).join("")}
    <p class="correct-answer-text">Correct Answer: ${q[q.cKey]}</p>
  `;
  container.appendChild(block);
});

function selectAnswer(opt, key, k) {
  let block = opt.parentElement;
  let opts = block.querySelectorAll(".option");
  let ans = block.querySelector(".correct-answer-text");

  if ([...opts].some(o => o.classList.contains("correct")||o.classList.contains("wrong"))) return;

  if (k === key) opt.classList.add("correct");
  else {
    opt.classList.add("wrong");
    opts.forEach(o => { if(o.innerText === ans.innerText.replace("Correct Answer: ","")) o.classList.add("correct"); });
    ans.style.display = "block";
  }
}