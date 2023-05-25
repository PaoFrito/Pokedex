import { MenuContextProvider } from "../../contexts/menu";
import { Header } from "./Header";

export const HeaderComponent = () => {
  return (
    <MenuContextProvider>
        <Header/>
    </MenuContextProvider>    
  );
};