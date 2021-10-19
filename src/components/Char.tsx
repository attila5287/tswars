import {FunctionComponent} from "react";
import {CharType, FilmType} from "../types";
import helpers from "../utils/helpers";
import {Animated} from 'react-animated-css';

interface ICharProps {
    char : CharType;
}

const Char : FunctionComponent < ICharProps > = (props) => {
    const {char} = props;

    return (
        <div className='container'>
            <Animated
                animationIn='fadeIn'
                animationOut='bounceOut'
                isVisible={true}
                animationInDelay={500}>
                <h1 className='text-warning d-flex flex-row justify-content-between my-5'>
                    <i className='text-2xl fab fa-rebel'></i>
                    <i className='text-capitalize'>
                        {char.name}
                    </i>
                    <i className='text-2xl fab fa-empire'></i>
                </h1>
            </Animated>
            <div className="text-warning d-flex flex-row justify-content-around">
                <Animated
                    animationIn='flipInY'
                    animationOut='bounceInLeft'
                    isVisible={true}
                    animationInDelay={750}
                    className='w-100'>
                    <ul className='h-100 w-100 list-group text-center text-uppercase'>
                        <li className='list-group-item'>
                            height : {char.height}</li>
                        <li className='list-group-item'>
                            mass : {char.mass}</li>
                        <li className='list-group-item'>
                            hair_color : {char.hair_color}</li>
                        <li className='list-group-item'>
                            skin_color : {char.skin_color}</li>
                        <li className='list-group-item'>
                            eye_color : {char.eye_color}</li>
                        <li className='list-group-item'>
                            birth_year : {char.birth_year}</li>
                        <li className='list-group-item'>
                            gender : {char.gender}</li>
                    </ul>
                </Animated>
                <Animated
                    animationIn='flipInY'
                    animationOut='bounceInLeft'
                    isVisible={true}
                    animationInDelay={1500}
                    className='w-100'>
                    <ul className='h-100 w-100 list-group text-center text-uppercase'>

                        <li className='list-group-item'>
                            edited : {helpers.formatDate(char.edited)}</li>
                        <li className='list-group-item'>
                            homeworld :
                            <a href={char.homeworld} className='text-warning'>
                                <i className="fas fa-globe"></i>
                            </a>
                        </li>
                        <li className='list-group-item'>
                            url :
                            <a href={char.url} className='text-warning'>
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </li>
                        <li className='list-group-item'>
                            species : {char
                                .species
                                .map(s => (
                                    <p key={s}>
                                        <a href={s}>{s}</a>
                                    </p>
                                ))}</li>
                        <li className='list-group-item'>
                            vehicles : {char
                                .vehicles
                                .map(v => (
                                    <i key={v}>
                                        <a href={v} className='text-warning'>
                                            <i className='fas fa-space-shuttle mx-1'></i>
                                            {v.split('/')[5]}</a>
                                    </i>
                                ))}</li>
                        <li className='list-group-item'>
                            starships : {char
                                .starships
                                .map(s => (
                                    <i key={s}>
                                        <a href={s} className='text-warning'>
                                            <i className="fas fa-rocket mx-1"></i>
                                            {s.split('/')[5]}</a>
                                    </i>
                                ))}</li>
                        <li className='list-group-item'>
                            films : {char
                                .films
                                .map(f => (
                                    <i key={f}>
                                        <a href={f} className='text-warning'>
                                            <i className="fas fa-film mx-1"></i>
                                            {f.split('/')[5]}</a>
                                    </i>
                                ))}</li>
                    </ul>
                </Animated>
            </div>
            <p className='text-center text-warning my-5'>
                <i className="fas fa-info-circle mx-1"></i>
                <i>
                    created : {helpers.formatDate(char.created)}
                </i>
            </p>

        </div>
    );
};

export default Char;
