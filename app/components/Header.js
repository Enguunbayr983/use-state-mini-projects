export const Header = ({ firstName }) => {
  return (
    <header className="bg-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="font-bold text-xl">{firstName}</p>

        <nav className="flex items-center gap-6">
          <a className="text-gray-500 text-sm cursor-pointer hover:text-black">
            Page
          </a>
          <a className="text-gray-500 text-sm cursor-pointer hover:text-black">
            Connect
          </a>
          <a className="text-gray-500 text-sm cursor-pointer hover:text-black">
            Addict
          </a>
        </nav>
      </div>
    </header>
  );
};
