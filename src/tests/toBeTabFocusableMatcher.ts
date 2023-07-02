// @ts-ignore
import { isDisabled } from "@testing-library/user-event/dist/cjs/utils/misc/isDisabled";
// @ts-ignore
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/cjs/utils/focus/selector";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeTabFocusable: () => R;
    }
  }
}

function toBeTabFocusable(element: HTMLElement): jest.CustomMatcherResult {
  const focusableElements = Array.from(
    document.querySelectorAll(FOCUSABLE_SELECTOR)
  ).filter(
    (el) => !(Number(el.getAttribute("tabindex")) < 0 || isDisabled(el))
  );

  if (focusableElements.includes(element)) {
    return {
      pass: true,
      message: () => "The element is able to be focused by the Tab key.",
    };
  } else {
    return {
      pass: false,
      message: () => "The element is not able to be focused by the Tab key.",
    };
  }
}

expect.extend({ toBeTabFocusable });
