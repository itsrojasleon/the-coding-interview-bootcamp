import * as React from 'react';

let files: string[] = ['01', '02', '03', '04', '05'];

const pages = files.reduce((p: any, filename, index, fullArray) => {
  const exercise = require(`./exercises/${filename}`);
  Object.assign(exercise, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1],
    isolatedPath: `/isolated/exercises/${filename}`
  });
  p[filename] = {
    exercise,
    title: exercise.Title
  };
  return p;
}, {});
console.log(pages);

function Sidebar() {
  return (
    <div className="sidebar">
      <div>Hello there</div>
    </div>
  );
}
export default Sidebar;
