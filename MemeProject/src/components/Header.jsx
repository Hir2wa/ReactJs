import Logo from "../images/Logo.png";

export default function Header() {
  return (
    <header className="bg-purple-900 text-white p-4 flex items-center justify-center">
      <img src={Logo} alt="logo" className="h-10 w-10 mr-3" />
      <h1 className="text-3xl font-bold">Meme Generator</h1>
    </header>
  );
}
