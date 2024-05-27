import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { PATH_PAGE } from "shared/lib";
import { UiLogo } from "./UiLogo";

const renderWithRouter = (ui: JSX.Element) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("UiLogo", () => {
    it("корректно рендерится", () => {
        const { getByText } = renderWithRouter(<UiLogo />);
        expect(getByText("MovieGuide")).toBeInTheDocument();
    });

    it("содержит правильную ссылку", () => {
        const { getByRole } = renderWithRouter(<UiLogo />);
        const linkElement = getByRole("link");
        expect(linkElement).toHaveAttribute("href", PATH_PAGE.HOME);
    });

    it("содержит иконку", () => {
        const { getByRole } = renderWithRouter(<UiLogo />);

        const linkElement = getByRole("link");
        const iconElement = linkElement.querySelector("svg");
        expect(iconElement).toBeInTheDocument();
    });
});
