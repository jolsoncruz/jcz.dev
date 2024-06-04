import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="flex h-80 items-center border-t bg-zinc-100 pb-4">
      <div className="mx-auto max-w-6xl px-7 md:px-5">
        <h1 className="font-sans text-2xl font-semibold">
          <span className="font-light">/ </span>Get My Attention!
        </h1>
        <p className="font-base pt-4 text-base">
          Have an exciting <span className="font-medium">project</span> or{" "}
          <span className="font-medium">collaboration</span> in mind? Leave your
          email, and I'll get in touch when I'm available. Don't worry, I value
          your privacy and will only reach out with something truly worth
          sharing.
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
