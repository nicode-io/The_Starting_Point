import React, {FC} from 'react';
import {IMonster}  from '../../App';

import './card.css';

interface IProps {
    monster: IMonster;
}

export const Card: FC<IProps> = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https:///robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);
