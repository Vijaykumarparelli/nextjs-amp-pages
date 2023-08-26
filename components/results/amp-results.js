import React from 'react';
import AmpCard from './imp-card';

function AmpResults({ results }) {
  return (
    <div className="row">
      {results.map((res) => (
        <div className="col mt-4" key={res.id}>
          <AmpCard result={res} />
        </div>
      ))}
    </div>
  );
}

export default AmpResults;
