import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Logo Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />
        <button
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
          onClick={authenticate}
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
