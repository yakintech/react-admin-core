import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../network/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'

function CategoryPage() {

    const { data, error } = useQuery("categoryData", () => {
        return axiosInstance.get('categories')
    })
console.log('data', data
);
    const columns = [
        { field: 'id', headerName: 'Id', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        // { field: 'id', headerName: 'Delete', width: 150,renderCell: () => <h1>Hello</h1> },
    ]
    return (<>
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={data?.data}
                columns={columns}
            />
        </div>
    </>)
}

export default CategoryPage