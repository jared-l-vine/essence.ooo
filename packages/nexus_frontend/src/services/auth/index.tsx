import React, {
  createContext,
  FunctionComponent,
  useState,
  ContextType,
  useMemo,
  useContext
} from "react";
import { User } from "../../../graphql/types.generated";

export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
}>({
  user: null,
  setUser: () =>
    console.error("AuthContext setUser hasn't been initialized yet")
});

export const AuthContextProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<ContextType<typeof AuthContext>["user"]>(
    null
  );
  const contextValue = useMemo<ContextType<typeof AuthContext>>(
    () => ({ user, setUser }),
    [user, setUser]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
