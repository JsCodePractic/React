import React from 'react';
import './person.css';
import img from '../fotoUser/img.png'
import Services from '../../second/services/services';



const Person = (props) => {

  return (
    <div className="persone-container">
      <div className="persone-avatar">
        <img src={img} alt="" />
      </div>
      <div className="persone-info-container">
        <div className="person-info">
          <h4>{info.persone.name} {info.persone.surname}</h4>
          <p className="persone-position">{info.persone.position}</p>
        </div>
        <div className="persone-statusDay">
          <p className="persone-statusDay-text">{info.persone.statusDay}</p>
        </div>
        <Services />
      </div>
    </div>
  )
}

const info = {
  persone: {
    name: 'Алина',
    surname: 'Ростова',
    position: 'Менеджер по продажам',
    avatar: '',
    statusDay: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны'
  }
}



export default Person;


