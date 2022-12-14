import "./Header.css";



import Nav from "./Nav";

const Header = ({ siteTitle, payNow }) => {
 
  const links = ['Home', 'About', 'Products', 'Contacts', 'Users'];

  

  return (
    <header>
      
      <Nav pages={links} payNow={payNow} siteTitle={siteTitle}/>
    </header>
  );
};

export default Header;
