import { useUser } from "../../context/UserContext";
import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem";

const ProfileTranslationHistory = () => {
  const { user } = useUser();
  //translation history display or dont
  let translationList;
  if (user.translations.length > 0) {
    translationList = user.translations.map((translation, index) => (
      <ProfileOrderHistoryItem
        key={index + "-" + translation}
        translation={translation}
      />
    ));

    //only last 10 will show
    if (translationList.length > 10) {
      const lastTen = 10;
      const lastTenRecords = translationList.filter(
        (val, index, arr) => index > arr.length - lastTen - 1
      );
      translationList = lastTenRecords;
    }
  } else {
    translationList = "Empty";
  }

  return (
    <section className="translationhistory">
      <h4>Your translation history:</h4>
      <ol className="translationList">
        <div className="translationListDiv">{translationList}</div>
      </ol>
    </section>
  );
};
export default ProfileTranslationHistory;
