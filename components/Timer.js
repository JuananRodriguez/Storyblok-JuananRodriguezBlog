import { useMemo } from "react";

const Timer = ({ blok }) => {
  const { from } = blok;
  const fromDate = new Date(from).getTime();

  const now = new Date();
  var userOffset = now.getTimezoneOffset() * 60 * 1000;
  var serverOffset = -3 * 60 * 60 * 1000; 
  const toDate = now.getTime() - userOffset + serverOffset;

  const diff = toDate - fromDate;
  const totalDays = diff / (1000 * 3600 * 24);

  const inYears = Math.floor(totalDays / 365);
  const inMonth = Math.floor((totalDays % 365) / 30);
  const inDays = Math.floor(totalDays % 30);
  const inHours = Math.floor((totalDays * 24) % 24);

  const years = inYears !== 1 ? "años" : "año";
  const months = inMonth !== 1 ? "meses" : "mes";
  const days = inDays !== 1 ? "días" : "día";
  const hours = inHours !== 1 ? "horas" : "hora";

  return (
    <p>
      <strong>
        {inYears} {years}, {inMonth} {months}, {inDays} {days} y {inHours}{" "}
        {hours}
      </strong>
    </p>
  );
};

export default Timer;
