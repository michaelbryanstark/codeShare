import React, { useState }from "react";
import * as UserService from '../../../api/UserService'
import Popup from 'reactjs-popup';

const UploadImageForm = ({ user }) => {
    const [uploadImg, setUploadImg] = useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const user = UserService.getUser();
    const data = {
      "img": uploadImg
    }
    console.log(user, data);
    UserService.update(user._id, uploadImg)
}


  return (
    <Popup 
        trigger={<button> Change profile picture</button>}
        position="top left">
        <div>
            <form onSubmit={submitForm}>
                
                <input 
                    type="text" 
                    onChange={(e) => setUploadImg(e.target.value)}
                    name="image"
                />
                <br />
                <input type="submit" />
            </form>
        </div>

    </Popup>
  );
}

export default UploadImageForm