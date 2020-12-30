import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../tests/testUtils";
import GuessedWords from "../src/GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test("does not throw a warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there is no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
    let wrapper;
   const  guessedWords =[
        {guessedWord:"train", letterMatchCount: 3},
        {guessedWord:"agile", letterMatchCount: 1},
        {guessedWord:"party", letterMatchCount: 5}

    ]
    beforeEach(() => {
        wrapper = setUp({ guessedWords });
      });
    test("renders without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    })

    test("renders guessed word section", () => {
        const guessedWordsNode = findByTestAttr(wrapper, "guessed-words")
        expect(guessedWordsNode.length).toBe(1)
    })
    test("correct number of guessed words", () => {
        const guessedWordNodes = findByTestAttr(wrapper, "guessed-word")
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    })
});
