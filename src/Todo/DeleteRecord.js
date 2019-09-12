import React from 'react';
import { Mutation } from 'react-apollo';
import { deleteRecord, getRecords } from './Queries';

const DeleteRecord = ( id ) => {
  return (
    <Mutation mutation={deleteRecord}>
      {(delete_records, { data }) => (
        <span
          title="Delete Todo"
          className="float-right mt-n2 ml-4"
          onClick={e => {
            delete_records({
              variables: id,
              refetchQueries: [{ query: getRecords }]
            });
          }}
        >
          <button>Remove</button>
        </span>
      )}
    </Mutation>
  );
};
export default DeleteRecord;
