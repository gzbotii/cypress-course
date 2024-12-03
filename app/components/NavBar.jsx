// NavBar.js
import NavItem from "./NavItem";

const navItems = [
  {label: "Why Cypress?", path: "/"},
  {label: "Overview", path: "/overview"},
  {label: "Fundamentals", path: "/fundamentals"},
  {label: "Forms", path: "/forms"},
  {label: "Examples", path: "/examples"},
].map((item) => ({
  ...item,
  dataTest: `nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`,
}));

export default function NavBar() {
  return (
    <ul className="nav-bar">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          path={item.path}
          dataTest={item.dataTest} // Pass dataTest here
        />
      ))}
    </ul>
  );
}
