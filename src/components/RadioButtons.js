function RadioButtons() {
    const submitHandler = (e) => {
      e.preventDefault();
      var formData = new FormData(e.target);
  
      const form_values = Object.fromEntries(formData);
      console.log("qq", form_values);
    };
    return (
      <>
        <div className="container p-3">
            <h5 >Select Favourite Framework</h5>
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="radio"
                name="radio-image"
                id="radio-form-image1"
                defaultValue={"react"}
              />
              <label htmlFor="radio-form-image1">
                <img
                  alt="radio-image-select-1"
                  layout="responsive"
                  width={"40px"}
                  height={"40px"}
                  src={"/logo192.png"}
                />
              </label>
            </div>
              <br />
            <div>
              <input
                type="radio"
                name="radio-image"
                id="Radioform-image2"
                defaultValue={"django"}
              />
              <label htmlFor="Radioform-image2">
                <img
                  alt="image-select-2"
                  width={"30"}
                  height={"30"}
                  src={"/django.svg"}
                />
              </label>
            </div>
            <br />
            <input type={"submit"} />
          </form>
        </div>
      </>
    );
  }
  export default RadioButtons;