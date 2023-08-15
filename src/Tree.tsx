// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

interface FamilyMember {
  displayName: string;
  name: string;
  location: string;
  spouse: string;
  children: FamilyMember[];
}

interface FamilyTreeProps {
  familyMembers: FamilyMember[];
  childrenCount: number;
}

const familyTree: FamilyMember[] = [
  {
    displayName: "Narayan Raorane",
    name: "Narayan Raorane",
    location: "",
    spouse: "",
    children: [
      {
        displayName: "Parshuram Raorane",
        name: "Parshuram Narayan Raorane",
        location: "",
        spouse: "Nirmala Raorane",
        children: [
          {
            displayName: "Kiran Rane",
            name: "Kiran Parshuram Rane",
            location: "Pune",
            spouse: "Krutika Rane",
            children: [
              {
                displayName: "Mihir Rane",
                name: "Mihir Kiran Rane",
                location: "Mira Road(E), Mumbai",
                spouse: "",
                children: [],
              },
              {
                displayName: "Keyuri Rane",
                name: "Keyuri Kiran Rane",
                location: "Pune",
                spouse: "",
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
        children: [
          {
            displayName: "Dilip Raorane",
            name: "Dilip Tukaram Raorane",
            location: "Virar",
            spouse: "Geeta Raorane",
            children: [
              {
                displayName: "Payal Raorane",
                name: "Payal Dilip Raorane",
                location: "Virar",
                spouse: "",
                children: [],
              },
              {
                displayName: "Rudra Raorane",
                name: "Rudra Dilip Raorane",
                location: "Virar",
                spouse: "",
                children: [],
              },
            ],
          },
          {
            displayName: "Deepak Raorane",
            name: "Deepak Tukaram Raorane",
            location: "",
            spouse: "Kaki",
            children: [
              {
                displayName: "Sonal Raorane",
                name: "Sonal Deepak Raorane",
                location: "",
                spouse: "",
                children: [],
              },
              {
                displayName: "Rahul Raorane",
                name: "Rahul Deepak Raorane",
                location: "",
                spouse: "",
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
  children: [],
};

export default function Tree(): JSX.Element {
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
      <div
        className=""
        style={{
          display: "inline-block",
          width: "max-content",
          height: "100%",
        }}
      >
        <FamilyTree familyMembers={familyTree} childrenCount={1} />
      </div>
    </div>
  );
}

const FamilyTree: React.FC<FamilyTreeProps> = (props) => {
  const { familyMembers, childrenCount } = props;

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
            <button
              className={`p-3 ${
                familyTree.length > 5 ? "text-xs" : "text-sm"
              } rounded-xl bg-[#b4b9c7] text-[#25221b] shadow shadow-md shadow-[#707994]`}
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
            </button>
          </div>
          {item.children.length > 0 && (
            <FamilyTree
              familyMembers={item.children}
              childrenCount={item.children.length}
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
