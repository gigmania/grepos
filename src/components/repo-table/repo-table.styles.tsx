import styled from 'styled-components';

export const TableContainer = styled.div`
  max-height: 800px; /* Adjust this value as needed */
  overflow-y: auto;
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

export const Thead = styled.thead`
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Th = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  
  &.sortable {
    &:hover{
      color: #f2f2f2;
      background-color: black;
      cursor: pointer;
    }
  }
`;

export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

