import React from "react";
import Input from "./components/Input/Input";
import "./Teste.scss";

function App() {
    return (
        <div className="App">
            <Input label2="Pesquise Aqui" />
            <button>Clicar</button>
            <Input label2="Não pesquise Aqui" />
        </div>
    );
}

export default App;
