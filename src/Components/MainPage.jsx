import Card from './Card';
import Navbar from './Navbar';
import NavbarExt from './NavbarExt';
import FooterMsa from './Footer'
const MainPage = () => {
   return (
      <div className="App">
         <Navbar />
         <NavbarExt />
         <div className="flex justify-around w-full min-h-screen" style={{backgroundColor:'rgb(238, 238, 238)'}}>
            <Card />
         </div>
         <FooterMsa />
      </div>
   );
}
export default MainPage;