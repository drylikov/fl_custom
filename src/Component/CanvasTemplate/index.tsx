import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import db from './db';
import DesignCanvasList from './DesignCanvasList';

const CanvasTemplate: React.FC = () => {
  const [currentSide, setCurrentSide] = useState("front");

  const [isPreview, setIsPreview] = useState(false);

  const [snapshot, setSnapshot] = useState(() => {
    return  {};
  });

  useEffect(() => {
    localStorage.setItem("snapshot", JSON.stringify(snapshot));
  }, [snapshot]);
  return (
    <div>
      <DesignCanvasList
        canvases={db.canvases}
        snapshot={snapshot}
        setSnapshot={setSnapshot}
      />
    </div>
  );
};

export default CanvasTemplate;
