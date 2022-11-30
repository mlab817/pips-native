import {gql} from '@apollo/client';

export const GET_OFFICES = gql`
  query GetOffices {
    offices {
      id
      acronym
      name
    }
  }
`;

export const GET_STATUSES = gql`
  query GetStatuses {
    pipsStatuses {
      id
      name
      count
    }
  }
`;
