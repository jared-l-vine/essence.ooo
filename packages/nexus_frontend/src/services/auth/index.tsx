import React, {
  createContext,
  FunctionComponent,
  useState,
  ContextType,
  useMemo,
  useContext,
} from "react";
import Cookies from "js-cookie";
import { User } from "../../types/User";

export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  cookie: any | null;
  setCookie: (cookie: any | null) => void;
}>({
  user: null,
  setUser: () =>
    console.error("AuthContext setUser hasn't been initialized yet"),
  cookie: null,
  setCookie: () =>
    console.error("AuthContext setCookie hasn't been initialized yet"),
});

export const AuthContextProvider: FunctionComponent = ({ children }) => {
  const [cookie, setCookie] = useState(() => Cookies.get("discord_token"));
  const [user, setUser] = useState<ContextType<typeof AuthContext>["user"]>(
    null
  );
  const contextValue = useMemo<ContextType<typeof AuthContext>>(
    () => ({ cookie, user, setUser, setCookie }),
    [cookie, user, setUser, setCookie]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
