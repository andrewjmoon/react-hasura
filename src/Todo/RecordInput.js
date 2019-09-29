import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { addRecord, getRecords } from './Queries';


const RecordInput = () => {
  const [band, setBand] = useState('');
  const [album, setAlbum] = useState('');
  //const [episode, setEpisode] = useState('');
  //const [rating, setRating] = useState('');
  const resetInput = () => {
    setBand('');
    setAlbum('');
  };

  return (
    <Mutation
      mutation={addRecord}
      refetchQueries={() => {
        return [
          {
            query: getRecords,
            variables: { band, album }
          }
        ];
      }}
      resetInput
    >
      {(addRecord, { data }) => (
        <form
          className="center"
          onSubmit={e => {
            e.preventDefault();
            addRecord({
              variables: {
                band,
                album
              }
            }).then(resetInput);
          }}
        >
          <fieldset>
            <input
              type="text"
              placeholder="Band"
              value={band}
              onChange={e => setBand(e.target.value)}
            />
            <input
              type="text"
              placeholder="Album"
              value={album}
              onChange={e => setAlbum(e.target.value)}
            />

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      )}
    </Mutation>
  );
};
export default RecordInput;
