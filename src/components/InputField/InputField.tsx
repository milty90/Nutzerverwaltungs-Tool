import "./InputField.scss";

function InputField({
  title,
  type,
  placeholder,
}: {
  title: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="input-container">
      <p className="input-label">{title}</p>
      <input className="input-field" type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputField;
