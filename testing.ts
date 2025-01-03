type typeNumber = {
  (num: number): void;
};

type DomEvent = {
  target: HTMLElement;
  type: string;
};
function run(): typeNumber {
  return (num: number) => {
    console.log(num);
  };
}

function handleEvent(event: DomEvent) {
  console.log(event.type);
  console.log(event.target);
}
