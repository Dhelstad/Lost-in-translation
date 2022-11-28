import { translatedArray } from "./OrderForm";

const TranslationOutput = () => {
  const availableLetters = translatedArray.map((translatedLetter, index) => {
    return (
      <img
        key={index}
        src={translatedLetter.image}
        alt={translatedLetter.letter}
        width="70"
      />
    );
  });

  return (
    <section class="animate__animated animate__bounce">
      <h1>Translated text</h1>
      {availableLetters}
    </section>
  );
};
export default TranslationOutput;
