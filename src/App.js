//Pages
import AboutUs from './pages/AboutUs';
//Styles
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
