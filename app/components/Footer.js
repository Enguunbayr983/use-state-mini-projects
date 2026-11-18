export const Footer = ({ firstName, schoolName }) => {
  return (
    <footer className="bg-slate-900 flex justify-center items-center p-4">
      <p className="text-sm text-gray-400">
        2026-{firstName}-{schoolName}
      </p>
    </footer>
  );
};
