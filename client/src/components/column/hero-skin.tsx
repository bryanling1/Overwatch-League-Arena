import React from 'react';
import {
    Teams, 
    Heros
} from '../../types';
import Ana from './heroes/ana';
import Ashe from './heroes/ashe';
import Ball from './heroes/ball';
import Baptiste from './heroes/baptiste';
import Bastion from './heroes/bastion';
import Brigitte from './heroes/brigitte';
import Doomfist from './heroes/doomfist';
import Dva from './heroes/dva';
import Echo from './heroes/echo';
import Genji from './heroes/genji';
import Hanzo from './heroes/hanzo';
import Junkrat from './heroes/junkrat';
import Lucio from './heroes/lucio';
import Cassidy from './heroes/cassidy';
import Mei from './heroes/mei';
import Mercy from './heroes/mercy';
import Moira from './heroes/moira';
import Orisa from './heroes/orisa';
import Pharah from './heroes/pharah';
import Reaper from './heroes/reaper';
import Reinhardt from './heroes/reinhardt';
import Roadhog from './heroes/roadhog';
import Sigma from './heroes/sigma';
import Soldier from './heroes/soldier';
import Sombra from './heroes/sombra';
import Symmetra from './heroes/symmetra';
import Torb from './heroes/torb';
import Tracer from './heroes/tracer';
import Winston from './heroes/winston';
import Zarya from './heroes/zarya';
import Zenyatta from './heroes/zenyatta';
import Widowmaker from './heroes/widowmaker';
import styled from 'styled-components';

interface StateProps{
    hero: Heros;
    team: Teams;
    isAlive: boolean;
};

const HeroSkin = (props:StateProps) =>{
    const {team, hero, isAlive} = props;
    return(
        <MainWrapper >
            <BlackFade style={{opacity: isAlive?0:1}}/>
            {/* HEROS*/}
            { hero === Heros.widowmaker  && <Widowmaker team={team}/>}
            { hero === Heros.winston  && <Winston team={team}/>}
            { hero === Heros.zarya && <Zarya team={team}/> }
            { hero === Heros.zenyatta  && <Zenyatta team={team}/>}
            { hero === Heros.tracer  && <Tracer team={team}/>}
            { hero === Heros.ball  && <Ball team={team}/>}
            { hero === Heros.ana  && <Ana team={team}/>}
            { hero === Heros.ashe  && <Ashe team={team}/>}
            { hero === Heros.baptiste  && <Baptiste team={team}/>}
            { hero === Heros.bastion  && <Bastion team={team}/>}
            { hero === Heros.brigitte  && <Brigitte team={team}/>}
            { hero === Heros.doomfist  && <Doomfist team={team}/>}
            { hero === Heros.dva  && <Dva team={team}/>}
            { hero === Heros.echo  && <Echo team={team}/>}
            { hero === Heros.genji  && <Genji team={team}/>}
            { hero === Heros.hanzo && <Hanzo team={team}/>}
            { hero === Heros.junkrat && <Junkrat team={team}/>}
            { hero === Heros.lucio && <Lucio team={team}/>}
            { hero === Heros.cassidy && <Cassidy team={team}/>}
            { hero === Heros.mei && <Mei team={team}/>}
            { hero === Heros.mercy && <Mercy team={team}/>}
            { hero === Heros.moira && <Moira team={team}/>}
            { hero === Heros.orisa && <Orisa team={team}/>}
            { hero === Heros.pharah && <Pharah team={team}/>}
            { hero === Heros.reaper && <Reaper team={team}/>}
            { hero === Heros.reinhardt && <Reinhardt team={team}/>}
            { hero === Heros.roadhog && <Roadhog team={team}/>}
            { hero === Heros.sigma && <Sigma team={team}/>}
            { hero === Heros.soldier && <Soldier team={team}/>}
            { hero === Heros.sombra && <Sombra team={team}/>}
            { hero === Heros.symmetra && <Symmetra team={team}/>}
            { hero === Heros.torb && <Torb team={team}/>}
        </MainWrapper>
    )
}

export default HeroSkin;

const MainWrapper = styled.div`
     {
        transition: ease opacity 0.4s;
    }
`

const BlackFade = styled.div`
    {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        z-index: 2;
        top: 0;
        left:0;
        transition: ease opacity 0.3s;
        pointer-events: none;
    }
`

