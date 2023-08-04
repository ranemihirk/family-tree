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
            location: "",
            spouse: "Krutika Rane",
            children: [
              {
                displayName: "Mihir Rane",
                name: "Mihir Kiran Rane",
                location: "",
                spouse: "",
                children: [],
              },
              {
                displayName: "Keyuri Rane",
                name: "Keyuri Kiran Rane",
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
  displayName: "Parshuram Raorane",
  name: "Parshuram Narayan Raorane",
  location: "",
  spouse: "",
  children: [],
};

export default function App(): JSX.Element {
  return (
    <div className="App min-h-screen max-w-screen bg-[#365c4f] text-[#c6a0ad] org-tree">
      <div className="py-8 text-[#25221b] bg-[#d7dae1] shadow shadow-[#d7dae1]">
      <h1 className="text-5xl font-bold tracking-wide">Raorane Family Tree</h1>
      </div>
      <FamilyTree familyMembers={familyTree} childrenCount={1} />
    </div>
  );
}

const FamilyTree: React.FC<FamilyTreeProps> = ({
  familyMembers,
  childrenCount,
}) => {
  // console.log('familyMembers: ', familyMembers, familyMembers.length);
  for (let current in familyMembers) {
    console.log(
      "current children: ",
      familyMembers[current],
      familyMembers[current].children.length
    );
    console.log("childrenCount: ", childrenCount);
  }
  return (
    <ul className="pt-10 list-none flex justify-evenly">
      {familyMembers.map((item, idx) => (
        <li
          className={`${
            childrenCount > 1 ? "pt-10 w-1/" + childrenCount : "w-full"
          }`}
          key={idx}
          data-id={idx}
          data-children={familyMembers[idx].children.length}
          data-newchildren={item.children.length}
        >
          <div className="tooltip" data-tip={item.name}>
            <button
              className={`p-3 inline-flex ${
                familyTree.length > 5 ? "text-xs" : "text-sm"
              } rounded-xl bg-[#b4b9c7] text-[#25221b] shadow shadow-md shadow-[#707994]`}
            >
              <div className={`p-4 rounded-lg bg-[#d7dae1]`}>
                <img
                  className="rounded-full aspect-square w-12 m-auto"
                  src="https://i.pravatar.cc/80"
                  alt=""
                />
                <h5 className="font-bold">{item.displayName}</h5>
              </div>
              {item.spouse !== "" && (
                <div className="ml-3 p-4 rounded-lg bg-[#d7dae1]">
                  <img
                    className="rounded-full aspect-square w-12 m-auto"
                    src="https://i.pravatar.cc/80"
                    alt=""
                  />
                  <h5 className="font-medium">{item.spouse}</h5>
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
