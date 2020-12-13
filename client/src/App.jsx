import {
  Navbar,
  Banner,
///  PostList,
  QuemSomos,
  Robos,
  Contato,
  Footer
} from './components';
import './cssGlobal.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <QuemSomos />
      <Robos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
