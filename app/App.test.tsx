import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import CategoryContent from "./components/content/CategoryContent";

import Header from "./components/Header";
import Hero from "./components/Hero";

import { categoryOptions, optionsSelect } from "./constants";
import CardsContent, { Card } from "./components/content/CardsContent";
import HeroFooter from "./components/HeroFooter";
import Footer from "./components/Footer";

const handleButtonCategoryClick = jest.fn()
const isActiveButtonCategory = null
const selectedSortOption = ""
const handleSortOptionChange = jest.fn()

const mockCards: Card[] = [
  {
    id: "1",
    title: "Card 1",
    date: "2023-07-07",
    category: "Category 1",
    type: "Type 1",
    desc: "Description 1",
    src: "/path/to/image1.jpg",
    thumb: "/path/to/image1-thumb.jpg",
    downloads: [
      {
        id: 1,
        name: "Download 1",
        type: "Type 1",
        src: "/path/to/download1.pdf",
        color: "Color 1",
        primaryColor: "Primary Color 1",
        secondaryColor: "Secondary Color 1",
      },
    ],
  },
  {
    id: "2",
    title: "Card 2",
    date: "2023-07-08",
    category: "Category 2",
    type: "Type 2",
    desc: "Description 2",
    src: "/path/to/image2.jpg",
    thumb: "/path/to/image2-thumb.jpg",
    downloads: [
      {
        id: 2,
        name: "Download 2",
        type: "Type 2",
        src: "/path/to/download2.pdf",
        color: "Color 2",
        primaryColor: "Primary Color 2",
        secondaryColor: "Secondary Color 2",
      },
    ],
  },
]

const mockOpenModal = jest.fn()
const mockCloseModal = jest.fn()

describe("Header", () => {
  it("should render header correctly", () => {
    const { getByAltText } = render(<Header />)

    const logoImage = getByAltText("Leadster Logo")
    expect(logoImage).toBeInTheDocument()
  })
})

describe("Hero", () => {
  it("should render Hero correctly", () => {
    const { getByText, getByAltText } = render(<Hero />)

    const firstParagraph = getByText("WEBINARS EXCLUSIVOS");
    expect(firstParagraph).toBeInTheDocument();

    const secondParagraph = getByText("Menos Conversinha,");
    expect(secondParagraph).toBeInTheDocument();

    const thirdParagraph = getByText(/Mais Conversão/);
    expect(thirdParagraph).toBeInTheDocument();

    const fourthParagraph = getByText(/Conheça as estratégias que.*seu negócio/);
    expect(fourthParagraph).toBeInTheDocument();

    const image = getByAltText("Asset Hero");
    expect(image).toBeInTheDocument();
  })
})

describe("Cards Content", () => {
  it("should render all cards correctly and opening modals", () => {
    render (
      <CardsContent 
        currentCards={mockCards} 
        openModal={mockOpenModal} 
        closeModal={mockCloseModal} 
        modalOpen={false} 
        selectedCard={null} 
      />
    )

    const card1Title = screen.getByText("Card 1");
    expect(card1Title).toBeInTheDocument()

    const card2Title = screen.getByText("Card 2")
    expect(card2Title).toBeInTheDocument()

    const cardImages = screen.getAllByRole("img", { name: /Card Thumbnail/ })
    expect(cardImages.length).toBe(mockCards.length)

    fireEvent.click(card1Title)
    expect(mockOpenModal).toHaveBeenCalledTimes(1)
    expect(mockOpenModal).toHaveBeenCalledWith(mockCards[0])

    fireEvent.click(card2Title);
    expect(mockOpenModal).toHaveBeenCalledTimes(2);
    expect(mockOpenModal).toHaveBeenCalledWith(mockCards[1])
  })

  it("should render category buttons correctly", () => {

    render(
      <CategoryContent
        handleButtonCategoryClick={handleButtonCategoryClick}
        isActiveButtonCategory={isActiveButtonCategory}
        selectedSortOption={selectedSortOption}
        handleSortOptionChange={handleSortOptionChange}
      />
    )

    categoryOptions.forEach((category, index) => {
      const buttonElement = screen.getByRole("button", { name: category.label })
      expect(buttonElement).toBeInTheDocument()
      expect(buttonElement).toHaveTextContent(category.label)

      if (isActiveButtonCategory === index) {
        expect(buttonElement).toHaveClass("active")
      } else {
        expect(buttonElement).not.toHaveClass("active")
      }
    })
  })

  it("should render select option correctly", () => {
    render(
      <CategoryContent
        handleButtonCategoryClick={handleButtonCategoryClick}
        isActiveButtonCategory={isActiveButtonCategory}
        selectedSortOption={selectedSortOption}
        handleSortOptionChange={handleSortOptionChange}
      />
    )

    optionsSelect.forEach((select) => {
      const selectElement = screen.getByRole("option", { name: select.label })
      expect(selectElement).toBeInTheDocument()
      expect(selectElement).toHaveTextContent(select.label)
    })
  })
})

describe("Hero Footer", () => {
  it("should render HeroFooter correctly", () => {
    render(<HeroFooter />)

    expect(screen.getByAltText("Comparativo CTA")).toBeInTheDocument()
    expect(screen.getByAltText("Selo RD")).toBeInTheDocument()
    expect(screen.getByAltText("Rating Image")).toBeInTheDocument()
  })
})


describe("Footer", () => {
  it("should render Footer correctly", () => {
    render(<Footer />)

    const logoImage = screen.getByAltText("Leadster Logo")
    expect(logoImage).toBeInTheDocument()

    const linksPrincipaisList = screen.getByText("Links Principais")
    expect(linksPrincipaisList).toBeInTheDocument()

    const casesList = screen.getByText("Cases")
    expect(casesList).toBeInTheDocument()

    const materiaisList = screen.getByText("Materiais")
    expect(materiaisList).toBeInTheDocument()

    const sigaLeadsterList = screen.getByText("Siga a Leadster")
    expect(sigaLeadsterList).toBeInTheDocument()
  })
})