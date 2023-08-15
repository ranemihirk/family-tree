// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Dispatch, SetStateAction } from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimeline } from "@fortawesome/free-solid-svg-icons/faTimeline";

export default function Layout() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
	console.log('event: ', event.currentTarget.id);
    setAnchorEl(null);
	navigate(`/${event.currentTarget.id}`);
  };
  return (
    <div className="App max-h-screen w-full bg-[#d7dae1] text-[#c6a0ad] org-tree select-none">
      <div
        className="relative px-8 py-8 text-[#25221b] shadow shadow-[#d7dae1] sticky top-0 left-0 z-10"
        style={{
          background: "rgba(255, 255, 255, 0.2)", // Background with transparency
          backdropFilter: "blur(10px)", // Apply the blur effect
          textShadow: "2px 2px 4px rgba(37, 34, 27, 0.5)", // Optional text shadow
        }}
      >
        <Button
          id="basic-button"
          className="absolute left-0 rounded-lg p-1 text-black hover:bg-dark/10 dark:hover:bg-light/10 xl:p-2"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </Button>
        <Menu
          id="basic-menu"
          className="rounded"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Button onClick={handleClose} id="" className="text-black w-full text-start">
              <FontAwesomeIcon icon={faHouse} className="mr-2" /> Home
            </Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={handleClose} id="history" className="text-black w-full text-start">
              <FontAwesomeIcon icon={faTimeline} className="mr-2" /> History
            </Button>
          </MenuItem>
        </Menu>
        {/* <NavLink
          to=""
          title="Home"
          aria-label="Home"
          className="rounded-lg p-1 hover:bg-dark/10 dark:hover:bg-light/10 xl:p-2"
        >
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </NavLink> */}
        <h1 className="text-xl md:text-5xl font-bold tracking-wide">
          Raorane Family Tree
        </h1>
        {/* <NavLink
          to="family-tree"
          title="Family Tree"
          aria-label="Family Tree"
          className="rounded-lg p-1 hover:bg-dark/10 dark:hover:bg-light/10 xl:p-2"
        >
          <FontAwesomeIcon icon={faTimeline} size="xl" />
        </NavLink> */}
      </div>

      <Outlet />
    </div>
  );
}
