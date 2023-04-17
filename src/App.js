import logo from './logo.svg';
import './App.css';
import LandingPage from './views/LandingPage';
import DonationPageCreditCard from './views/DonationPageCreditCard';
import DonationPageMpesa from './views/DonationPageMpesa';
import Counter from './features/counter/Counter';
function App() {
  return (
  //  <LandingPage/>
  // <DonationPageCreditCard/>
  <DonationPageMpesa/>
  // <Counter/>
  );
}

export default App;
