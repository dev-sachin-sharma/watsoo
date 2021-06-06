import Header from '../src/Components/Header'
import SubHeader from '../src/Components/SubHeader'
import TripSummary from '../src/Components/TripSummary'
import { details } from "./data"
import { details1 } from "./data1"
import { details2 } from "./data2"
import './app.css'
function App() {

  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <TripSummary details={details}/>
      <TripSummary details={details1}/>
      <TripSummary details={details2}/> 
    </div>
  );
}

export default App;
