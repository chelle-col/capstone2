import SubTable from '../listComponents/SubTable';
import { useTable } from "react-table";
import { useMemo } from 'react';

const InitTable = ({ data }) => {

    const columns = useMemo( 
        () => [
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Initiative',
                accessor: 'initiative'
            }
        ]
    );

    const tableInstance = useTable({
        columns,
        data
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <SubTable 
            getTableBodyProps={getTableBodyProps}
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            page={rows}
            prepareRow={prepareRow}
        />
    )
}

export default InitTable;