import { useContext } from "react";
import MenuContext, { MenuContextProps } from "../../contexts/menu";

const useMenuContext = (): MenuContextProps => {
    const menuContext = useContext<MenuContextProps>(MenuContext);
    return menuContext;
}

export default useMenuContext;