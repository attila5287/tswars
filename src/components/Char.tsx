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
        <div className='container-fluid mini'>
            <Animated
                animationIn='fadeIn'
                animationOut='bounceOut'
                isVisible={true}
                >
                <h1 className='text-warning text-center my-5 border-bottom border-warning'>
                    <i className='text-2xl fab fa-rebel fa-pull-left bg-dark p-3'></i>
                    <i className=' text-capitalize'>
                        {char.name}
                    </i>
                    <i className='text-2xl fab fa-empire fa-pull-right bg-dark p-3 text-warning'></i>
                </h1>
            </Animated>
            <div className="text-warning d-flex flex-row justify-content-around">
                <Animated
                    animationIn='slideInLeft'
                    animationOut='bounceInLeft'
                    isVisible={true}
                    className='w-100'>
                    <ul className='h-100 w-100 list-group text-capitalize'>
                        <li className='list-group-item border-dark'>
                            height : {char.height}</li>
                        <li className='list-group-item border-dark'>
                            mass : {char.mass}</li>
                        <li className='list-group-item border-dark'>
                            hair_color : {char.hair_color}</li>
                        <li className='list-group-item border-dark'>
                            skin_color : {char.skin_color}</li>
                        <li className='list-group-item border-dark'>
                            eye_color : {char.eye_color}</li>
                        <li className='list-group-item border-dark'>
                            birth_year : {char.birth_year}</li>
                        <li className='list-group-item border-dark'>
                            gender : {char.gender}</li>
                    </ul>
                </Animated>
                <Animated
                    animationIn='slideInRight'
                    animationOut='bounceInLeft'
                    isVisible={true}
                    className='w-100'>
                    <ul className='h-100 w-100 list-group text-capitalize'>

                        <li className='list-group-item border-dark'>
                            edited : {helpers.formatDate(char.edited)}</li>
                        <li className='list-group-item border-dark'>
                            homeworld :
                            <a href={char.homeworld} className='text-warning'>
                                <i className="fas fa-globe"></i>
                            </a>
                        </li>
                        <li className='list-group-item border-dark'>
                            url :
                            <a href={char.url} className='text-warning'>
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </li>
                        <li className='list-group-item border-dark'>
                            species : {char
                                .species
                                .map(s => (
                                    <i key={s}>
                                        <a href={s} className='text-warning'>
                                            <i className='fas fa-dna mx-1'></i>
                                            {s.split('/')[5]}</a>
                                    </i>
                                ))}</li>
                        <li className='list-group-item border-dark'>
                            vehicles : {char
                                .vehicles
                                .map(v => (
                                    <i key={v}>
                                        <a href={v} className='text-warning'>
                                            <i className='fas fa-sce-shuttle mx-1'></i>
                                            {v.split('/')[5]}</a>
                                    </i>
                                ))}</li>
                        <li className='list-group-item border-dark'>
                            starships : {char
                                .starships
                                .map(s => (
                                    <i key={s}>
                                        <a href={s} className='text-warning'>
                                            <i className="fas fa-rocket mx-1"></i>
                                            {s.split('/')[5]}</a>
                                    </i>
                                ))}</li>
                        <li className='list-group-item border-dark'>
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
