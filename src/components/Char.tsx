import { FunctionComponent } from "react";
import { CharType, FilmType } from "../types";
import helpers from "../utils/helpers";

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
        <li> homeworld : { char.homeworld }</li>
        <li> films :{ char.films.map(f=>(<p key={f}><a href={f}> { f }</a></p>))}</li>
        <li> species : { char.species.map(s=>(<p key={s}><a href={s}>{ s }</a></p>)) }</li>
        <li> vehicles : { char.vehicles.map(v=>(<p key={v}><a href={v}>{ v }</a></p>))}</li>
        <li> starships : { char.starships.map(s=>(<p key={s}><a href={s}>{ s }</a></p>)) }</li>
        <li> created : {helpers.formatDate(char.created)}</li>
        <li> edited : {helpers.formatDate(char.edited)}</li>
        <li> url : <a href={char.url}>{char.url}</a> </li>
      </ul>
  );
};

export default Char;
