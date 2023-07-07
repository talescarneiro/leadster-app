import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryContent from "./components/content/CategoryContent";
import { categoryOptions } from "./constants";

const handleButtonCategoryClick = jest.fn();
const isActiveButtonCategory = null;
const selectedSortOption = "";
const handleSortOptionChange = jest.fn();

describe("Category Content", () => {
  it("should render buttons correctly", () => {

    render(
      <CategoryContent
        handleButtonCategoryClick={handleButtonCategoryClick}
        isActiveButtonCategory={isActiveButtonCategory}
        selectedSortOption={selectedSortOption}
        handleSortOptionChange={handleSortOptionChange}
      />
    );

    // Verifique se cada botão está sendo renderizado corretamente
    categoryOptions.forEach((category, index) => {
      const buttonElement = screen.getByRole("button", { name: category.label });
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent(category.label);

      // Verifique se o botão ativo tem a classe "active"
      if (isActiveButtonCategory === index) {
        expect(buttonElement).toHaveClass("active");
      } else {
        expect(buttonElement).not.toHaveClass("active");
      }
    });
  });
});

