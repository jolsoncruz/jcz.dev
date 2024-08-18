import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [result, setResult] = useState("");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_API,
      )
      .then(() => {
        console.log("Email sent!");
        setResult("Thank you for reaching out! 🚀");
        setTimeout(() => setResult(""), 3000);
        reset();
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        setResult("Error sending email. Please try again later.");
        setTimeout(() => setResult(""), 3000);
        console.log(import.meta.env.VITE_EMAILJS_API);
      });
  };

  const onError = () => {
    setResult("Please fill in all the required fields.");
    setTimeout(() => setResult(""), 3000);
  };

  return (
    <>
      <div className="mx-auto space-y-5 pb-20 text-center font-serif text-5xl md:space-y-3">
        <h1>📨</h1>
        <h1 className="font-bold tracking-tighter">
          Beep me if you want to reach me.
        </h1>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-5">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="[&>input]:formField [&>textarea]:formField [&>label]:formLabel w-full max-w-xl"
        >
          <label htmlFor={"name"}>Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Name is required." })}
          />

          <label htmlFor={"email"}>Email</label>
          <input
            id="email"
            type="email"
            placeholder="j_doe@example.com"
            {...register("email", { required: "Email is required." })}
          />

          <label htmlFor={"message"}>Message</label>
          <textarea
            id="message"
            placeholder="Hello there!"
            {...register("message", { required: "Message is required." })}
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-md bg-jelly-bean-500 py-2 text-white hover:bg-jelly-bean-600 focus:outline-none focus:ring-2 focus:ring-jelly-bean-400"
          >
            Submit
          </button>
        </form>
        <p className="pb-20 text-sm">{result}</p>
      </div>
    </>
  );
};

export default Contact;
