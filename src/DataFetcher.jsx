import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card/Card";
import job_search from "./assets/job_search.jpg";
import EditCard from "./Forms/EditCard";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

const DataFetcher = ({ handleSave, onCancel }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState("");
  const [editOpenmodal, seteditOpenmodal] = useState(false);
  const [confirmDeleteModalOpen, setconfirmDeleteModalOpen] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://6703a1c1ab8a8f892730f1bf.mockapi.io/api/job/users"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
    }
    setLoading(false);
  };

  const handleEdit = (item, id) => {
    setEditData(item);
    seteditOpenmodal(true);
    if (EditCard) {
      document.body.style.overflow = "hidden";
    }
  };

  const handleDelete = (id) => {
    setconfirmDeleteModalOpen(true);
    setSelectedDeleteId(id);
    document.body.style.overflow = "hidden";
  };

  const confirmDelete = async () => {
    if (selectedDeleteId !== null) {
      try {
        const response = await fetch(
          `https://6703a1c1ab8a8f892730f1bf.mockapi.io/api/job/users/${selectedDeleteId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete the item.");
        }

        const newData = data.filter((item) => item.id !== selectedDeleteId);
        setData(newData);
      } catch (error) {
        console.error("Error deleting item:", error);
        setError("Failed to delete the item");
      } finally {
        setconfirmDeleteModalOpen(false);
        document.body.style.overflow = "scroll";
      }
    }
  };

  const onCancelDelete = () => {
    setconfirmDeleteModalOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <div className="wrapper">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              data={item}
              job_search={job_search}
              handleEdit={() => handleEdit(item, item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          ))
        )}
      </div>
      <div>
        <Modal isOpen={editOpenmodal} onClose={onCancel} className="edit">
          {editData && (
            <EditCard
              data={editData}
              onSave={(e) => handleSave(item.id)}
              onCancel={onCancel}
            />
          )}
        </Modal>
        <Modal
          isOpen={confirmDeleteModalOpen}
          onClose={onCancelDelete}
          style={{ height: "18%" }}
          className="delete"
        >
          <div>
            <p>Are you sure you want to delete this card?</p>
            <div className="confirm-buttons">
              <Button
                onClick={onCancelDelete}
                label="Cancel"
                type="button"
                style={{ backgroundColor: "darkgreen" }}
              />
              <Button
                onClick={confirmDelete}
                label="Confirm"
                type="button"
                style={{ backgroundColor: "darkred" }}
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DataFetcher;
