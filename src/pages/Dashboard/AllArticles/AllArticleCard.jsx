/* eslint-disable react/prop-types */
import { TbPremiumRights } from "react-icons/tb";
import { FcApproval } from "react-icons/fc";
import { GrEject } from "react-icons/gr";
import { FiDelete } from "react-icons/fi";
import { Avatar, Box, Button, Modal, TextField, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AllArticleCard = ({ article, refetch }) => {
  const [declineMessage, setDeclineMessage] = useState("");

  const {
    _id,
    title,
    description,
    email,
    name,
    authorPhoto,
    date,
    publisher,
    image,
    status,
    isPremium
  } = article || {};

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/articles/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Article has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleApproved = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To approve this article",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/articles/approve/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Article has approved successfully.`,
              showConfirmButton: false,
              timer: 1000,
            });
          }
          console.log(res.data);
        });
      }
    });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDecline = (id) => {
    axiosSecure
      .patch(`/articles/decline/${id}`, { message: declineMessage })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Article has declined successfully.`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
        console.log(res.data);
      });
  };

  const handlePremium = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Make Premium this article",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Premium it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/articles/premium/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `This article is now premium.`,
              showConfirmButton: false,
              timer: 1000,
            });
          }
          console.log(res.data);
        });
      }
    });
  };

  return (
    <div>
      <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex items-center  gap-1">
            <Avatar alt="Remy Sharp" src={authorPhoto} />
            <h1>{name}</h1>
          </div>
          <p>{email}</p>
        </div>
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            className="h-[250px] object-cover w-full"
            src={image}
            alt="ui/ux review check"
          />
          
          <div className="absolute bottom-1 right-5">
            {
              isPremium===true && <h1 className="font-bold text-xl text-[#7B1FA2]">Premium</h1>
            }
          </div>
          
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {title.slice(0,25)}
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              {date}
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {description.slice(0,90)}
          </p>

          <div className="flex justify-between items-center">
            <h1 className="font-semibold">{publisher}</h1>
            {status === "approved" ? (
              <h1 className="font-bold text-xl text-[#7B1FA2]">Approved</h1>
            ) : status === "declined" ? (
              <h1 className="font-bold text-xl text-[#7B1FA2]">Declined</h1>
            ) : (
              <h1 className="font-bold text-[#7B1FA2]">Pending</h1>
            )}
          </div>
        </div>
        <div className="p-6 pt-3">
          <div className="flex justify-between items-center">
            <Tooltip title="Approve">
              <Button onClick={() => handleApproved(_id)}>
                <FcApproval className="text-4xl" />
              </Button>
            </Tooltip>
            <Tooltip title="Set Premium">
              <Button onClick={() => handlePremium(_id)}>
                <TbPremiumRights className="text-4xl" />
              </Button>
            </Tooltip>
            <Tooltip title="Decline">
              <Button onClick={handleOpen}>
                <GrEject className="text-4xl" />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={() => handleDelete(_id)}>
                <FiDelete className="text-4xl" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              fullWidth
              name="message"
              label="Decline message"
              type="text"
              variant="outlined"
              onChange={(e) => setDeclineMessage(e.target.value)}
              sx={{ margin: "20px" }}
            />
            <br />

            <Button
              onClick={() => {
                handleClose();
                handleDecline(_id);
              }}
              color="secondary"
              variant="contained"
              type="submit"
              sx={{ margin: "20px" }}
            >
              Add
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AllArticleCard;
