const TextInput = ({
  placeholder,
  type,
  disabled,
  ...rest
}: {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}) => {
  return (
    <div>
      <input
        type={type}
        disabled={disabled}
        {...rest}
        placeholder={placeholder}
        className="border focus:outline-none  border-gray-300 p-2 rounded-xl w-full max-w-xs"
      />
    </div>
  );
};

export default TextInput;
