"use client";
import React, { useState } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

type TextResourceProps = {
  fontSize: number;
  fontWeight: number;
  sampleText: string;
};
export const TextResource = observer(
  ({ fontSize, fontWeight, sampleText }: TextResourceProps|any) => {
    const [selectedColor, setSelectedColor] = useState("#000");
    const [changedSampleText, setChangedSampleText] = useState(sampleText);
    const [selectedFontSize, setSelectedFontSize] = useState(fontSize);

    const store = React.useContext(StoreContext);

    return (
      <div className="items-center m-[15px] flex flex-row">
        <input
          value={changedSampleText}
          className="flex-1 text-black px-2 py-1"
          style={{
            fontSize: `${selectedFontSize}px`,
            fontWeight: `${fontWeight}`,
            width: "100%",
            color: selectedColor,
          }}
          onChange={(e) => setChangedSampleText(e.target.value)}
        />

        {/* Color Picker */}
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />

        {/* Font Size Picker */}
        {/* <input
          type="number"
          value={selectedFontSize}
          onChange={(e) => setSelectedFontSize(Number(e.target.value))}
        /> */}

        <button
          className="h-[32px] w-[32px] hover:bg-black bg-[rgba(0,0,0,.25)] rounded z-10 text-white font-bold py-1 flex items-center justify-center"
          onClick={() =>
            store.addText({
              text: changedSampleText,
              fontSize: selectedFontSize,
              fontWeight: fontWeight,
              color: selectedColor,
            })
          }
        >
          <MdAdd size="22" />
        </button>
      </div>
    );
  }
);
