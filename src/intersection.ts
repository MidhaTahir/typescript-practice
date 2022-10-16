// https://www.typescript-training.com/course/fundamentals-v3/06-union-and-intersection-types/
// mashing the two types together

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7; // 1w in ms
function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + ONE_WEEK);

  return { ...start, end }; // kind of Object.assign
}

const thisWeek = makeWeek();
thisWeek.toISOString();
thisWeek.end.toISOString();

// now thisWeek will have all date properties and after end. it will have next date properties

