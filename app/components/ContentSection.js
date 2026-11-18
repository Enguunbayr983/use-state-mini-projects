export const ContentSection = ({ hobbies }) => {
  return (
    <section className="bg-slate-50 px-6 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-center text-lg font-bold mb-6">My type</h1>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-sm font-semibold hover:shadow-md transition">
            <span className="text-2xl mb-2">{hobbies[0].icon}</span>
            {hobbies[0].title}
          </div>
        </div>
      </div>
    </section>
  );
};
