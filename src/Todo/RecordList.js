import React from 'react';

import { Query } from 'react-apollo';
import { getRecords } from './Queries';
import DeleteRecord from './DeleteRecord';

const RecordList = () => (
  <Query query={getRecords}>
    {({ data, error, loading }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error...</div>;
      return (
        <div>
          <h1 className="center">Record List</h1>
          {data.records.map(({ band, album, id }) => {
            return (
              <div className="center" key={id}>
                
                <p>
                  {band}: {album}
                </p>
                <DeleteRecord id={id} />
              </div>
            );
          })}
        </div>
      );
    }}
  </Query>
);
export default RecordList;
