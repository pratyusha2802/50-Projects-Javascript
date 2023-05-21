const labels = document.querySelectorAll(".form-control label")

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 10}ms">${letter}</span>`
    )
    .join("")
})
