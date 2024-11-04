import React from "react";
import MyEditor from "./MyEditor";

const DesignCanvasList = ({ canvases, snapshot, setSnapshot }:{canvases:any,snapshot:any,setSnapshot:any}) => {
  console.log(canvases);
  return (
    <ul>
      {canvases
        // .filter((c) => c.side === currentSide)
        .map((c:any, index : any) => (
          <MyEditor
            {...c}
            key={"myeditor-" + index}
            snapshot={snapshot[`${c.mockupId}-${c.side}`]}
            takeSnapshot={(json :any) => {
              setSnapshot((prevState:any) => ({
                ...prevState,
                [`${c.mockupId}-${c.side}`]: json
              }));
            }}
          />
        ))}
    </ul>
  );
};

export default DesignCanvasList;
