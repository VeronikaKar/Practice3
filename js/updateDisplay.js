import refs from "./refs.js";

export function updateDisplay(value) {
  refs.display.textContent = value;
}