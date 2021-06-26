import React, { useContext } from "react";
import Navbar from "../composable-components/Navbar";
import { contextapp } from "../../pages/Page";

const Header = () => {

  document.title="Cooktopia"
  const navElements = [{"text":"Recipes","link":"/recipecontent"},{"text":"Shopping List","link":"/shoppinglist"},{"text":"Team","link":"/team"}];

  const context = useContext(contextapp);

  // const parentcontext=useContext(contextapp);

  return (
    <>
      <header className="app_header">
        <Navbar navElements={navElements} />
      </header>
    </>
  );
};

export default Header;
