/* ClassOf5 master timetable. Shared by tuition-plans.html and flex-settings.html.
   day: 0 = Sunday ... 6 = Saturday. Times are in the market's own time (Toronto for North America, London for UK/Europe). */
window.NP_SCHEDULE=(function(){
  const slot = (sessions, frequency="2x/week") => ({sessions, frequency});
  const pair = (dayA, dayB, time) => slot([{day:dayA,time},{day:dayB,time}]);
  const MW = (t) => pair(1,3,t), TT = (t) => pair(2,4,t), FS = (t) => pair(5,0,t), SS = (t="11:00") => pair(6,0,t);

  const k8NA = {
    alpha:{
      Math:{standard:MW("17:00"), flex:[TT("17:00"),MW("18:30"),TT("18:30"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
      English:{standard:TT("17:00"), flex:[MW("17:00"),MW("18:30"),TT("18:30"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]}},
    beta:{
      Math:{standard:MW("18:30"), flex:[TT("17:00"),MW("17:00"),TT("18:30"),MW("20:00"),TT("20:00"),FS("17:00"),FS("18:30"),SS(),SS("17:00"),SS("18:30")]},
      English:{standard:TT("18:30"), flex:[MW("17:00"),TT("17:00"),MW("20:00"),TT("20:00"),MW("18:30"),FS("17:00"),SS(),SS("17:00"),SS("18:30")]}},
    gamma:{
      Math:{standard:MW("18:30"), flex:[TT("17:00"),MW("17:00"),TT("20:00"),MW("18:30"),TT("18:30"),FS("18:30"),FS("20:00"),SS(),SS("17:00"),SS("18:30")]},
      English:{standard:TT("18:30"), flex:[MW("17:00"),TT("17:00"),MW("18:30"),TT("18:30"),FS("18:30"),SS(),SS("17:00"),SS("18:30")]}},
    delta:{
      Math:{standard:TT("18:30"), flex:[MW("17:00"),TT("17:00"),MW("20:00"),MW("18:30"),TT("18:30"),FS("20:00"),SS(),SS("17:00"),SS("18:30")]},
      English:{standard:MW("18:30"), flex:[TT("17:00"),MW("17:00"),TT("20:00"),MW("18:30"),TT("18:30"),FS("20:00"),SS(),SS("17:00"),SS("18:30")]}}
  };
  const k8UK = {
    alpha:{
      Math:{standard:MW("17:00"), flex:[TT("18:30"),MW("18:30"),TT("17:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
      English:{standard:TT("17:00"), flex:[MW("18:30"),TT("18:30"),MW("17:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]}},
    beta:{
      Math:{standard:MW("17:00"), flex:[TT("18:30"),MW("18:30"),TT("17:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
      English:{standard:TT("17:00"), flex:[MW("18:30"),TT("18:30"),MW("17:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]}},
    gamma:{
      Math:{standard:MW("18:30"), flex:[TT("20:00"),MW("20:00"),TT("18:30"),FS("18:30"),SS(),SS("17:00"),SS("18:30")]},
      English:{standard:TT("18:30"), flex:[MW("20:00"),TT("20:00"),MW("18:30"),FS("18:30"),SS(),SS("17:00"),SS("18:30")]}},
    delta:{
      Math:{standard:MW("18:30"), flex:[TT("18:30"),TT("20:00"),MW("18:30"),FS("20:00"),SS(),SS("17:00"),SS("18:30")]},
      English:{standard:TT("18:30"), flex:[MW("18:30"),TT("18:30"),MW("20:00"),FS("20:00"),SS(),SS("17:00"),SS("18:30")]}}
  };
  const seniorNA = {
    Math:{standard:MW("18:30"), flex:[TT("17:00"),MW("17:00"),TT("20:00"),MW("20:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
    Chemistry:{standard:TT("18:30"), flex:[MW("17:00"),TT("17:00"),MW("20:00"),TT("20:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
    Physics:{standard:TT("20:00"), flex:[MW("17:00"),TT("17:00"),TT("18:30"),MW("20:00"),SS(),SS("17:00"),SS("18:30")]}
  };
  const seniorUK = {
    Math:{standard:MW("18:30"), flex:[TT("17:00"),MW("17:00"),TT("20:00"),MW("20:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
    Chemistry:{standard:TT("18:30"), flex:[MW("17:00"),TT("17:00"),MW("20:00"),TT("20:00"),SS(),FS("17:00"),SS("17:00"),SS("18:30")]},
    Physics:{standard:MW("20:00"), flex:[MW("17:00"),TT("17:00"),TT("18:30"),TT("20:00"),SS(),SS("17:00"),SS("18:30")]}
  };

  const levelNamesNA = {
    alpha:"Alpha · Grades 1–2 · ages 6–7",
    beta:"Beta · Grades 3–4 · ages 8–9",
    gamma:"Gamma · Grades 5–6 · ages 10–11",
    delta:"Delta · Grades 7–8 · ages 12–13",
    sigma:"Sigma · Grades 9–10 · ages 14–16",
    omega:"Omega · Grades 11–12 · ages 16–18"
  };
  const levelNamesUK = {
    alpha:"Alpha · UK Years 2–3 · ages 6–7",
    beta:"Beta · UK Years 4–5 · ages 8–9",
    gamma:"Gamma · UK Years 6–7 · ages 10–11",
    delta:"Delta · UK Years 8–9 · ages 12–13",
    sigma:"Sigma · UK Years 10–11 · ages 14–16",
    omega:"Omega · UK Years 12–13 · ages 16–18"
  };

  return {slot,pair,MW,TT,FS,SS,k8NA,k8UK,seniorNA,seniorUK,levelNamesNA,levelNamesUK};
})();
