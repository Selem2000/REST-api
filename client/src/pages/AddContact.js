import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addContact, editContact } from "../JS/actions/contact";

const AddContact = () => {
  const [contact, setContact] = useState({});
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const contactToEdit = useSelector((state) => state.contactReducer.contact);
  const isLoad = useSelector((state) => state.contactReducer.isLoad);
  const isFail = useSelector((state) => state.contactReducer.isFail);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setContact(contactToEdit)
      : setContact({ name: "", email: "", phone: "" });
  }, [edit, contactToEdit]);

  const handelContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handelClick = () => {
    if (edit) {
      handelEdit();
    } else {
      handelAdd();
    }
  };

  const handelAdd = () => {
    dispatch(addContact(contact, history));
  };
  const handelEdit = () => {
    dispatch(editContact(params.id, contact, history));
  };
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Name"
        type="text"
        name="name"
        variant="outlined"
        value={contact.name}
        onChange={handelContact}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        value={contact.email}
        onChange={handelContact}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        type="number"
        name="phone"
        variant="outlined"
        value={contact.phone}
        onChange={handelContact}
      />
      <Button className="save-btn" onClick={handelClick}>
        {edit ? "edit" : "save"}
      </Button>
    </form>
  );
};

export default AddContact;
