import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Char from "./components/Char";
import { Results, CharType } from "./types";
import Loading from "./components/Loading";

function App() {
  const [chars, setChars] = useState<CharType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  };
  useEffect(() => {
    getChars('anakin');
  }, []);

  return (
    <div className='container pt-2'>
          <Loading loading={ loading }>
              <h1 className='fas fa-search mx-2'></h1>
              <select className='form-select' onChange={ (event) => handleInputChange(event) }>
                  <option value="" key="0" hidden>...</option>
                  <option value="anakin" key="1">anakin</option>
                  <option value="luke" key="2">luke</option>
          </select>
        {chars.map((char,i) => {
            return (
                <div key={i}>
                    <br />
                <Char key={ char.name } char={ char } />
                </div>
            );
        }) }
      </Loading>
    </div>
  );
}

export default App;
