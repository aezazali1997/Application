import React from 'react';
import Moment from 'react-moment';
import { ProjectType } from '@types';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableHead,
} from '@shared';
import { StyledTableCell } from './TableCell/TableCell';
import { StyledTableRow } from './TableRow/TableRow';
import { DeleteButton } from './DeleteButton/DeleteButton';
import { EditButton } from './EditButton/EditButton';
import { ViewButton } from './ViewButton/ViewButton';
import { styles } from './TabularView.style';
type Props = {
  data: ProjectType;
};

export const CustomizedTables: React.FC<Props> = ({ data }) => {
  const classes = styles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Start Date</StyledTableCell>
            <StyledTableCell>End Date</StyledTableCell>
            <StyledTableCell>Company Name</StyledTableCell>
            <StyledTableCell>Role</StyledTableCell>
            <StyledTableCell>URL</StyledTableCell>
            <StyledTableCell>Operations</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.UI__getAllProjects.map(
            ({ id, title, start, end, client, role, url }) => (
              <StyledTableRow key={title}>
                <StyledTableCell component="th" scope="row">
                  {title}
                </StyledTableCell>
                <StyledTableCell>
                  <Moment format="DD/MM/YYYY">{start}</Moment>
                </StyledTableCell>
                <StyledTableCell>
                  <Moment format="DD/MM/YYYY">{end}</Moment>
                </StyledTableCell>
                <StyledTableCell>{client.name}</StyledTableCell>
                <StyledTableCell>{role}</StyledTableCell>
                <StyledTableCell>{url}</StyledTableCell>
                <StyledTableCell>
                  <DeleteButton id={id} />
                  <EditButton id={id} />
                  <ViewButton id={id} />
                </StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
