import React from 'react'
import "./Card.css";
import { BiCheckCircle } from 'react-icons/bi';

const Card = (props) => {
    return (
        <div className='Card'>
            <div className='Card_container'>
                <p className='heading'>{props.heading}</p>
                <p className='subheadings'>{props.subheading1}<br/><span>{props.subheading2}</span></p>
                <div className='Card_list'>
                   <li className="cardList"><BiCheckCircle className='check' />{props.l1}</li>
                    <li className="cardList"><BiCheckCircle className='check' />{props.l2}</li>
                    <li className="cardList"><BiCheckCircle className='check' />{props.l3}</li>
                    <li className="cardList"><BiCheckCircle className='check' />{props.l4}</li>
                    <li className="cardList"><BiCheckCircle className='check' />{props.l5}</li>
                </div>
            </div>
            <div className='button'>
                <button>Get Started</button>
            </div>

        </div>
    )
}

export default Card