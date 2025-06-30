import { Session } from "next-auth";

interface HeaderProps {
  session: Session;
}

const Header = ({ session }: HeaderProps) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
          Welcome back, {session?.user?.name}
        </h2>
        <p className="text-base text-slate-500">
          Monitor all of your users and books here
        </p>
      </div>

      {/* Future: Search functionality can be added here */}
      {/* <div className="admin-search">
        <Search className="size-5 text-light-500" />
        <Input
          placeholder="Search books, users..."
          className="admin-search_input"
        />
      </div> */}
    </header>
  );
};

export default Header;
