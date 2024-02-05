import React from "react";
import DataTable from "react-data-table-component";

import { customStyles } from "./style";

interface IProps {
    column: any[];
    data: any[];
}

const SingleDataTable = ({ column, data }: IProps) => (
        <DataTable
            columns={column}
            data={data}
            persistTableHead
            responsive
            dense
            style={{ cursor: "pointer" }}
            selectableRowsHighlight
            highlightOnHover
            customStyles={customStyles}
        />
    );

export default SingleDataTable;
