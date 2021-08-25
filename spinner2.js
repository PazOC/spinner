process.stdout.write('hello from spinner1.js... \rheyyy\n');


const items = ['\r|   ','\r/   ','\r-   ', '\r\\   ','\r|   ','\r/   ','\r-   ', '\r\\   '];

const spinner = (array) =>  {
  let time = 100;
  array.forEach(item =>
    setTimeout(() => {
      process.stdout.write(item);
    }, time += 200));
};

spinner(items);