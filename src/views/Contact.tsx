import { ChangeEvent, FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setResult("Thank you for reaching out! 🚀");
    } catch (error) {
      console.log(error);
      setResult("Error sending message!");
    }
    console.log(formData);
  };

  return (
    <>
      <div className="mx-auto max-w-6xl space-y-5 px-7 py-20 text-center font-serif text-5xl md:space-y-3 md:px-5">
        <h1>📨</h1>
        <h1 className="font-bold tracking-tighter">
          Beep me if you want to reach me.
        </h1>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-5 px-7 md:px-5">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block text-sm text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border bg-slate-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-jelly-bean-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="j_doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border bg-slate-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-jelly-bean-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-1 block text-sm text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hello there!"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border bg-slate-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-jelly-bean-400"
              rows={8}
              required
            ></textarea>
          </div>
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
