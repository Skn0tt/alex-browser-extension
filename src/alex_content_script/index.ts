import { getAlexErrors } from "./alex-errors";
import { displayErrors, hideErrors } from "./display-errors";

async function alexListener(evt: Event) {
  const target = evt.target as HTMLInputElement;
  const text = target.value;

  console.log(text)

  const errors = await getAlexErrors(text);
  if (errors.length === 0) {
    hideErrors(target);
  } else {
    displayErrors(errors, target);
  }
}

function addAlexListener(input: HTMLInputElement) {
  input.addEventListener("input", alexListener);
}

function getAllTextInputs(): HTMLInputElement[] {
  const inputCollection = document.getElementsByTagName("input");
  return Array.from(inputCollection);
}

function main() {
  const inputs = getAllTextInputs();
  inputs.forEach(addAlexListener);
}

main();