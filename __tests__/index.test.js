import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar Component", () => {
  it("should change input value", () => {
    const onChangeInput = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onChangeInput={onChangeInput} />);

    const input = getByPlaceholderText("Search by keyword");
    fireEvent.change(input, { target: { value: "test input" } });

    expect(input.value).toBe("test input");
  });

  it("should call onChangeInput after a delay", async () => {
    jest.useFakeTimers();
    const onChangeInput = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onChangeInput={onChangeInput} />);

    const input = getByPlaceholderText("Search by keyword");
    fireEvent.change(input, { target: { value: "test" } });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(onChangeInput).toHaveBeenCalledWith("test");
    });
  });

  it("should clear input value on button click", () => {
    const onChangeInput = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <SearchBar onChangeInput={onChangeInput} />
    );

    const input = getByPlaceholderText("Search by keyword");
    const clearButton = getByText("Clear");

    fireEvent.change(input, { target: { value: "test input" } });
    expect(input.value).toBe("test input");

    fireEvent.click(clearButton);
    expect(input.value).toBe("");
  });
});
