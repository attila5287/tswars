import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Char from "./components/Char";
import { Results, CharType } from "./types";
import Loading from "./components/Loading";
import {Animated} from 'react-animated-css';
import "./index.css";

function App() {
  const [options, setOptions] = useState<string[]>([]);
  const [chars, setChars] = useState<CharType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const getOptions = async (term) => {
      setLoading(true);
      try {
          const opts = await axios.get<Results>(
        "https://swapi.dev/api/people/?search=" + term
          )
          console.log(`opts`, opts.data.results.map(r => r.name))
          setOptions(opts.data.results.map(r => r.name));
      } catch (error) {
          console.log(`error`, error)
      } finally {
          setLoading(false);
      }
  }
    
  const getChars = async (term) => {
  setLoading(true);
  try {
      const { data } = await axios.get<Results>(
    "https://swapi.dev/api/people/?search=" + term
      );
      setChars(data.results);
  } catch {
      console.log("err char fetch swapi");
  } finally {
      setLoading(false);
  }
  };
  // Loads all books and sets them to books
  function handleInputChange (event) {
  const q = event
      .target
      .value
      .trim()
      console.log(`>> q`, q)
      getChars(q)
      getOptions(q)

  };
  useEffect(() => {
  getOptions('skywalker');
  }, []);
    
  useEffect(() => {
  getChars('skywalker');
  }, []);

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-primary pt-0 pb-1">
                <div className='mini d-flex flex-row'>
        <div className="btn btn-lg btn-outline-warning disabled my-sm-0 text-nowrap border-none">
              <h1 className='fas fa-text-height'></h1>
        </div>
        <input className='w-100 form-control-dark shadow-none form-control-lg text-uppercase' onChange={ (event) => handleInputChange(event) } defaultValue='skywalker'/>
        <div className="btn btn-lg btn-outline-warning disabled my-sm-0 text-nowrap border-none">
              <h1 className='fab fa-react fa-spin'></h1>
        </div>                  
          <select className='w-100 form-group form-select' onChange={ (event) => handleInputChange(event) } defaultValue='anakin'>
              { options.map((o, i) => (
              <option value={o} key={i}>{o}</option>
              ))}
          </select>                    
</div>
      </nav>
      <div className='mini'>
        <p>
            <i className='fas fa-question-circle mx-3'></i>
            Type star wars character name and use dropdown menu to select a specific result
        </p>
  <div className='container pt-2'>
    <Loading loading={ loading }>

    {chars.map((char,i) => {
        return (
          <Animated
            animationIn='fadeIn'
            animationOut='bounceInLeft'
            isVisible={true}
            animationInDelay={ i*1000 }
            key={ i }
          >
          <Char key={ char.name } char={ char } />
          </Animated>
      );
    }) }
      </Loading>
  </div></div>
    </div> 
  );
}

export default App;
