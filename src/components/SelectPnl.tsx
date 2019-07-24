import React from "react";
import { map } from "lodash";

interface ISelectProps {
  name: string;
  id: string;
  options: [];
}

const SelectPnl: React.FC<ISelectProps> = ({ name, id, options }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <div>
        <select name={name} id={id || name}>
          {map(options, (option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectPnl;
