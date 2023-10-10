import About_Us from "./About_Us";
import Atttend from "./Atttend";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Counter from "./Counter";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
import GamePage from "./GamePage";
import MobileLastQuiz from "./MobileLastQuiz";
import Our_Motto from "./Our_Motto";
import Review from "./Review";
import Solution from "./Solution";
import Truseted from "./Truseted";
import Workplace from "./Workplace";


function App() {
  return (
    <div className="App">
     <Banner/>
     <Counter/>
     <Truseted/>
     <About_Us/>
     <Solution/>
     <Our_Motto/>
     <Workplace/>
     <Review/>
     <Footer/>
     <ContactUs/>
    <ErrorPage/>
    <Atttend/>
    <GamePage/>
    <MobileLastQuiz/>
    </div>
  );
}

export default App;
