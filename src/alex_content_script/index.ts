import { getAlexErrors } from "./alex-errors";
import { displayErrors, hideErrors } from "./display-errors";
import * as _ from "lodash";

async function alexListener(evt: Event) {
  const target = evt.target as HTMLInputElement;
  const text = target.value;

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

function getAllElementsByTagName(tag: string): Element[] {
  const elements = document.getElementsByTagName(tag);
  return Array.from(elements);
}

function getAllTextInputs(): HTMLInputElement[] {
  const inputs: Element[] = [];

  inputs.push(
    ...getAllElementsByTagName("input")
  );
  inputs.push(
    ...getAllElementsByTagName("textarea")
  );

  return inputs as HTMLInputElement[];
}

function main() {
  const inputs = getAllTextInputs();
  inputs.forEach(addAlexListener);
}

main();