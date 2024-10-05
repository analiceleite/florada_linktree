import { GlobalStyle, AppContainer } from './style';
import Hero from './components/Hero/index'
import Footer from './components/Footer/index';
import LinkTree from './components/LinkList';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Hero />
      <LinkTree />
      <SocialMedia />
      <Footer />
    </AppContainer>
  );
}

export default App;
