import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'name',
    width: 400,
    editable: true,
  },
  {
    field: 'day',
    headerName: 'day',
    type: 'date',
    width: 150,
    editable: true,
  },
  {
    field: 'size',
    headerName: 'size',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'link',
    headerName: 'link',
    type: 'string',
    width: 310,
    editable: true,
  },
];



const colm = [
  { id: 1, Name: 'f9e4608e-baf0-4fd0-bafb-9227f9194b66', day: '2022-03-28', size: 35, link:'https://www.naver.com/' },
  { id: 2, Name: 'Lannister', day: 'Cersei', size: 42 },
  { id: 3, Name: 'Lannister', day: 'Jaime', size: 45 },
  { id: 4, Name: 'Stark', day: 'Arya', size: 16 },
  { id: 5, Name: 'Targaryen', day: 'Daenerys', size: null },
  { id: 6, Name: 'Melisandre', day: null, size: 150 },
  { id: 7, Name: 'Clifford', day: 'Ferrara', size: 44 },
  { id: 8, Name: 'Frances', day: 'Rossini', size: 36 },
  { id: 9, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 10, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 11, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 12, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 13, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 14, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 15, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 16, Name: 'Roxie', day: 'Harvey', size: 65 },
  { id: 17, Name: 'Snow', day: 'Jon', size: 35 },
  { id: 18, Name: 'Lannister', day: 'Cersei', size: 42 },
  { id: 19, Name: 'Lannister', day: 'Jaime', size: 45 },
  { id: 20, Name: 'Stark', day: 'Arya', size: 16 },
  { id: 21, Name: 'Targaryen', day: 'Daenerys', size: null },
  { id: 22, Name: 'Melisandre', day: null, size: 150 },
  { id: 23, Name: 'Clifford', day: 'Ferrara', size: 44 },
  { id: 24, Name: 'Frances', day: 'Rossini', size: 36 },
  { id: 25, Name: 'Roxie', day: 'Harvey', size: 65 },
];


export default function DataGridDemo() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={colm}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
   
      />
    </div>
  );
}