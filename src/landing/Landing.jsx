import { useEffect, useState } from "react";

export const Landing = () => {
  const [status, setStatus] = useState("fasting");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [fastingStartTime, setFastingStartTime] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const fastHours = 16;
  const chowHours = 8;

  //test cases:
  /* 
  start: 00:00 | end 16:00
  start: 21:00 | end 13:00
  start: 23:00 | end 15:00
  */
  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()));
    setCurrentHour(new Date().getHours());
  }, []);

  const setFastingStatus = () => {
    const endTime = (fastingStartTime + fastHours) % 24;

    new Date().getHours() <= endTime
      ? setStatus("Fasting 🥱")
      : setStatus("Chowing 🥑🥕🥝");
  };

  useEffect(() => {
    setFastingStatus();
  }, [currentHour]);

  return (
    <main>
      <h2>{status}</h2>
      <h2>{time}</h2>
      <h4>
        Hours Left Till Switch:
        {((fastingStartTime + fastHours) % 24) - currentHour}
      </h4>
    </main>
  );
};
