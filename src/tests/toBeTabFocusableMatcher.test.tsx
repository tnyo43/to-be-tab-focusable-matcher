import { render, screen } from "@testing-library/react";

describe("button", () => {
  test("a normal button is ABLE to be focused by the Tab key", () => {
    render(<button>click</button>);
    const button = screen.getByRole("button");

    expect(button).toBeTabFocusable();
  });

  test("a DISABLED button is NOT ABLE to be focused by the Tab key", () => {
    render(<button disabled>click</button>);
    const button = screen.getByRole("button");

    expect(button).not.toBeTabFocusable();
  });
});

describe("anchor", () => {
  test("an ancher element WITH the href attribute is ABLE to be focused by the Tab key", () => {
    render(<a href="#">link</a>);
    const link = screen.getByRole("link");

    expect(link).toBeTabFocusable();
  });

  test("an ancher element WITHOUT the href attribute is NOT ABLE to be focused by the Tab key", () => {
    render(<a>link</a>);
    const link = screen.getByText("link");

    expect(link).not.toBeTabFocusable();
  });
});

describe("element with the tabindex attribute", () => {
  test.each([[0], [1]])(
    "a element with the tabindex attribute EQUAL TO OR GREATER THAN 0 is ABLE to be focused by the Tab key",
    (tabindex) => {
      render(<button tabIndex={tabindex}>click</button>);
      const button = screen.getByRole("button");

      expect(button).toBeTabFocusable();
    }
  );

  test("a element with the tabindex attribute LESS THAN 0 is ABLE to be focused by the Tab key", () => {
    render(<button tabIndex={-1}>click</button>);
    const button = screen.getByRole("button");

    expect(button).not.toBeTabFocusable();
  });
});
