import { createContext } from "react";

type HeaderContextType = {
  setHeaderTitle: (title: string) => void;
};

export const headerContext = createContext<HeaderContextType>({
  setHeaderTitle: () => {},
});
