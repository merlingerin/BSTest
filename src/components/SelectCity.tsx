import React from "react";
import { map } from "lodash";

interface ISelectProps {
  name: string;
  id: string;
  options: [];
}

const SelectCity: React.FC<ISelectProps> = ({ name, id, options }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <div>
        <select name={name} id={id || name}>
          {map(options, (option: { Id: number; Name: string }) => (
            <option key={option.Id} value={option.Id}>
              {option.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectCity;
