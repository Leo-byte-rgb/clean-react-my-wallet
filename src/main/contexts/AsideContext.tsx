import { createContext, useState } from "react";

interface AsideProps {
  open: boolean;
  handle: () => void;
}

const context = createContext<AsideProps>({} as AsideProps);

const AsideProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handle = () => setOpen(!open);

  return (
    <context.Provider value={{ open, handle }}>{children}</context.Provider>
  );
};

export { context, AsideProvider };
