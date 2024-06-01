import Quotes from "./Quotes";
import {quotes} from "./quote.js";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx"
import "./App.css"

function App(){

    return(
        <>
        <div className="wrapper">
        <Navbar />
         {quotes.map((item)=> <Quotes quote={item.quote} author={item.author}/>)}
         <Footer />
        </div>
     
        </>
    )
}
export default App;