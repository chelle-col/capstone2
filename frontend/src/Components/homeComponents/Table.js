import { Button }from 'reactstrap';
import { useMemo } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import ColumnFilter from '../../helpers/ColumnFilter';
import SubTable from '../listComponents/SubTable'

const ETTable = ({ data, handleClick, handleNavigation }) => {
    
    const origionalData = useMemo(
        () => Object.values(data), [data]);

    const columns = useMemo(
        () => [
          { Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
            Cell: ({ cell }) => (
                <Button className='bg-primary' onClick={() => handleNavigation(cell.row.original.slug)}>{cell.row.original.name}</Button>
            ),
            Filter: ColumnFilter
        },
        { Header: 'Cr',
            accessor: 'cr',
            Filter: ColumnFilter
        },
        { Header: 'Type',
            accessor: 'type',
            Filter: ColumnFilter
        },
        { Header: 'Size',
            accessor: 'size',
            Filter: ColumnFilter
        },
        { Header: 'Add',
            accessor: 'add',
            Cell: ({ cell }) => (
                // TODO: remove based on what is in current encounter
                <Button className='bg-primary' onClick={() => handleClick(cell.row.original)}>+</Button>
            ),
            disableFilters: true
        }
        ], []);

    const tableInstance = useTable({ 
            columns, data: origionalData 
        },
        useFilters,
        usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        canNextPage,
        canPreviousPage,
        previousPage,
        prepareRow,
      } = tableInstance;

    return (
    <>
        <SubTable 
            getTableBodyProps={getTableBodyProps} 
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            page={page}
            prepareRow={prepareRow}
        />
        <Button disabled={!canPreviousPage} className='mx-1 bg-primary' onClick={() => previousPage()}>Previous</Button>
        <Button disabled={!canNextPage} className='mx-1 bg-primary' onClick={() => nextPage()}>Next</Button>
    </>
    )
}

export default ETTable;