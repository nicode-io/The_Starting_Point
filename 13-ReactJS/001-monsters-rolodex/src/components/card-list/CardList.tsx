import React, {FC} from 'react';
import './card-list.css';
import {IMonster}  from '../../App';
import {Card}      from '../card/Card';

interface IProps {
    monsters: IMonster[];
}


export const CardLIst: FC<IProps> = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    );
};
