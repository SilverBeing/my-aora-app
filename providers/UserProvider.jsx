import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setUserInfo,
        userInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
