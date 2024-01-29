'use client'

import CustomCalendar from "../../components/CustomCalendar";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventsStart } from "../../components/redux/eventsSlice";

const mapState = ({ eventsData }) => ({
  events: eventsData.events,
});
export default function Home() {
  const dispatch = useDispatch();
  const { events } = useSelector(mapState);

  const getAllEvents = () => {
    // fetch()
    dispatch(fetchEventsStart());
  };
  useEffect(() => {
    getAllEvents();
  }, []);
  const calendarEvents = events.map((item) => {
    const { start, end } = item;
    return {
      ...item,
      start: new Date(start),
      end: new Date(end),
    };
  });
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta name="Booking page" content="Manage bookings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCalendar height={"100vh"} events={calendarEvents} />
    </div>
  );
}
