import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ModalForm from './ModalForm';
import MobileModalForm from  './MobileModalForm';
import FullCase from './FullCase';
import SliderPopup from './SliderPopup';
import  { configureAnchors} from 'react-scrollable-anchor';

class App extends React.Component{
   constructor() {
       super();
       configureAnchors({offset: 0, scrollDuration: 1000});
   }
    render() {
       return(
           <div>
               <SliderPopup/>
               <FullCase/>
               {screen.width < 1024 ? <MobileModalForm/> : <ModalForm/>}
               <Header/>
               <Main/>
               <Footer/>
           </div>
       )
   }
}

export default App;