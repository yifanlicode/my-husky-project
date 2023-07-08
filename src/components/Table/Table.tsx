import React from "react";
import styled from "styled-components";

// contain 4 components: TableHeader, TableCell, TableFooter, TableRow
// ALL of these components are used in the Table component
// TableCell is used in the TableHeader, TableFooter, TableRow components
// Components will visually change colour (I.e. greyed out) and the curser will indicate that the user cannot “click” on the component
// Controls’ to modify properties such as default text and background color

interface TableProps {
  disabled?: boolean;
  children?: React.ReactNode;
  footerText?: string;
  headerText?: string;
  cellText?: string;
}

interface TableHeaderProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

interface TableRowProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

interface TableCellProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

interface TableFooterProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

const TableContainer = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;
  display: table;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
`;

// TableHeader component
const TableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
  font-weight: bold;
  text-align: left;
`;

// TableCell component
const TableCell = styled.td<TableCellProps>`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  display: table-cell;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
`;

// TableRow component
const TableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
  font-weight: normal;
  text-align: left;
  padding: 8px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
  width: 100%;
  display: table-row-group;
`;

// TableFooter component
const TableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
  font-weight: bold;
  text-align: left;
  padding: 8px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
  width: 100%;
  display: table-footer-group;
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <TableContainer disabled={disabled}>{children}</TableContainer>;
};

export default Table;

export { TableHeader, TableCell, TableRow, TableFooter };
