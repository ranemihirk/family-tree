// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface FamilyMember {
  displayName: string;
  name: string;
  location: string;
  spouse: string;
  dob: string;
  children: FamilyMember[];
}

interface FamilyTreeProps {
  familyMembers: FamilyMember[];
  childrenCount: number;
  handlePopupClick: Function;
}

const familyTree: FamilyMember[] = [
  {
    displayName: "Narayan Raorane",
    name: "Narayan Raorane",
    location: "",
    spouse: "",
    dob: "",
    children: [
      {
        displayName: "Parshuram Raorane",
        name: "Parshuram Narayan Raorane",
        location: "",
        spouse: "Nirmala Raorane",
        dob: "",
        children: [
          {
            displayName: "Kiran Rane",
            name: "Kiran Parshuram Rane",
            location: "Pune",
            spouse: "Krutika Rane",
            dob: "",
            children: [
              {
                displayName: "Mihir Rane",
                name: "Mihir Kiran Rane",
                location: "Mira Road(E), Mumbai",
                spouse: "",
                dob: "",
                children: [],
              },
              {
                displayName: "Keyuri Rane",
                name: "Keyuri Kiran Rane",
                location: "Pune",
                spouse: "",
                dob: "",
                children: [],
              },
            ],
          },
        ],
      },
      {
        displayName: "Tukaram Raorane",
        name: "Tukaram Narayan Raorane",
        location: "",
        spouse: "Taramati Raorane",
        dob: "",
        children: [
          {
            displayName: "Dilip Raorane",
            name: "Dilip Tukaram Raorane",
            location: "Virar",
            spouse: "Geeta Raorane",
            dob: "",
            children: [
              {
                displayName: "Payal Raorane",
                name: "Payal Dilip Raorane",
                location: "Virar",
                spouse: "",
                dob: "",
                children: [],
              },
              {
                displayName: "Rudra Raorane",
                name: "Rudra Dilip Raorane",
                location: "Virar",
                spouse: "",
                dob: "",
                children: [],
              },
            ],
          },
          {
            displayName: "Deepak Raorane",
            name: "Deepak Tukaram Raorane",
            location: "",
            spouse: "Kaki",
            dob: "",
            children: [
              {
                displayName: "Sonal Raorane",
                name: "Sonal Deepak Raorane",
                location: "",
                spouse: "",
                dob: "",
                children: [],
              },
              {
                displayName: "Rahul Raorane",
                name: "Rahul Deepak Raorane",
                location: "",
                spouse: "",
                dob: "",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const family = {
  displayName: "",
  name: "",
  location: "",
  spouse: "",
  dob: "",
  children: [],
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Tree(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [popupData, setPopupData] = React.useState<FamilyMember>(family);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCenter = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
    const scrollToLeft = (scrollWidth - containerWidth) / 2;
    container.scrollLeft = scrollToLeft;
  };

  setTimeout(scrollToCenter, 100);

  function handlePopupClick(item: string) {
    setPopupData(JSON.parse(item));
    setOpen(true);
  }

  useEffect(() => {
    console.log("popupData: ", popupData);
  }, [popupData]);

  return (
    <div
      className="bg-[#365c4f] pb-20 scroll-smooth"
      ref={scrollContainerRef}
      style={{
        width: "100%", // Adjust container width as needed
        height: "100%", // Adjust container height as needed
        overflowX: "scroll",
        whiteSpace: "nowrap",
        textAlign: "center",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="inline-flex items-center">
            <img
              src="https://i.pravatar.cc/80"
              alt=""
              className="rounded-full aspect-square w-12 m-auto"
            />
            <h2 className="ml-2">{popupData?.name}</h2>
          </div>
          <table>
            <tbody>
              <tr className={`${popupData?.dob === "" && "hidden"}`}>
                <th>Date of Birth:</th>
                <td>{popupData?.dob}</td>
              </tr>
              <tr className={`${popupData?.location === "" && "hidden"}`}>
                <th>Location:</th>
                <td>{popupData?.location}</td>
              </tr>
              <tr className={`${popupData?.spouse === "" && "hidden"}`}>
                <th>Spouse:</th>
                <td>{popupData?.spouse}</td>
              </tr>
              <tr className={`${popupData?.children.length < 1 && "hidden"}`}>
                <th>Children:</th>
                <td>{popupData?.children.length}</td>
              </tr>
              {popupData?.children.length > 0 &&
                popupData?.children.map((item, idx) => (
                  <tr key={idx}>
                    <th></th>
                    <td>{item.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Box>
      </Modal>
      <div
        className=""
        style={{
          display: "inline-block",
          width: "max-content",
          height: "100%",
        }}
      >
        <FamilyTree
          familyMembers={familyTree}
          childrenCount={1}
          handlePopupClick={handlePopupClick}
        />
      </div>
    </div>
  );
}

const FamilyTree: React.FC<FamilyTreeProps> = (props) => {
  const { familyMembers, childrenCount, handlePopupClick } = props;

  return (
    <ul className="pt-10 list-none flex justify-evenly w-fit m-auto">
      {familyMembers.map((item, idx) => (
        <li
          className={`px-2 ${
            childrenCount > 1 ? "pt-10 w-1/" + childrenCount : "w-full"
          }`}
          key={idx}
          data-id={idx}
          data-children={familyMembers[idx].children.length}
          data-newchildren={item.children.length}
        >
          <div className="tooltip" data-tip={item.name}>
            <Button
              className={`p-3 ${
                familyTree.length > 5 ? "text-xs" : "text-sm"
              } rounded-xl bg-[#b4b9c7] text-[#25221b] shadow shadow-md shadow-[#707994] flex-col`}
              data-name={JSON.stringify(item)}
              onClick={() => handlePopupClick(JSON.stringify(item))}
            >
              <div className="inline-flex">
                <div className={`p-4 rounded-lg bg-[#d7dae1]`}>
                  <img
                    className="rounded-full aspect-square w-16 m-auto"
                    src="https://i.pravatar.cc/80"
                    alt=""
                  />
                  <h5 className="font-extrabold">{item.displayName}</h5>
                </div>
                {item.spouse !== "" && (
                  <div className="ml-3 p-4 rounded-lg bg-[#d7dae1]">
                    <img
                      className="rounded-full aspect-square w-16 m-auto"
                      src="https://i.pravatar.cc/80"
                      alt=""
                    />
                    <h5 className="font-medium">{item.spouse}</h5>
                  </div>
                )}
              </div>
              {item.location !== "" && (
                <div className="mt-2">
                  <h5 className="font-medium">{item.location}</h5>
                </div>
              )}
            </Button>
          </div>
          {item.children.length > 0 && (
            <FamilyTree
              familyMembers={item.children}
              childrenCount={item.children.length}
              handlePopupClick={handlePopupClick}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

// Original Structure

const demo = () => {
  return (
    <div className="mainTree">
      {familyTree.map((item, idx) => (
        <ul className="list-none flex flex-col justify-evenly">
          <li className="mt-16">
            <div className="tooltip" data-tip={item.name}>
              <button className="p-4 inline-flex flex-col text-2xl rounded-lg bg-neutral-800 text-neutral-200">
                <img
                  className="rounded-full aspect-square w-12 m-auto"
                  src="https://i.pravatar.cc/80"
                  alt=""
                />
                {item.displayName}
              </button>
            </div>
            <ul className="list-none flex justify-evenly">
              {item.children.map((childItem, idc) => (
                <li
                  className={`mt-16 ${
                    item.children.length > 1
                      ? "w-1/" + item.children.length
                      : "w-full"
                  }`}
                >
                  <div className="tooltip" data-tip={childItem.name}>
                    <button className="p-4 inline-flex flex-col text-2xl rounded-lg bg-neutral-800 text-neutral-200">
                      <img
                        className="rounded-full aspect-square w-12 m-auto"
                        src="https://i.pravatar.cc/80"
                        alt=""
                      />
                      {childItem.displayName}
                    </button>
                  </div>
                  <ul className="list-none flex justify-evenly">
                    {childItem.children.map((subChildItem, ids) => (
                      <li
                        className={`mt-16 ${
                          subChildItem.children.length > 1
                            ? "w-1/" + subChildItem.children.length
                            : "w-full"
                        }`}
                      >
                        <div className="tooltip" data-tip={subChildItem.name}>
                          <button className="p-4 inline-flex flex-col text-2xl rounded-lg bg-neutral-800 text-neutral-200">
                            <img
                              className="rounded-full aspect-square w-12 m-auto"
                              src="https://i.pravatar.cc/80"
                              alt=""
                            />
                            {subChildItem.displayName}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

const newdemo: React.FC<FamilyTreeProps> = ({
  familyMembers,
  childrenCount,
  handlePopupClick,
}) => {
  return (
    <div className="mainTree">
      <ul className="list-none flex justify-evenly">
        {familyMembers.map((item, idx) => (
          <li
            className={`mt-16 ${
              childrenCount > 1 ? "w-1/" + childrenCount : "w-full"
            }`}
            key={idx}
            data-id={idx}
            data-children={familyMembers[idx].children.length}
            data-newchildren={item.children.length}
          >
            <div className="tooltip" data-tip={item.name}>
              <button className="p-4 inline-flex flex-col text-md rounded-lg bg-neutral-800 text-neutral-200">
                <img
                  className="rounded-full aspect-square w-12 m-auto"
                  src="https://i.pravatar.cc/80"
                  alt=""
                />
                {item.displayName}
              </button>
            </div>
            <FamilyTree
              familyMembers={item.children}
              childrenCount={item.children.length}
              handlePopupClick={handlePopupClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
