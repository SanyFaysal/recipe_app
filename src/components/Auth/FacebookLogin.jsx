import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export default function FacebookLogin() {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);

  console.log({ user, loading, error });

  return (
    <div>
      <button onClick={() => signInWithFacebook()}>Login with facebook</button>
    </div>
  );
}
