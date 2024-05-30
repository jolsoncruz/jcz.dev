import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="flex h-80 items-center border-t bg-zinc-100 pb-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-sans text-2xl font-semibold">
          <span className="font-light">/ </span>Join my personal waitlist
        </h1>
        <p className="font-base pt-4 text-base">
          I'm currently working on a new project and would not want to
          overcommit. Feel free to hop on my personal waitlist if you're keen on
          collaborating on your{" "}
          <span className="font-medium">next big thing</span>. I promise not to
          spam you; I'll only drop a line when I have something useful to share.
        </p>
        <div className="mt-10 flex -space-x-12 font-medium">
          <Input
            placeholder="hi@jcz.dev"
            className="h-14 rounded-full px-8 focus:outline-0"
          />
          <Button className="h-14 w-14 rounded-full bg-slate-500 hover:bg-slate-700">
            {">"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
