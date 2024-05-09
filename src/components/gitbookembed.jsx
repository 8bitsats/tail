// components/GitBookEmbed.js
import React from 'react';

const GitBookEmbed = ({ url, width = "100%", height = "600px" }) => {
  if (!url) return <div>GitBook URL is required</div>;

  return (
    <iframe
      src={url}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      title="Embedded GitBook"
      style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
    />
  );
};

export default GitBookEmbed;
