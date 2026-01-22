import type { ChangeEvent, ChangeEventHandler } from "react";
import "./InputField.scss";

type Props = {
  title: string;
  type: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

function InputField({ title, type, placeholder, onChange, value }: Props) {
  return (
    <div className="input-container">
      <p className="input-label">{title}</p>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputField;
