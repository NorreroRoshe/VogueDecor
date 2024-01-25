import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { IRange } from "../GoodsCatalogue/FilterBlock/FilterBlock";
import { useRouter } from "next/router";

export type IMinMax = { min: number; max: number };

interface IRangeComponentProps extends IRange {
  changeValues?: (props: IMinMax) => void;
  RangeValue: IRange;
  trigger: any;
}

const RangeComponent: React.FC<IRangeComponentProps> = ({
  minValue,
  maxValue,
  changeValues,
  RangeValue,
  trigger,
}) => {
  const [minInputValue, setMinInputValue] = useState(minValue.toString());
  const [maxInputValue, setMaxInputValue] = useState(maxValue.toString());
  
  const [sliderValue, setSliderValue] = useState({
    minValue,
    maxValue,
  });

  const { query } = useRouter();

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    setMinInputValue(minValue.toString());
    setMaxInputValue(maxValue.toString());
    setSliderValue({ minValue, maxValue });
  }, 1);
  return () => {
    clearTimeout(timeoutId);
  };
  }, [minValue, maxValue]);

  const handleSliderChange = (newValue: number | number[]) => {
    const [min, max] = newValue as [number, number];
    setSliderValue((prev) => ({ ...prev, minValue: min, maxValue: max }));
    changeValues && changeValues({ min, max });
  };

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue((prev) => ({ ...prev, minValue: Number(event.target.value) }));
    const newMinValue = parseInt(event.target.value, 10);
    if (
      !isNaN(newMinValue) &&
      newMinValue <= parseInt(maxInputValue, 10) &&
      newMinValue >= RangeValue.minValue
    ) {
      setMinInputValue(newMinValue.toString());
      changeValues &&
        changeValues({ min: newMinValue, max: parseInt(maxInputValue, 10) });
    } else if (event.target.value === "") {
      setMinInputValue("0");
      changeValues && changeValues({ min: 0, max: parseInt(maxInputValue, 10) });
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue((prev) => ({ ...prev, maxValue: Number(event.target.value) }));
    const newMaxValue = parseInt(event.target.value, 10);
    if (
      !isNaN(newMaxValue) &&
      newMaxValue >= parseInt(minInputValue, 10) &&
      newMaxValue <= RangeValue.maxValue
    ) {
      setMaxInputValue(newMaxValue.toString());
      changeValues &&
        changeValues({ min: parseInt(minInputValue, 10), max: newMaxValue });
    } else if (event.target.value === "") {
      setMaxInputValue("0");
      changeValues && changeValues({ min: parseInt(minInputValue, 10), max: 0 });
    }
  };

  useEffect(() => {
    setSliderValue((prev) => ({
      ...prev,
      minValue: Number(minInputValue),
      maxValue: Number(maxInputValue),
    }));
  }, [query.Category, trigger]);

  return (
    <div className="range-wrapper">
      <div className="range-minmax">
        <input
          className="range-min"
          type="number"
          value={sliderValue.minValue}
          onChange={handleMinInputChange}
          min={RangeValue?.minValue}
          max={maxInputValue}
        />
        <input
          className="range-max"
          type="number"
          value={sliderValue.maxValue}
          onChange={handleMaxInputChange}
          min={minInputValue}
          max={RangeValue?.maxValue}
        />
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[minValue, maxValue]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={1}
        min={RangeValue?.minValue}
        max={RangeValue?.maxValue}
        value={[sliderValue.minValue, sliderValue.maxValue]}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default RangeComponent;












// правильный код но без parseInt

// import React, { useState } from 'react';
// import ReactSlider from 'react-slider';
// import { IRange } from '../GoodsCatalogue/FilterBlock/FilterBlock';

// export type IMinMax = { min: number; max: number };

// interface IRangeComponentProps extends IRange {
//       changeValues?: (props: IMinMax) => void;
//       RangeValue: IRange;
// }

// const RangeComponent: React.FC<IRangeComponentProps> = ({
//   minValue,
//   maxValue,
//   changeValues,
//   RangeValue,
// }) => {

//     const [minInputValue, setMinInputValue] = useState(minValue);
//     const [maxInputValue, setMaxInputValue] = useState(maxValue);

//     const handleSliderChange = (newValue: number | number[]) => {
//     if (typeof newValue !== 'number' && changeValues) {
//       const [min, max] = newValue;
//       changeValues({ min, max });
//       setMinInputValue(min.toString()); // Преобразуем в строку без ведущего нуля
//       setMaxInputValue(max.toString()); // Преобразуем в строку без ведущего нуля
//     }
//   };

//   const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newMinValue = parseInt(event.target.value, 10);
//     if (!isNaN(newMinValue) && newMinValue <= maxInputValue && newMinValue >= RangeValue.minValue) {
//       setMinInputValue(newMinValue.toString()); // Преобразуем в строку без ведущего нуля
//       changeValues && changeValues({ min: newMinValue, max: maxInputValue });
//     } else if (event.target.value === '') {
//       setMinInputValue('0'); // Устанавливаем '0', если поле пустое
//       changeValues && changeValues({ min: 0, max: maxInputValue });
//     }
//   };

//   const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newMaxValue = parseInt(event.target.value, 10);
//     if (!isNaN(newMaxValue) && newMaxValue >= minInputValue && newMaxValue <= RangeValue.maxValue) {
//       setMaxInputValue(newMaxValue.toString()); // Преобразуем в строку без ведущего нуля
//       changeValues && changeValues({ min: minInputValue, max: newMaxValue });
//     } else if (event.target.value === '') {
//       setMaxInputValue('0'); // Устанавливаем '0', если поле пустое
//       changeValues && changeValues({ min: minInputValue, max: 0 });
//     }
//   };

//   return (
//     <div>
//       <ReactSlider
//         className="horizontal-slider"
//         thumbClassName="example-thumb"
//         trackClassName="example-track"
//         defaultValue={[minValue, maxValue]}
//         ariaLabel={['Lower thumb', 'Upper thumb']}
//         ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
//         renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//         pearling
//         minDistance={1}
//         min={RangeValue.minValue}
//         max={RangeValue.maxValue}
//         value={[minValue, maxValue]}
//         onChange={handleSliderChange}
//       />
//             <div>
//         <label>Min:</label>
//         <input
//           type="number"
//           value={minInputValue}
//           onChange={handleMinInputChange}
//           min={RangeValue.minValue}
//           max={maxInputValue}
//         />
//       </div>
//       <div>
//         <label>Max:</label>
//         <input
//           type="number"
//           value={maxInputValue}
//           onChange={handleMaxInputChange}
//           min={minInputValue}
//           max={RangeValue.maxValue}
//         />
//       </div>
//     </div>
//   );
// };

// export default RangeComponent;

// //@mui двойной слайдер

// import React, { useEffect, useState } from 'react';
// import Slider from '@mui/material/Slider';
// import Input from '@mui/material/Input';

// export type IMinMax = { min: number; max: number };

// interface IRangeComponentProps {
//   minValue: number;
//   maxValue: number;
//   changeValues?: (props: IMinMax) => void;
//   RangeValue: { minValue: number; maxValue: number };
// }

// export const RangeComponent: React.FC<IRangeComponentProps> = ({
//   minValue,
//   maxValue,
//   changeValues,
//   RangeValue,
// }) => {
//   const [values, setValues] = useState<IMinMax>({
//     min: minValue || RangeValue.minValue,
//     max: maxValue || RangeValue.maxValue,
//   });

//   useEffect(() => {
//     setValues({ min: minValue, max: maxValue });
//   }, [minValue, maxValue]);

//   const handleChange = (event: Event, newValues: number | number[]) => {
//     let newMinValue, newMaxValue;

//     if (!Array.isArray(newValues)) {
//       newMinValue = newValues;
//       newMaxValue = values.max;
//     } else {
//       newMinValue = newValues[0];
//       newMaxValue = newValues[1];
//     }

//     setValues({ min: newMinValue, max: newMaxValue });
//     changeValues && changeValues({ min: newMinValue, max: newMaxValue });
//   };

//   return (
//     <div>
//       <Slider
//         value={[values.min, values.max]}
//         onChange={handleChange}
//         valueLabelDisplay="on"
//         valueLabelFormat={(value) => `${value}`}
//         min={RangeValue.minValue}
//         max={RangeValue.maxValue}
//       />
//     </div>
//   );
// };
