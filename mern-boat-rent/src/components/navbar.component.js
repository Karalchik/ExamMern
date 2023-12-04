import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../http-common';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  HomeIcon,
  PhoneIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoged, setIsLoged] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
  
  React.useEffect(() => {
    axios.get('users/auth', {
      withCredentials: true,
    }).then(res=>{
    if(res.data.valid){
       setIsLoged(true);
       document.getElementById("menu").addEventListener('click',()=>{});
    }else{
      setIsLoged(false);
      document.getElementById("menu").addEventListener('click',()=>{window.location.assign('login_user')});
    }}).catch(err=>console.log(err));
  });
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" >
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            className="border border-gray-900 p-0.5"
            id="menu"
            src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
          />
          { isLoged ? 
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
          : null }
        </Button>
      </MenuHandler>
      { isLoged ?  
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          if(label==="Sign Out"){
            return (
              <MenuItem
                key={label}
                onClick={()=>
                  {
                    axios.post('users/logout', {
                      withCredentials: true,
                    })
                    window.location.assign('login_user');
                  }
                }
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          }
          if(label==="Help"){
            return (
              <MenuItem
                key={label}
                onClick={()=>{window.location.assign('help');}}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          }
          if(label==="My Profile"){
            return (
              <MenuItem
                key={label}
                onClick={()=>window.location.assign('/profile')}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          }
          if(label==="Edit Profile"){
            return (
              <MenuItem
                key={label}
                onClick={()=>window.location.assign('/edit_user')}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          }
        })}
      </MenuList>
      : null }
    </Menu>
  );
}
 
// nav list menu
const navListBoatMenuItems = [
  {
    title: "RENT A BOAT",
    location:"/rentaboat",
  },
  {
    title: "FIND A BOAT",
    location:"/findaboat",
  },
];
const navListAboutMenuItems = [
  {
    title: "CONTACT",
    location:"/contact",
  },
  {
    title: "ABOUT US",
    location: "/aboutus",
  },
  {
    title: "FAQ",
    location:"/FAQ",
  },
];
 
function NavListMenuBoat() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListBoatMenuItems.map(({ title,location }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Button color="blue-gray" fullWidth className="mb-1" onClick={()=>window.location=location}>
          {title}
        </Button>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <ShoppingBagIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              BOATS{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[5rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        BOATS{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavListMenuAbout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListAboutMenuItems.map(({ title,location }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Button color="blue-gray" fullWidth className="mb-1" onClick={()=>window.location=location}>
          {title}
        </Button>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <QuestionMarkCircleIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              ABOUT{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[5rem] overflow-visible lg:grid">
          <ul className="flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        ABOUT{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "+380979147101",
    icon: PhoneIcon,
  },
];
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(()=>(     
      <Typography
          key="HOME"
          as="a"
          href="/"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(HomeIcon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> HOME </span>
          </MenuItem>
        </Typography>
      ))}
      
      <NavListMenuBoat />
      <NavListMenuAbout />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="/"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label} </span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && this.setState({isNavOpen:false}),
    );
  }
  
  toggleIsNavOpen = () => this.setState({isNavOpen: (cur) => !cur});

  render() {
    return (
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-small"
          variant='h4'
          color="blue"
        >
          <Link to="/"><Avatar src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3245625/blue-shell-icon-md.png"></Avatar>BLUE SHELL</Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={this.toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={this.state.isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>

    );
  }
}