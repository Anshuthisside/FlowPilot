const statusEl = document.getElementById("demoStatus");
const runButton = document.getElementById("runWorkflow");
const runLabel = document.getElementById("runLabel");
const completedCount = document.getElementById("completedCount");
const resetDemo = document.getElementById("resetDemo");

let completed = 2;

document.querySelectorAll("[data-complete]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.done === "true") return;
    button.dataset.done = "true";
    button.textContent = "Done";
    button.style.background = "#b7f36a";
    button.style.borderColor = "#b7f36a";
    completed += 1;
    completedCount.textContent = completed;
    statusEl.textContent = "Nice. That request is marked complete in this local demo.";
  });
});

runButton.addEventListener("click", () => {
  runButton.disabled = true;
  runLabel.textContent = "Running sample workflow…";
  statusEl.textContent = "Reviewing context → preparing next step…";

  window.setTimeout(() => {
    runLabel.textContent = "Workflow ready";
    statusEl.textContent = "Done. The suggested next step is ready for human review.";
    runButton.disabled = false;
  }, 1100);
});

resetDemo.addEventListener("click", () => {
  completed = 2;
  completedCount.textContent = completed;
  document.querySelectorAll("[data-complete]").forEach((button) => {
    button.dataset.done = "false";
    button.textContent = "Complete";
    button.removeAttribute("style");
  });
  runLabel.textContent = "Run sample workflow";
  statusEl.textContent = "Interactive preview · nothing is sent anywhere.";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
