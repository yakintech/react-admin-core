import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { axiosInstance } from '../../../network/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { Button, CircularProgress } from '@mui/material'
import DetailModal from './DetailModal'

function CategoryPage() {

    const [open, setOpen] = useState(false);
    const [name, setname] = useState('');
    const [description, setdescription] = useState('')


    const { data, error, isLoading, isSuccess, refetch } = useQuery("categoryData", () => {
        return axiosInstance.get('categories')
    })

    //data -> number, object, array
    const mutation = useMutation({
        mutationFn: async (data) => {
            let result = await axiosInstance.delete(`categories/${data}`);
            return result;
        },
        onSuccess: (data) => {
            refetch();
        },
        onError: (err) => {
            console.log('Error', err);
        }
    })


    const deleteCategory = (params) => {
        mutation.mutate(params.id)
    }


    const showDetail = (params) => {
        setOpen(true);
        setname(params.row.name);
        setdescription(params.row.description)
    }

    const columns = [
        { field: 'id', headerName: 'Id', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        
        { field: "delete", headerName: "Delete", renderCell: (params) => <Button onClick={() => deleteCategory(params)} variant="outlined" color="error">Delete</Button> },

        { field: "detail", headerName: "Detail", width: 250, renderCell: (params) => <Button onClick={() => showDetail(params)} variant="outlined" color="error">Show Detail</Button> }

    ]
    return (<>
        <DetailModal open={open} setOpen={setOpen} name={name} description={description} />
        {
            isLoading && <CircularProgress />
        }
        {
            mutation.isLoading && <CircularProgress />
        }
        {

            isSuccess && <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={data?.data}
                    columns={columns}
                />
            </div>
        }

    </>)
}

export default CategoryPage