import { Table, Button }from 'reactstrap';
import { useMemo } from 'react';
import { useTable } from 'react-table';

const ETTable = ({ data, handleClick, handleNavigation }) => {
    
    const origionalData = useMemo(
        () => Object.values(data), [data]);

    const columns = useMemo(
        () => [
          { Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
        },
          { Header: 'Cr',
            accessor: 'cr',},
        { Header: 'Type',
            accessor: 'type',},
        { Header: 'Size',
            accessor: 'size',},
        { Header: 'Add',
            accessor: 'add',
            Cell: ({ cell }) => (
                // TODO: remove based on what is in current encounter
                <Button onClick={() => handleClick(cell.row.original)}>+</Button>
            )},
        { Header: 'Details',
        accessor: 'see',
        Cell: ({ cell }) => (
            <Button onClick={() => handleNavigation(cell.row.original.slug)}><i className="fas fa-info-circle"></i></Button>
        )}
        ], []);

    const tableInstance = useTable({ columns, data: origionalData });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance;

    return (
    <Table striped hover className='table-secondary' {...getTableProps()}>
        <thead >
            {headerGroups.map(hG => (
                <tr {...hG.getHeaderGroupProps()}>
                    {hG.headers.map( c => (
                        <th {...c.getHeaderProps()}>
                            {c.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map( r => {
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
        )
}

export default ETTable;