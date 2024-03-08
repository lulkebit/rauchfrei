import "bootstrap/dist/css/bootstrap.min.css";

const NumberInput = ({ label, placeHolder, name, onChange, value }) => {
  return (
    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">{label}</span>
        <input 
          type="number" 
          class="form-control" 
          placeholder={placeHolder} 
          aria-label={label} 
          aria-describedby="basic-addon1" 
          name={name} 
          value={value}
          onClick={(e) => e.target.select()}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default NumberInput;
