const ProfileHeader = ({ username }) => {
  return (
    <header className="welcome">
      <h4 class="animate__animated animate__bounce">
        Hello, welcome back {username}
      </h4>
    </header>
  );
};
export default ProfileHeader;
