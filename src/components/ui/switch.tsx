import React from 'react';
import Switch from 'react-switch'; // Импорт из библиотеки react-switch
// import { useRouter } from 'next/router';
// import { getDirection } from '@/utils/get-direction';

interface SwitchProps {
  srText?: string;
  checked?: boolean;
  onChange?: (
    checked: boolean,
    event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    id: string,
  ) => void;
}

const SwitchComponent: React.FC<SwitchProps> = ({ srText = 'toggle', checked, onChange }) => {
  const handleSwitchChange = (newChecked: any, event: any, id: any) => {
    onChange && onChange(newChecked, event, id);
  };

  return (
    <label>
      <Switch checked={checked || false} onChange={handleSwitchChange} aria-label={srText} />
    </label>
  );
};

export default SwitchComponent;
