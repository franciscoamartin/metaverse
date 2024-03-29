import { useMoralis } from "react-moralis";
import Image from "next/image";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      layout="fill"
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      onClick={() => logoutOnPress && logout()}
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
    />
  );
};

export default Avatar;
