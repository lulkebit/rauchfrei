import "bootstrap/dist/css/bootstrap.min.css";

const TextInput = ({ label, placeHolder, onChange, value, name }) => {
  return (
    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">{label}</span>
        <input 
          type="text" 
          class="form-control" 
          placeholder={placeHolder} 
          aria-label={label} 
          aria-describedby="basic-addon1" 
          onClick={(e) => e.target.select()}
          name={name} 
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
