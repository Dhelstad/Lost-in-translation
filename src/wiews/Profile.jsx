import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileOrderHistory from "../components/Profile/ProfileOrderHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <h1 className="profile">Profile</h1>
      <ProfileHeader username={user.username} />
      <ProfileActions />
      <ProfileOrderHistory translations={user.translations} />
    </>
  );
};

export default withAuth(Profile);
