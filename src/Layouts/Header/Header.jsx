import Logo from './../../Assets/Chido-logo.png';
import HamMenuIcon from './../../Assets/ant-design_menu-outlined.svg';
import useHamBtnTrigger from './useHamBtnTrigger';
import useMenuBtnScrollTo from './useMenuBtnScrollTo';

export default function Header() {

  const { isButtonTriggered, setIsButtonTriggered, enableMenu } = useHamBtnTrigger();

  const { footer, landingSection, aboutSection, menuSection,
    scrollToSection } = useMenuBtnScrollTo();


  return (
    <header>
      <div className='container container--header'>
      <div className='header-logo'>
        <img src={Logo} alt="" />
      </div>

      <ul className='menu-list menu-list-desktop'>
        <li className='menu-home' onClick={() => scrollToSection(landingSection)}>HOME</li>
        <li className='menu-menu' onClick={() => scrollToSection(menuSection)}>MENU</li>
        <li className='menu-about' onClick={() => scrollToSection(aboutSection)}>ABOUT</li>
        <li className='menu-contact' onClick={() => scrollToSection(footer)}>CONTACT</li>
        <li className='menu-order'>ORDER</li>
      </ul>

      <div className='ham-menu-icon' onClick={enableMenu}>
        <img src={HamMenuIcon} alt="" />
      </div>
      </div>
      
      <ul className={`menu-list 
      menu-list-mobile ${isButtonTriggered ? 
      'menu-mobile-active' : ''}`}>
        <li className='menu-home' onClick={() => {
          scrollToSection(landingSection);
          setIsButtonTriggered(false);}}>
          HOME
        </li>
        <li className='menu-menu' onClick={() => {
          scrollToSection(menuSection);
          setIsButtonTriggered(false);}}>
          MENU
        </li>
        <li className='menu-about' onClick={() => {
          scrollToSection(aboutSection);
          setIsButtonTriggered(false);}}>
          ABOUT
        </li>
        <li className='menu-contact' onClick={() => {
          scrollToSection(footer);
          setIsButtonTriggered(false);}}>
          CONTACT
        </li>
        <li className='menu-order'>ORDER</li>
      </ul>
    </header>
  )
}
