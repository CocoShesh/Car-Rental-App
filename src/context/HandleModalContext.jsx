import { useContext, createContext, useState } from "react";

const HandleModalContext = createContext();

export const useModal = () => {
  return useContext(HandleModalContext);
};
export const HandleModalProvider = ({ children }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const handleOpenLogin = () => {
    setIsOpenLogin(prev => !prev);
  };

  const handleOpenRegister = () => {
    setIsOpenRegister(prev => !prev);
  };
  return (
    <HandleModalContext.Provider
      value={{
        isOpenRegister,
        handleOpenRegister,
        isOpenLogin,
        handleOpenLogin,
      }}
    >
      {children}
    </HandleModalContext.Provider>
  );
};
