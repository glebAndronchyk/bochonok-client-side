import { Link } from "react-router-dom";

const logoMock =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713484800&semt=ais";

export const Logo = () => {
  return (
    <Link to="/" className="w-28 h-28">
      <h1 className="hidden">Logo</h1>
      <img src={logoMock} alt="logo" />
    </Link>
  );
};
