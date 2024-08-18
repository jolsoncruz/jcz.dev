// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
// import { useState } from "react";

const Newsletter = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
    },
  });

  // const [result, setResult] = useState("");

  const onSubmit = (data: any) => {
    const templateParams = {
      from_email: data.email,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID2;
    const emailKey = import.meta.env.VITE_EMAILJS_API;

    emailjs
      .send(serviceId, templateId, templateParams, emailKey)
      .then(() => {
        console.log("Email sent!");
        // setResult("Thank you for reaching out! 🚀");
        // setTimeout(() => setResult(""), 3000);
        reset();
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        // setResult("Error sending email. Please try again later.");
        console.log(import.meta.env.VITE_EMAILJS_API);
      });
  };

  return (
    <div className="flex h-80 items-center border-t bg-zinc-100 pb-4">
      <div className="mx-auto max-w-6xl px-7 md:px-5">
        <h1 className="pb-4 font-sans text-2xl font-semibold">
          <span className="font-light">/ </span>Get My Attention!
        </h1>
        <p>
          Have an exciting <span className="font-medium">project</span> or{" "}
          <span className="font-medium">collaboration</span> in mind? Leave your
          email, and I'll get in touch when I'm available. Don't worry, I value
          your privacy and will only reach out with something truly worth
          sharing.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex h-14 -space-x-12 font-medium"
        >
          <input
            {...register("email", { required: "Email is required." })}
            type="email"
            placeholder="hi@jcz.dev"
            id="email"
            className="w-full rounded-full border px-8 focus:outline-none focus:ring-1 focus:ring-slate-300"
          />
          <button
            type="submit"
            className="flex w-14 items-center justify-center rounded-full bg-slate-500 hover:bg-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 fill-none stroke-slate-200 stroke-[1.5] drop-shadow-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
