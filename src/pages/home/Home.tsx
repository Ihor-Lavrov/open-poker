import { Link } from "react-router";

export const Home = () => {
  return (
    <div>
      Home Page
      <Link to={"/session"}>Create new session</Link>
    </div>
  );
};
