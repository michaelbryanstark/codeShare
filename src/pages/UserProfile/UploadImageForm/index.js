import React, { useState }from "react";
import * as UserService from '../../../api/UserService'
import './style.css'

const UploadImageForm = (props) => {
    const [uploadImg, setUploadImg] = useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const user = UserService.getUser();
    const data = {
      "img": uploadImg
    }
    console.log(data);
    UserService.update(user._id, data)
}


  return (props.trigger) ? (
        <div className="popup">
          <div className="popup-inner">
            <form onSubmit={submitForm}>
                
                <label>Enter Image Url: </label>
                <input 
                    type="text" 
                    onChange={(e) => setUploadImg(e.target.value)}
                    name="image"
                />
                <br />
                <input type="submit" />
            </form>
            <button className='close-btn'>close</button>

          </div>
        </div>


  ) : "";
}

export default UploadImageForm