import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { fetchPaginatedJourneys, getJourneysCount } from "../../api/api";
import '../../styles/datagrid.css';

const JourneysTable = () => {
    const [rows, setRows] = useState([]);
    const [currentLocalPage, setCurrentLocalPage] = useState(1);
    const [rowsCount, setRowsCount] = useState(0);

    const columns = [
        {field: "depStationName", headerName: "From", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
        {field: "retStationName", headerName: "To", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
        {field: "distance", headerName: "Distance (km)", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
        {field: "duration", headerName: "Duration (minutes)", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
    ]

    useEffect(() => {
        fetchJourneys()
    }, [currentLocalPage])

    const fetchJourneys = async() => {
        getJourneysCount().then((count) => {
            setRowsCount(count);
            fetchPaginatedJourneys(10, currentLocalPage)
            .then(data => {
                data.forEach((row) => {
                    row.distance = Math.floor((Number(row.distance)/1000)*100)/100; //to kilometers with 2 sigits
                    row.duration = Math.floor((Number(row.duration)/60)*100)/100; //to minutes with 2 sigits
                });
                setRows(data);
            }); 
        }) 
    }

    const handlePagination = (params) => {
        setCurrentLocalPage(params + 1)
    }

    return (
        <div className="table-container">
            <div className="datagrid">
                <DataGrid 
                    disableColumnMenu={true}
                    columns={columns}
                    rows={rows}
                    paginationMode="server"
                    autoPageSize={true}
                    onPageChange={handlePagination}
                    rowCount={rowsCount}
                    autoHeight={true}
                />
            </div>
        </div>
    )
}

export default JourneysTable;