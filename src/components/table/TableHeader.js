import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useSelector } from "react-redux";


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

const headers = useSelector(state=>state.headerData)

  return (
    <TableHead sx={{position: "sticky"}}>
      <TableRow>
        <StyledTableCell align="center">Sr.</StyledTableCell>
        {headers.map((item,index) => (
          <StyledTableCell key={index} align="center">{item}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

