export const Hero = ({ firstName, schoolName }) => {
  return (
    <section className="bg-orange-50 px-6 py-16 text-center">
      <div className="text-4xl">👨‍💻</div>

      <h2 className="mt-4 text-3xl font-bold">Hello. Im {firstName}</h2>

      <p className="mt-3 text-sm text-slate-500">Learning in {schoolName}</p>
    </section>
  );
};
