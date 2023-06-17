import NavBar from "./NavBar";
function Layout(props: any) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
