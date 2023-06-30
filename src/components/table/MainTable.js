import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableHeader from "./TableHeader";
import TableBody from "./TableData";

const StyledTableContainer = styled(TableContainer)`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  position: relative;
  overflow: auto;
  max-height: 81vh;

  /* Add the following style to the table headers */
  .MuiTableHead-root {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.palette.common.black};
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
const MainTable = () => {
  return (
    <StyledTableContainer
      component={Paper}
      sx={{ width: "90%", margin: "2rem auto", maxHeight: "81vh" }}
    >
      <Table sx={{ width: "100%" }} aria-label="customized table" size="small">
        <TableHeader />
        <TableBody />
      </Table>
    </StyledTableContainer>
  );
};

export default MainTable;
