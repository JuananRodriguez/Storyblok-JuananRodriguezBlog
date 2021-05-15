const Timer = ({ blok }) => {
  const { from } = blok;
  const fromDate = new Date(new Date(from).toDateString()).getTime();
  const toDate = new Date(new Date().toDateString()).getTime();

  const diff = toDate - fromDate;
  const totalDays = diff / (1000 * 3600 * 24);

  const inYears = Math.floor(totalDays / 365);
  const inMonth = Math.floor((totalDays % 365) / 30);
  const inDays = Math.floor(totalDays % 30);

  const years = inYears !== 1 ? "años" : "año";
  const months = inMonth !== 1 ? "meses" : "mes";
  const days = inDays !== 1 ? "días" : "día";

  return (
    <p>
      <strong>
        {inYears} {years}, {inMonth} {months} y {inDays} {days}
      </strong>
    </p>
  );
};

export default Timer;
