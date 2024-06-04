import Code from "./Code";

const Terminal = () => {
  const test = `<div className="mx-auto flex max-w-lg flex-col items-start gap-20 rounded-3xl bg-slate-500 p-20">
  <div className="group relative">
    <Code code={test} animated={true} show={true} />
  </div>
</div>`;

  return (
    <div className="mx-auto flex h-40 flex-col items-start rounded-3xl bg-slate-950 p-5">
      <div className="group relative break-words">
        <Code code={test} animated={true} show={true} />
      </div>
    </div>
  );
};

export default Terminal;
