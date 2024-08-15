import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const Auth = ( {setIsAuth} ) => {
  const signInWithGoogle = async () => {
    try{
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token", result.user.refreshToken);
    setIsAuth(true);
    } catch(err){
        console.log('there is something error');
    }
  };

  return (
    <div className="auth">
      <p>Sign in With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
