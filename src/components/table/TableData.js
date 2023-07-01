import React from "react";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";


const TableData = () => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const {headers, rows} = useSelector((state)=>({
    headers:state.headerData,
    rows:state.rows
  }))
  console.log(rows);


  return (
    <TableBody>
      {rows.map((row,index) => (
        <StyledTableRow key={index}>
          <StyledTableCell  align="center" >
            {index+1}
          </StyledTableCell>
            {headers.map(item=><StyledTableCell key={item}  align="center" >{row[item]}</StyledTableCell>)}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default TableData;
