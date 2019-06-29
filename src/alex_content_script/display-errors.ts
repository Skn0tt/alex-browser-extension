import Tooltip from "tooltip.js";
import * as _ from "lodash";

const getTT = _.memoize((element: HTMLInputElement) => {
  return new Tooltip(element, {
    placement: "bottom",
    html: true,
  });
});

function constructTitleElement(errors: string[]): HTMLElement {
  const element = document.createElement("span");
  const text = errors.join("<br><br>");
  element.innerHTML = text;
  return element;
}

export function displayErrors(errors: string[], element: HTMLInputElement) {
  const tt = getTT(element);
  const titleElement = constructTitleElement(errors);
  tt.updateTitleContent(titleElement);
  tt.show();
}

export function hideErrors(element: HTMLInputElement) {
  const tt = getTT(element);
  tt.dispose();
  getTT.cache.delete(element);
}