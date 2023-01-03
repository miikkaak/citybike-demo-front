import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { fetchPaginatedStations, getStationsCount, findStation } from "../../api/api";
import '../../styles/datagrid.css';
import SingleStation from "../other/SingleStation";

const StationsTable = () => {
    const [rows, setRows] = useState([]);
    const [currentLocalPage, setCurrentLocalPage] = useState(1);
    const [rowsCount, setRowsCount] = useState(0);
    const [active, setActive] = useState('grid');
    const [selectionModel, setSelectionModel] = useState([]);

    const BarStyling = { width: "100%", height: "2rem", background: "#f3f3f5", border: "none", };

    const columns = [
        {field: "id", headerName: "ID", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
        {field: "name", headerName: "Name", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
        {field: "addressFI", headerName: "Address", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
        {field: "city", headerName: "City", flex: 1, sortable: true, headerAlign: "left", minWidth: 200, headerClassName: "table-header"},
    ]

    useEffect(() => {
        fetchStations()
    }, [currentLocalPage])

    const fetchStations = async() => {
        getStationsCount().then((count) => {
            setRowsCount(count);
            fetchPaginatedStations(10, currentLocalPage)
            .then(data => {
                data.forEach(row => {
                    if (row.city == ' ') {
                        row.city = "Helsinki";
                    }
                });
                setRows(data);
            }); 
        }) 
    }

    const handlePagination = (params) => {
        setCurrentLocalPage(params + 1)
    }

    const searchStation = async(search) => {
        try {
            findStation(search).then((res) => {
                res.forEach(row => {
                    if (row.city == ' ') {
                        row.city = "Helsinki";
                    }
                });
                setRows(res);
            })
        } catch (err) { 
            console.error(err)
        }
    }

    return (
        <div className="table-container">
            {active=="grid" && 
            <div>
                <div className="search">
                    <div className="search-bar">
                        <input className="search-input"
                            style={BarStyling}
                            key="searchbar"
                            placeholder={"Search for station by name"}
                            onChange={(e) => searchStation(e.target.value)}
                        />
                    </div>
                </div>
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
                        onSelectionModelChange={(newSelection) => {
                            setSelectionModel(newSelection);
                            setActive('single');
                        }}
                        selectionModel={selectionModel}
                    />
                </div>
            </div>
            }  
            {active=='single' && <SingleStation station={selectionModel}/>}
            <div className="license">
                Data provided by <a href="https://www.avoindata.fi/data/fi/dataset/hsl-n-kaupunkipyoraasemat">HSL</a>
            </div>
        </div>
    )
}

export default StationsTable;