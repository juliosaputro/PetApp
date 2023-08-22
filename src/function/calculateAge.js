export const calculateAge = (dob) => {
  const dobDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - dobDate.getFullYear();
  let months = today.getMonth() - dobDate.getMonth();

  if (today.getDate() < dobDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  return { years, months };
  };