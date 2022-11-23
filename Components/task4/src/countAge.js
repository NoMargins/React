export default function countAge(bday) {
  const fullYears = (new Date().getFullYear() - new Date(bday).getFullYear());
  if (new Date().getMonth() < new Date(bday).getMonth()) {
     fullYears-1;
  }
  if (new Date().getMonth() === new Date(bday).getMonth()) {
     new Date().getDate() < new Date(bday).getDate() ? fullYears - 1 : fullYears 
  }
  return fullYears;
}
