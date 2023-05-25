import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { PokedexComponent } from "../../components/PokedexComponent";
import { PokedexContextProvider } from "../../contexts/pokedex";

export const PokedexPage = () => {

  return (
    <>
      <HeaderComponent/>
      <PokedexContextProvider>
        <PokedexComponent/>
      </PokedexContextProvider>
      <FooterComponent/>
    </>
  );
};