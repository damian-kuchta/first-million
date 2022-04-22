import "./App.css";
import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import InitialPage from "./components/Layout/InitialPage/InitialPage";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  const [showInitialPage, setInitialPageShown] = useState(true);
  const [showResult, setResultShown] = useState(false);
  const [showForm, setFormShown] = useState(false);
  
  const [results, setResults] = useState({});
  const [dateToMillion, setDateToMillion] = useState('');

  return (
    <div className="App">
      <Header appTitle="Pierwszy milion" />
      <main>
        {showInitialPage && (
          <InitialPage
            showForm={setFormShown}
            showInitialPage={setInitialPageShown}
          />
        )}
        {showForm && (
          <Form
            setDateToMillion={setDateToMillion}
            setResults={setResults}
            showResult={setResultShown}
            showForm={setFormShown}
            formIsShown={showForm}
            showInitialPage={setInitialPageShown}
          />
        )}
        {showResult && (
          <Result
            results={results}
            dateToMillion={dateToMillion}
            showResult={setResultShown}
            resultIsShown={showResult}
            showInitialPage={setInitialPageShown}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
