import { useForm } from "react-hook-form";
import "./LoginForm.style.scss";
import "animate.css";
import { loginUser } from "../../Api/user";
import { useState, useEffect } from "react";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  //local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //side effects
  useEffect(() => {
    if (user !== null) {
      navigate("profile");
    }
  }, [user, navigate]); //empty dependesies only run 1

  // Event Handlers
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  //render functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username is too short (min 3 characters) </span>;
    }
  })();

  return (
    <div className="login">
      <h2 className="animate__animated animate__heartBeat">Get started</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Username"
            required
            autoComplete="off"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button className="continue" type="submit" disabled={loading}>
          Continue
        </button>

        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </div>
  );
};
export default LoginForm;
