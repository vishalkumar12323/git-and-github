type typeNumber = {
  (num: number): void;
};

function run(): typeNumber {
  return (num: number) => {
    console.log(num);
  };
}
