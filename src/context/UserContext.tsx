import { IUser } from "interfaces";
import { createContext, FC, ReactNode, useState, useContext } from "react";

type UserContextType = ReturnType<typeof UserManager>;

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => false,
});

interface IUserManagerResult {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

// разделение на Manager и Provider по Jack No BS TS #25
const UserManager = (): IUserManagerResult => {
  const [user, setUser] = useState(null);

  return { user, setUser };
};

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <UserContext.Provider value={UserManager()}>{children}</UserContext.Provider>
);

export default UserContext;

// Jack вместо экспорт default готовит и экспортирует отдельно значения и обработчики
export const useGetUser = (): IUser => {
  const { user } = useContext(UserContext);
  return user;
};

export const useSetUser = (user: IUser): void => {
  const { setUser } = useContext(UserContext);
  setUser(user);
};
