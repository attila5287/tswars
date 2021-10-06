import { FunctionComponent } from "react";
import { CharType } from "../types";

interface ICharProps {
  char: CharType;
}

const Char: FunctionComponent<ICharProps> = (props) => {
  const { char } = props;

    return (
      <ul>
    <li> name : {char.name}</li>
    <li> height : {char.height}</li>
    <li> mass : {char.mass}</li>
    <li> hair_color : {char.hair_color}</li>
    <li> skin_color : {char.skin_color}</li>
    <li> eye_color : {char.eye_color}</li>
    <li> birth_year : {char.birth_year}</li>
    <li> gender : {char.gender}</li>
    <li> homeworld : {char.homeworld}</li>
    <li> films : {char.films}</li>
    <li> species : {char.species}</li>
    <li> vehicles : {char.vehicles}</li>
    <li> starships : {char.starships}</li>
    <li> created : {char.created}</li>
    <li> edited : {char.edited}</li>
    <li> url : {char.url}</li>
      </ul>
  );
};

export default Char;
