import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Char from "./components/Char";
import { Results,CharType } from "./types";
import Loading from "./components/Loading";

function App() {
  const [chars, setChars] = useState<CharType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getChars = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<Results>(
        "https://swapi.dev/api/people/?search=anakin"
      );
      setChars(data.results);
    } catch {
      console.log("err char fetch swapi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div>
      <Loading loading={loading}>
        {chars.map((char) => {
          return <Char key={char.name} char={char} />;
        })}
      </Loading>
    </div>
  );
}

export default App;
