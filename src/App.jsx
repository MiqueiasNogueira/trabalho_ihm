import React from 'react';
import Banner_Principal from "./components/Cabecalho/banner_principal"
import Menu from "./components/Menu/menu.jsx"

function App() {
  return (
    <div className="site-container">

      <Menu />
      <Banner_Principal /> 
      
    </div>
  );
}

export default App;