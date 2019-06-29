import { Options, ProfanitySureness, isValidProfanitySureness } from "./options";

const profanitySurenessSelect = document.getElementById("select-profanitySureness") as HTMLSelectElement;

function setProfanitySurenessSelector(profanity: ProfanitySureness) {
  const options = Array.from(profanitySurenessSelect.options);

  const optionToSelect = options.find(
    o => o.value === "" + profanity
  );

  profanitySurenessSelect.selectedIndex = optionToSelect.index;
}

function profanitySurenessSelectListener(evt: Event) {
  const target = evt.target as HTMLOptionElement;
  const profanity = +target.value;
  if (isValidProfanitySureness(profanity)) {
    Options.setProfanitySureness(profanity);
  }
}

async function main() {
  const profanitySureness = await Options.getProfanitySureness();
  setProfanitySurenessSelector(profanitySureness);

  profanitySurenessSelect.addEventListener("change", profanitySurenessSelectListener);
}

main();
