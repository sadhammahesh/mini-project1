
import  Card from '../card/card.component';
import './card-list.styles.css';
 
const CardList = (props) => {
  const {monsters} = props
    return (
        <div className='card-list'>
          {
            monsters.map(
              monster => <Card 
                              id={monster.id}
                              name={monster.name}
                              email={monster.email}
                          />
            )
          }
        </div>
    )
}
 export default CardList









//import React from 'react';

//import { Card } from '../card/card.component';

//import './card-list.styles.css';

//export const CardList= props => (
  //  <div className='card-list'>
  //      {props.monsters.map(monster => (
    //        <card key={monster.id} monster={monster} />
      //  ))}
    //</div>
//);
    

