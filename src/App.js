import logo from './assets/logos/logo.svg';
import './App.css';
import useAddToHomeScreenPrompt from './hooks/useAddToHomeScreenPrompt';

function App() {
  const { isReady, promptToInstall, hasFinishedInstallation } = useAddToHomeScreenPrompt();
  console.log(isReady, hasFinishedInstallation);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>💛 Muy Deli</h1>
        <p>Instala esta aplicación en tu dispositivo</p>
        <p>{isReady && !hasFinishedInstallation && <button onClick={() => promptToInstall()}>Instalar</button>}</p>
        <p>{hasFinishedInstallation ? 'Estás usando la Web App' : 'Aplicación todavía no instalada'}</p>
      </header>
    </div>
  );
}

export default App;
