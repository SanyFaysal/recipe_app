import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg"
      >
        Google Login
      </button>
    </div>
  );
}
