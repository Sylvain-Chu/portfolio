export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
        <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
          <small className="text-zinc-500">
            Copyright &copy; Sylvain Churlet {new Date().getFullYear()} Tous
            droits réservés
          </small>
        </div>
      </div>
    </footer>
  );
}
