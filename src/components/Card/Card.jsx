import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';
import CounterAPI from './CounterAPI';


function Card ({data}) {

    const { num } = useParams();

    return (
        <div className='card'>
            <div className="card-container container">
                { data
                    .filter((comics) => comics.num == num)
                    .map((comics, index) => (
                        <div className="comics-card" key={index}>

                            <div className="comics-section-left">
                                <img src={comics.img} alt={comics.alt}/>
                            </div>
                            <div className="comics-section-right">
                                <h1>{comics.title}</h1>
                                <p>Date Created: {comics.month}/{comics.day}/{comics.year}</p>
                                <p>Description: {comics.alt}</p>
                                <p>Comics #: {comics.num}</p>
                                <CounterAPI countView={comics.api} />
                                <Link to='/' className='slider-btn' >
                                    <Button buttonStyle='btn-secondary'>Go Back</Button>
                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;
