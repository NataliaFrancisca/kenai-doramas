import React from "react";
import { useEffect, useState, useRef } from "react";
import {db} from "../../db/data"

import { Carrousel } from "./PopularSeriesStyled";
import { CardStyled } from "../UI/CardStyled";

const PopularSeries = ({className}) => {

    const minPerSection = 4;

    const [currentGroupShows, setCurrentGroupShows] = useState();
    const [groupsShows, setGroupsShows] = useState([]);

    const refButtonPrev = useRef();
    const refButtonNext = useRef();

    const data = db.filter(serie => serie.id !== 0);

    const createGroupOfShows = () => {
        let min = 0;
        let max = minPerSection;
        let newId = 0;

        const createGroup = () => {
            const seriesGroups = {
                id: newId,
                series: data.slice(min, max)
            }

           
            min += minPerSection;
            max += minPerSection;
            newId++;
            setGroupsShows(prevState => [...prevState, seriesGroups])
        }

        while(min < data.length){
            createGroup();
            console.log(min)
            console.log(max)
        }
    }

    useEffect(() => {
        return groupsShows.length < data.length / minPerSection ? createGroupOfShows() : false;
    },[])

    useEffect(() => {
        const initalGroup = groupsShows.find(group => group.id == 0);
        setCurrentGroupShows(initalGroup);

        console.log(groupsShows)
    },[groupsShows])

    useEffect(() => {
        const maxElements = groupsShows.length;

        if(currentGroupShows){
            currentGroupShows.id == maxElements - 1 ? refButtonNext.current.disabled = true : refButtonNext.current.disabled = false;
            currentGroupShows.id == 0 ? refButtonPrev.current.disabled = true :  refButtonPrev.current.disabled = false;
        }
    })

    const onNextShows = () => {
        const maxElements = groupsShows.length;
        
        if(currentGroupShows.id == maxElements - 1){
            refButtonNext.current.disabled = true;
            return false;
        }

        const nextGroups = groupsShows.find(group => group.id == currentGroupShows.id + 1);
        setCurrentGroupShows(nextGroups);
    }

    const onPreviousShows = () => {
        if(currentGroupShows.id == 0){
            refButtonPrev.current.disabled = true;
            return false;
        }

        const nextGroups = groupsShows.find(group => group.id == currentGroupShows.id - 1);
        setCurrentGroupShows(nextGroups);
    }

    return(
        <main className={className}>
            <h1>Populares</h1>

            <Carrousel numberColumns={minPerSection}>
                <button id="back-group" ref={refButtonPrev} onClick={() => onPreviousShows()}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                <section id="grid-section">
                    {currentGroupShows ? 
                        currentGroupShows.series.map(serie => (
                            <CardStyled key={serie.id} imageBackground={serie.image} dataSerie={serie} />
                        ))
                        : null
                    }
                </section>

                <button id="next-group" ref={refButtonNext} onClick={() => onNextShows()}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </Carrousel>

        </main>
    )
}

export default PopularSeries;