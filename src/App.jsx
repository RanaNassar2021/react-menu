import React, {Component} from "react";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutComponent';
class App extends Component{
  
    render(){
    let component 
    switch (window.location.pathname) {
        case "/":
            component = <Home/>
            break;
            case "/About":
                component = <About/>
             break;
             case "/Contact":
                 component = <Home/>
             break;
    
        default:
            component = <Home/>
            break;
    }
        return(
            <div className="bg-dark">
                <div>
                    <Header/>
                    {component}
                
                </div>
                <div>
              
            </div>
            </div>
          
        )
    }
}

export default App;