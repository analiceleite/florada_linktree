import { GlobalStyle, AppContainer } from './style';
import Hero from './components/Hero/index'
import Footer from './components/Footer/index';
import LinkTree from './components/LinkList';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Hero />
      <LinkTree />
      <Footer />
    </AppContainer>
  );
}

export default App;
