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
<>              <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="btn btn-outline-info disabled my-2 my-sm-0 btn-lg text-nowrap">
              <i className='fab fa-rebel mx-2'></i>
              <i className='fab fa-empire mx-2'></i>
        </div>                  
              <input className='form-group form-control-dark h-100 m-0' onChange={ (event) => handleInputChange(event) } defaultValue='skywalker'/>
          <select className='form-select' onChange={ (event) => handleInputChange(event) } defaultValue='anakin'>
              { options.map((o, i) => (
              <option value={o} key={i}>{o}</option>
                  
              ))}
          </select>
                  
              </nav>
  <div className='container pt-2'>
          <Loading loading={ loading }>

    {chars.map((char,i) => {
        return (
          <Animated
            animationIn='fadeIn'
            animationOut='bounceInLeft'
            isVisible={true}
            animationInDelay={ 500 }
            animationInDuration={ 2500 }
            key={ i }
          >
          <Char key={ char.name } char={ char } />
          </Animated>
      );
    }) }
      </Loading>
  </div></>
  );
}

export default App;
