import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from "@react-oauth/google";
const clientId = "35287981930-tscjoab9hs0gpn772g4nndhcv1lc492u.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("login success. user: ", res.profileObj)
    };

    const onFailure = (res) => {
        console.log("login failed. res: ", res)
    }

    return(
        <div id="signInButton">
            <GoogleOAuthProvider clientId="35287981930-tscjoab9hs0gpn772g4nndhcv1lc492u.apps.googleusercontent.com">
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    inSignedIn={true}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default Login