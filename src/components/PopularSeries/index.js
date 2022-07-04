import React from "react";
import { useEffect, useState, useRef } from "react";
import {db} from "../../db/data"

import { Carrousel } from "./style";
import { Card } from "../Card/style";

const PopularSeriesComponent = ({className}) => {

    const [groupsShows, setGroupsShows] = useState([]);
    const [currentGroupId, setCurrentGroupId] = useState(0);

    const [minimumCardsGrid, setMinimumCardsGrid] = useState(4);

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

    const onNext = () => {
        if(currentGroupId == groupsShows.length - 1){
            refButtonNext.current.disabled = true;
            return false;
        }
        setCurrentGroupId(currentGroupId + 1);
    }

    const onPrevious = () => {
        if(currentGroupId == 0){
            refButtonPrev.current.disabled = true;
            return false;
        }
        setCurrentGroupId(currentGroupId - 1);
    }

    const changeMinimumCards = (width) => {
        if(width < 450){
            setMinimumCardsGrid(1);
        }else if(width < 550){
            setMinimumCardsGrid(2);
        }else if(width < 850){
            setMinimumCardsGrid(3);
        }else if(width >= 850){
            setMinimumCardsGrid(4);
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

    useEffect(() => {
        setGroupsShows([]);
        createGroupOfShows();
    },[minimumCardsGrid])

    useEffect(() => {
        window.addEventListener('resize', () => changeMinimumCards(window.innerWidth));
        changeMinimumCards(window.innerWidth);
    })

    return(
        <section className={className}>
            <h1>Popular</h1>

            {groupsShows ? 
                <Carrousel numberColumns={groupsShows?.length} numberCards={minimumCardsGrid} changeGrid={currentGroupId} >
                    <button id="back-group" ref={refButtonPrev} onClick={onPrevious}>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>

                    <section id="grid-section">
                        {groupsShows.map((group, index) => (
                            <article id={`section${index}`} className="section-group-shows" key={index}>
                                {group.series.map(serie => (
                                    <Card key={serie.id} imageBackground={serie.image} dataSerie={serie} />
                                ))}
                            </article>
                        ))}
                    </section>

                    <button id="next-group" ref={refButtonNext} onClick={onNext}>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </Carrousel>
                : null
            }
        </section>
    )
}

export default PopularSeriesComponent;