import React, { useEffect, useState } from "react";
import { getJourneysFrom, getJourneysTo, getStation } from "../../api/api";

const SingleStation = ({station, setActive, setSelectionModel}) => {
    const [info, setInfo] = useState(null);
    const [journeusFrom, setJourneusFrom] = useState([]);
    const [journeusTo, setJourneusTo] = useState([]);
    const [avgFrom, setAvgFrom] = useState(0);
    const [avgTo, setAvgTo] = useState(0);

    const mapProps = {
        center: {
            lat: 60.1699,
            lon: 24.9384
        },
        zoom: 10
    }

    useEffect(() => {
        getStation(station[0]).then(res => {
            setInfo(res);

            getJourneysFrom(res.id).then(result => {
                if (result.length > 0) {
                    let avg = 0;
                    result.forEach(row => {
                        avg += Number(row.distance);
                    })
                    setAvgFrom(Math.floor(((avg/result.length)/1000)*100)/100); //get avg distance in kilometers

                    setJourneusFrom(result); 
                }
            })

            getJourneysTo(res.id).then(result => {
                if (result.length > 0) {
                    let avg = 0;
                    result.forEach(row => {
                        avg += Number(row.distance);
                    })
                    setAvgTo(Math.floor(((avg/result.length)/1000)*100)/100); //get avg distance in kilometers

                    setJourneusTo(result);
                }
            })
        })
    },[])

    const returnToList = () => {
        setSelectionModel([]);
        setActive('grid');
    }

    return (
        <div>
            <div className="container" style={{border: '1px solid #000', borderRadius: '12px'}}>
                {info != null && 
                <div>
                    <div className="main-heading">{`${info.nameFI}/${info.nameSWE}/${info.name}`}</div>
                    <div className="info-container">
                        <div className="info">
                            <div className="info-row"><strong>Address: </strong>{`${info.addressFI}/${info.addressSWE}`}</div>
                            <div className="info-row"><strong>Journeys from the station: </strong>{`${journeusFrom.length} (Avg. distance of a journey: ${avgFrom} km)`}</div>
                            <div className="info-row"><strong>Journeys to the station: </strong>{`${journeusTo.length} (Avg. distance of a journey: ${avgTo} km)`}</div>
                        </div>
                    </div>
                </div>}
            </div>
            <div>
                <button className="btn" onClick={returnToList}>Return</button>
            </div>
        </div>
    )
}

export default SingleStation;