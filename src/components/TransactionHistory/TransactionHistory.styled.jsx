import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 2px solid black;
  width: 360px;
  border-collapse: collapse;
  margin: 40px auto;

  & th,
  & td {
    padding: 10px;
    text-align: center;

    border: 1px solid black;
  }
  & th {
    background-color: #92bbc9;
    font-weight: bold;
    border-bottom: 2px solid black;
  }

  & tr:nth-of-type(odd) {
    background-color: #c8d2d1;
  }

  & tr:nth-of-type(even) {
    background-color: white;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }
`;
