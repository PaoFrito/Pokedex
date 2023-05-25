import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { PokedexComponent } from "../../components/PokedexComponent";

export const PokedexPage = () => {  
  return (
    <>
      <HeaderComponent/>
        <PokedexComponent/>      
      <FooterComponent/>
    </>
  );
};