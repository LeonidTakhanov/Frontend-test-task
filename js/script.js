window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    const buttonText = button.getAttribute("data-button-text");
    const initialButtonSrc = button.getAttribute("data-button-initial");
    const openButtonSrc = button.getAttribute("data-button-open");

    button.addEventListener("click", function () {
      if (button.classList.contains("btn__green")) {
        button.classList.toggle("btn__open_green");
      } else {
        button.classList.toggle("btn__open_blue");
      }

      if (button.classList.contains("btn__open_green")) {
        button.innerHTML = `<img src="${openButtonSrc}" alt="${buttonText}" />${buttonText}`;
      } else if (button.classList.contains("btn__open_blue")) {
        button.innerHTML = `<img src="${openButtonSrc}" alt="${buttonText}" />${buttonText}`;
      } else {
        button.innerHTML = `<img src="${initialButtonSrc}" alt="${buttonText}" />`;
      }
    });
  });
});
