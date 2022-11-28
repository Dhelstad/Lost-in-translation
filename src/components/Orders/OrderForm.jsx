import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { translationAdd } from "../../Api/translations";
import { STORAGE_LETTER_IMAGE_ARRAY } from "../../const/StorageImageLetters";
import { useUser } from "../../context/UserContext";

export const translatedArray = [];

const TranslationsForm = () => {
  const { register, handleSubmit } = useForm();

  const { user, setUser } = useUser();
  const [apiError, setApiError] = useState(null);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Profile");
  };

  const onSubmit = async (data) => {
    translatedArray.length = 0;
    let splitString = data.translationText.toLowerCase();
    //translate string to sign language
    for (let i = 0; i < splitString.length; i++) {
      for (let j = 0; j < STORAGE_LETTER_IMAGE_ARRAY.length; j++) {
        if (splitString[i] === STORAGE_LETTER_IMAGE_ARRAY[j].letter) {
          translatedArray.push(STORAGE_LETTER_IMAGE_ARRAY[j]);
        }
      }
    }
    if (splitString.length > 0) {
      const [error, result] = await translationAdd(user, splitString);
      if (error !== null) {
        setApiError(error);
      }
      if (result !== null) {
        //string values to user states
        setUser({
          ...user,
          translations: [...user.translations, splitString],
        });
      }
    }
  };

  return (
    <div className="container">
      <h1 className="translation">Translation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="translation-text" className="translationText">
          Translated Text
        </label> */}
        <input
          type="text"
          className="translationInput"
          {...register("translationText")}
          placeholder="Translate here..."
        />

        <button type="submit" className="btnTranslate">
          Translate
        </button>

        <button className="btnprofile" onClick={handleNavigate}>
          Profile
        </button>

        {apiError && <p>{apiError}</p>}
      </form>
    </div>
  );
};
export default TranslationsForm;
