import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
const TableHeader = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
      // Add the following style to the first cell
      '&:first-of-type': {
        width: '5%', // Adjust the width as needed
      },
  }));
  const headerData = [
    "Date",
    "Days",
    "Name",
    "Variant",
    "Type",
    "Instrument",
    "Quantity",
    "Margin",
    "Slippage",
    "ROI",
    "PNL",
  ];
  return (
    <TableHead sx={{position: "sticky"}}>
      <TableRow>
        <StyledTableCell align="center">Sr.</StyledTableCell>
        {headerData.map((item,index) => (
          <StyledTableCell key={index} align="center">{item}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

