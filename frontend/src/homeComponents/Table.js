import { Table, Button }from 'reactstrap';
import { useMemo } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import ColumnFilter from '../helpers/ColumnFilter';

const ETTable = ({ data, handleClick, handleNavigation }) => {
    
    const origionalData = useMemo(
        () => Object.values(data), [data]);

    const columns = useMemo(
        () => [
          { Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
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
                <Button onClick={() => handleClick(cell.row.original)}>+</Button>
            ),
            disableFilters: true
        },
        { Header: 'Details',
        accessor: 'see',
        Cell: ({ cell }) => (
            <Button onClick={() => handleNavigation(cell.row.original.slug)}><i className="fas fa-info-circle"></i></Button>
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
        <Table striped hover className='table-secondary' {...getTableProps()}>
            <thead >
                {headerGroups.map(hG => (
                    <tr {...hG.getHeaderGroupProps()}>
                        {hG.headers.map( c => (
                            <th {...c.getHeaderProps()}>
                                {c.render('Header')}
                                <span>{c.canFilter ? c.render('Filter') : null}</span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map( r => {
                    prepareRow(r)
                    return (
                        <tr {...r.getRowProps()}>
                            {r.cells.map(c =>{ 
                                return(
                                    <td className='text-capitalize' {...c.getCellProps()}>
                                        {c.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <Button disabled={canNextPage} className='mx-1 bg-primary' onClick={() => previousPage()}>Previous</Button>
        <Button disabled={canPreviousPage} className='mx-1 bg-primary' onClick={() => nextPage()}>Next</Button>
    </>
    )
}

export default ETTable;