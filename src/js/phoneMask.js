import IMask from "imask";

export function phoneMask() {
  const inputs = document.getElementsByClassName("js-phone-mask");
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };
  if (inputs.length) {
    Array.from(inputs).forEach((input) => {
      IMask(input, maskOptions);
    });
  }
}
