import { useMoralis } from "react-moralis";

function ChangeUserName() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUserName = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );
    if (!username) return;

    setUserData({
        username, 
    })
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUserName;
