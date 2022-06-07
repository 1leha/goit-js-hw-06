const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", () => {
  inputRef.value.length <= inputRef.dataset.length
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
});
