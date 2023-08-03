// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

interface FamilyMember {
  displayName: string;
  name: string;
  location: string;
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
    children: [
      {
        displayName: "Parshuram Raorane",
        name: "Parshuram Narayan Raorane",
        location: "",
        children: [
          {
            displayName: "Kiran Rane",
            name: "Kiran Parshuram Rane",
            location: "",
            children: [
              {
                displayName: "Mihir Rane",
                name: "Mihir Kiran Rane",
                location: "",
                children: [],
              },
              {
                displayName: "Keyuri Rane",
                name: "Keyuri Kiran Rane",
                location: "",
                children: [],
              },
            ],
          },
          {
            displayName: "Narayan Raorane",
            name: "Narayan Raorane",
            location: "",
            children: [
              {
                displayName: "Parshuram Raorane",
                name: "Parshuram Narayan Raorane",
                location: "",
                children: [
                  {
                    displayName: "Kiran Rane",
                    name: "Kiran Parshuram Rane",
                    location: "",
                    children: [
                      {
                        displayName: "Mihir Rane",
                        name: "Mihir Kiran Rane",
                        location: "",
                        children: [],
                      },
                      {
                        displayName: "Keyuri Rane",
                        name: "Keyuri Kiran Rane",
                        location: "",
                        children: [],
                      },
                    ],
                  },
                ],
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
  children: [],
};

export default function App(): JSX.Element {
  return (
    <div className="App min-h-screen max-w-screen bg-slate-500 org-tree">
      <h1 className="text-5xl">Raorane Family Tree</h1>
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
          className={`pt-10 ${
            childrenCount > 1 ? "w-1/" + childrenCount : "w-full"
          }`}
          key={idx}
          data-id={idx}
          data-children={familyMembers[idx].children.length}
          data-newchildren={item.children.length}
        >
          <div className="tooltip" data-tip={item.name}>
            <button
              className={`p-4 inline-flex flex-col ${
                familyTree.length > 5 ? "text-xs" : "text-sm"
              } rounded-lg bg-neutral-800 text-neutral-200`}
            >
              <img
                className="rounded-full aspect-square w-12 m-auto"
                src="https://i.pravatar.cc/80"
                alt=""
              />
              {item.displayName}
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
