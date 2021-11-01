document.querySelector("ul").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const btn = e.target.closest("button");
    if (li && li.scrollLeft === 0) {
      li.scrollBy({
        left: 1,
        behavior: "smooth"
      });
    } else if (!btn && li) {
      li.scrollBy({
        left: -1,
        behavior: "smooth"
      });
    } else if (btn && li) {
      li.remove();
    }
  });
  