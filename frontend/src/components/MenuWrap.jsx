import { Link } from "react-router-dom";
const MenuWrap = () => {
  return (
    <header className="menu-wrap col-span-3 row-span-11 bg-white border-r border-gray-200 overflow-auto">
      <figure className="user h-20 flex items-center justify-start px-12">
        <div className="user-avatar w-10 h-10 rounded-full overflow-hidden">
          <img
            src="src/assets/img/logo-dh.png"
            alt="Logo Digital House"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="ml-4 text-gray-800 font-bold text-sm">
          Digital House
        </figcaption>
      </figure>
      <nav className="px-12">
        <section className="menu pt-12">
          <h3 className="text-sm uppercase text-blue-500 font-semibold">
            Opciones
          </h3>
          <ul className="block">
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center text-gray-500 font-semibold text-sm hover:text-gray-800">
                <i className="bi bi-building text-base text-blue-400 mr-2"></i>{" "}
                - Home
              </a>
            </li>
            <li className="mt-4">
              <Link
                to="applicants"
                className="flex items-center text-gray-500 font-semibold text-sm hover:text-gray-800">
                <i className="bi bi-person text-base text-blue-400 mr-2"></i> -
                Aspirantes
              </Link>
            </li>
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center text-gray-500 font-semibold text-sm hover:text-gray-800">
                <i className="bi bi-list-check text-base text-blue-400 mr-2"></i>{" "}
                - Profesiones
              </a>
            </li>
            <li className="mt-4">
              <Link
                to="register"
                className="flex items-center text-gray-500 font-semibold text-sm hover:text-gray-800">
                <i className="bi bi-person-vcard text-base text-blue-400 mr-2"></i>{" "}
                - Postulate aquí
              </Link>
            </li>
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center text-gray-500 font-semibold text-sm hover:text-gray-800">
                <i className="bi bi-chat-left-text text-base text-blue-400 mr-2"></i>{" "}
                - Contacto
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default MenuWrap;
