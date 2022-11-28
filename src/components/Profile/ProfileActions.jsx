import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";
import { translationClearHistory } from "../../Api/translations";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

const ProfileActions = () => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Do you want to log out?")) {
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/orders");
  };

  const handleClearHistoryClick = async () => {
    if (!window.confirm("sure that you want to clear your history for good?")) {
      return;
    }

    const [clearError] = await translationClearHistory(user.id);

    if (clearError !== null) {
      return;
    }

    //empty translations
    const updatedUser = {
      ...user,
      translations: [],
    };

    storageSave(updatedUser);
    setUser(updatedUser);
  };

  return (
    <ul className="profilebtn">
      <li>
        <button
          className="btnClearTranslations"
          onClick={handleClearHistoryClick}
        >
          Clear history
        </button>
      </li>
      <li>
        <button className="btnLogout" onClick={handleLogoutClick}>
          Logout
        </button>
      </li>
      <li>
        <button className="btnTranslation" onClick={handleNavigate}>
          Translations
        </button>
      </li>
    </ul>
  );
};
export default ProfileActions;
