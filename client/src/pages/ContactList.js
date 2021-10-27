import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact } from "../JS/actions/contact";
import ContactCard from "../components/ContactCard";
import CircularProgress from "@mui/material/CircularProgress";

const ContactList = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const isLoad = useSelector((state) => state.contactReducer.isLoad);
  const isFail = useSelector((state) => state.contactReducer.isFail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContact());
  }, []);
  console.log(contacts, isLoad, isFail);
  return (
    <div className="list">
      {isLoad ? (
        <CircularProgress color="inherit" />
      ) : isFail ? (
        <h3>Faild to get the contacts</h3>
      ) : !contacts.length ? (
        <h3>No Contacts</h3>
      ) : (
        contacts.map((e) => <ContactCard contact={e} key={e._id} />)
      )}
    </div>
  );
};

export default ContactList;
