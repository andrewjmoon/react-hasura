import gql from 'graphql-tag';

const getRecords = gql`
  query records {
    records {
      id
      band
      album
    }
  }
`;

const addRecord = gql`
  mutation addRecord($album: String!, $band: String!) {
    insert_records(objects: [{ album: $album, band: $band }]) {
      returning {
        album
        band
      }
    }
  }
`;

const deleteRecord = gql`
  mutation delete_records($id: uuid) {
    delete_records(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export { addRecord, deleteRecord, getRecords };
