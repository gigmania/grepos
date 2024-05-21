import React from 'react';
import { TableContainer, Table, Thead, Th, Tbody, Td } from './repo-table.styles.tsx';

const RepoTable = ({ repos, tHeadOptions, clickHandler }) => {

  return (
    <TableContainer>
      <Table>
        <Thead> 
          <tr>
            {tHeadOptions.map((tHead) => (
              <Th key={tHead.displayName} className={tHead.className} onClick={tHead.clickable ? clickHandler : undefined} abbr={tHead.displayName}>{tHead.displayName}</Th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <Td>{repo.name}</Td>
              <Td>{repo.description}</Td>
              <Td>{repo.created_at}</Td>
              <Td>{repo.updated_at}</Td>
              <Td>{repo.created_at}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RepoTable;
