import logo from './Assets/Img/Logos/logo.svg';
import dot from './Assets/Img/bg-pattern-dots.svg';
import Card from './Components/Card';

function App() {
  return (
    <main className="app">
      <div className='appImg'></div>
      <div className='container'>
        <img src={logo} className='appLogoImg' alt='logo-pod' />
        <Card />
      </div>
      <img src={dot} className='dots' alt='dot' />
    </main>
  );
}

export default App;
