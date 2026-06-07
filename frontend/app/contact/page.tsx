export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-6">
        Contact Us
      </h1>

      <input
        placeholder="Name"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        placeholder="Email"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <textarea
        placeholder="Message"
        className="w-full border p-3 rounded-xl h-40"
      />

    </div>
  );
}