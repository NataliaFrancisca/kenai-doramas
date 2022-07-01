import React from "react";
import { useEffect, useState, useRef } from "react";
import {db} from "../../db/data"

import { Carrousel } from "./PopularSeriesStyled";
import { CardStyled } from "../UI/CardStyled";

const PopularSeries = ({className}) => {

    let minimumCardsGrid = 4;

    const [groupsShows, setGroupsShows] = useState([]);

    const [wasClicked, setWasClicked] = useState();
    const [currentGroupId, setCurrentGroupId] = useState(0);

    const refButtonPrev = useRef();
    const refButtonNext = useRef();

    const data = db.filter(serie => serie.id !== 0);

    const createGroupOfShows = () => {
        let min = 0;
        let max = minimumCardsGrid;
        let newId = 0;

        const createGroup = () => {
            const seriesGroups = {
                id: newId,
                series: data.slice(min, max)
            }
           
            min += minimumCardsGrid;
            max += minimumCardsGrid;
            newId++;
            setGroupsShows(prevState => [...prevState, seriesGroups])
        }

        while(min < data.length){
            createGroup();
        }
    }

    useEffect(() => {
        return groupsShows.length < data.length / minimumCardsGrid ? createGroupOfShows() : false;
    },[])

    useEffect(() => {
        const maxElements = groupsShows.length;

        currentGroupId == maxElements - 1 ? refButtonNext.current.disabled = true : refButtonNext.current.disabled = false;
        currentGroupId == 0 ? refButtonPrev.current.disabled = true :  refButtonPrev.current.disabled = false;
        
    },[currentGroupId])


    const onNextShows = () => {
        const maxElements = groupsShows.length;
        
        if(currentGroupId == maxElements - 1){
            refButtonNext.current.disabled = true;
            return false;
        }

        setCurrentGroupId(currentGroupId + 1);
        setWasClicked('next');
    }

    const onPreviousShows = () => {
        if(currentGroupId == 0){
            refButtonPrev.current.disabled = true;
            return false;
        }
        setCurrentGroupId(currentGroupId - 1);
        setWasClicked('prev');
    }

    return(
        <main className={className}>
            <h1>Populares</h1>

            {groupsShows ? 
                <Carrousel numberColumns={groupsShows?.length} changeGrid={currentGroupId} checkWasClicked={wasClicked}>
                    <button id="back-group" ref={refButtonPrev} onClick={() => onPreviousShows()}>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>

                    <section id="grid-section">
                        {groupsShows.map((group, index) => (
                            <article id={`section${index}`} className="section">
                                {group.series.map(serie => (
                                    <CardStyled key={serie.id} imageBackground={serie.image} dataSerie={serie} />
                                ))}
                            </article>
                        ))}
                    </section>

                    <button id="next-group" ref={refButtonNext} onClick={() => onNextShows()}>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </Carrousel>
                : null
            }

            {/* <Carrousel numberColumns={groupsShows?.length} changeGrid={currentGroupShows.id}>
                <button id="back-group" ref={refButtonPrev} onClick={() => onPreviousShows()}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <section id="grid-section" numberColumns={groupsShows?.length}>
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
            </Carrousel> */}
        </main>
    )
}

export default PopularSeries;