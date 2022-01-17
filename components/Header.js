import { useMoralis } from "react-moralis";
import Image from "next/image"
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full object-cover"
            src="https://links.papareact.com/3pi"
          />
        </div>

        <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
        </div>

        <h1 className="text-3xl ">Welcome Metaverse</h1>
        <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

        <ChangeUserName />
      </div>
    </div>
  );
}

export default Header;
