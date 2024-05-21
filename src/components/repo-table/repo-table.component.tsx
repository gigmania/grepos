import React from 'react';
import { TableContainer, Table, Thead, Th, Tbody, Td } from './repo-table.styles.tsx';

const RepoTable = ({ repos, tHeadOptions, clickHandler }) => {
  return (
    <TableContainer>
      <Table>
        <Thead> 
          <tr key="1">
            {tHeadOptions.map((tHead) => (
              <Th key={tHead.dataName} className={tHead.className} onClick={tHead.clickable ? clickHandler : undefined} abbr={tHead.dataName}>{tHead.displayName}</Th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <Td>{repo.name}</Td>
              <Td>{repo.description}</Td>
              <Td>{repo.createdAt}</Td>
              <Td>{repo.updatedAt}</Td>
              <Td>{repo.createdAt}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RepoTable;
