import SignOutButton from "./SignOutButton";

export default function Header() {
  return <header className="flex flex-row items-center px-4 py-3 border-b">
    <div className="font-bold">File Space</div>
    <div className="flex-1"></div>
    <SignOutButton />
  </header>
}