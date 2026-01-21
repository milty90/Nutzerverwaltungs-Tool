import "./DropDownList.scss";
interface DropDownListProps {
  label: string;
  options: { value: string; label: string }[];
}

function DropDownList({ label, options }: DropDownListProps) {
  return (
    <div className="dropdown-container">
      <p className="dropdown-label">{label}</p>
      <select className="dropdown-select" id="gender" name="gender">
        {options.map((option) => (
          <option
            key={option.value}
            className="dropdown-option"
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownList;
