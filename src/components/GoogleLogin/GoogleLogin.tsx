import { useContext } from "react";
import { GoogleLogin as GoogleLoginButton, GoogleLogout as GoogleLogoutButton } from "react-google-login";
import UserContext from "context/UserContext";
import { IGoogleRespone } from "interfaces";

const GoogleLogin = () => {
  const { user, setUser } = useContext(UserContext);

  const normaliseUser = (rawUser: IGoogleRespone) => ({
    userId: parseInt(rawUser.googleId),
    userName: rawUser.profileObj.name,
    ava: rawUser.profileObj.imageUrl,
    email: rawUser.profileObj.email,
  });

  const handleLogin = async (googleData) => {
    const normUser = normaliseUser(googleData);
    console.log(googleData);
    setUser(normUser);
    // запрос на наш бэк - постим googleData.tokenId
    // в ответ получаем пользователя из базы - прочитанного или созданного
    // отправляем запрос, работаем с результатом - функция асинхронная...
  };

  const handleError = (err) => {
    console.log("Ууууууупс!!..", err);
  };

  const onLogoutSuccess = () => {
    console.log("Успешно вышли!");
    setUser(null);
  };

  const renderButton = () => {
    if (!user)
      return (
        <GoogleLoginButton
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleError}
          cookiePolicy={"single_host_origin"}
        />
      );

    return (
      <>
        <p>Привет, {user.userName}!</p>
        <GoogleLogoutButton clientId={process.env.GOOGLE_CLIENT_ID} onLogoutSuccess={onLogoutSuccess} />
      </>
    );
  };

  return (
    <>
      <h4>Здесь пара слов о том, для чего нужен логин гугл!)</h4>
      {renderButton()}
    </>
  );
};

export default GoogleLogin;
