import Tooltip from "tooltip.js";
import * as _ from "lodash";

const getTT = _.memoize((element: HTMLInputElement) => {
  return new Tooltip(element, {
    placement: "bottom"
  });
});

export function displayErrors(errors: string[], element: HTMLInputElement) {
  console.log(errors)
  const tt = getTT(element);
  const text = errors.join("\n");
  tt.updateTitleContent(text);
  tt.show();
}

export function hideErrors(element: HTMLInputElement) {
  const tt = getTT(element);
  tt.hide();
}