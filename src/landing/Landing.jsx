import { useEffect, useState } from "react";

export const Landing = () => {
  const [status, setStatus] = useState("fasting");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [fastingStartTime, setFastingStartTime] = useState(0);
  const [hoursToGo, sethoursToGo] = useState(-1);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const fastHours = 16;
  const chowHours = 8;

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()));
    setCurrentHour(new Date().getHours());
  }, []);

  const setFastingStatus = () => {
    let endTime = (fastingStartTime + fastHours) % 24;

    new Date().getHours() <= endTime
      ? setStatus("Fasting 🥱🤸🏾‍♀️💪🏾")
      : setStatus("Chowing 🥑🥕🥝");
  };

  const hoursLeft = () => {
    let timeLeft = ((fastingStartTime + fastHours) % 24) - currentHour;
    timeLeft = timeLeft < 0 ? 24 + timeLeft : timeLeft;
    sethoursToGo(timeLeft);
  };

  useEffect(() => {
    setFastingStatus();
    hoursLeft();
  }, [currentHour]);

  return (
    <main>
      <h2>{status}</h2>
      <h2>{time}</h2>
      <h4>
        Hours Left Till Switch:
        {hoursToGo}
      </h4>
    </main>
  );
};
