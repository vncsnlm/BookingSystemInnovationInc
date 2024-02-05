import CustomCalendar from "components/CustomCalendar";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventsStart } from "redux/events/eventsSlice";
import { useUser } from '@auth0/nextjs-auth0/client';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <div>Hello</div>
        <a
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
          Log in here
        </a>
        <br/>
        {user && (
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
              )}
        <br/>
        <a href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
          Log out
        </a>
      </div>
      <a href="/booking">Go create a booking</a>      
    </div>
  );
}