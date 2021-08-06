import { Table } from 'reactstrap';

const SubTable = ({ getTableBodyProps, getTableProps, headerGroups, page, prepareRow}) => {
    return (
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
    )
}

export default SubTable;