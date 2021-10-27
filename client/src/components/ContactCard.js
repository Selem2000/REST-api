import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteContact, getContact } from "../JS/actions/contact";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const ContactCard = ({ contact: { name, email, phone, _id } }) => {
  const dispatch = useDispatch();
  const handelDelete = () => {
    let result = window.confirm("do you want to delete this contact ?");
    if (result) {
      dispatch(deleteContact(_id));
    }
  };

  return (
    <div className="contact-box">
      <div className="name-part">
        <h2 className="name">{name}</h2>
      </div>
      <div className="des-part">
        <h4 className="des">{email}</h4>
        <h4 className="des">{phone}</h4>

        <div className="btns">
          <Link to={`/editcontact/${_id}`} style={{ textDecoration: "none" }}>
            <EditIcon
              color="primary"
              onClick={() => dispatch(getContact(_id))}
            />
          </Link>
          <DeleteIcon
            color="error"
            style={{ cursor: "pointer" }}
            onClick={handelDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
