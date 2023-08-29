import React, { useState, useEffect } from 'react';

import Wrapper from '../wrapper/Wrapper';
import logo from '../../assets/movix-logo.svg';

import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';

import './header.css';

const Header = () => {
  //! S T A T E S
  const [showNav, setShowNav] = useState('top');
  const [lastscrollY, setLastscrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  //! M E T H O D S

  //to scroll to top of the page after reloding
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastscrollY && !mobileMenu) {
        setShowNav('hide');
      } else {
        setShowNav('show');
      }
    } else {
      setShowNav('top');
    }

    setLastscrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastscrollY]);

  const queryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);

      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie');
    } else {
      navigate('/explore/tv');
    }
    setMobileMenu(false);
  };

  return (
    <div className={`app__header ${mobileMenu ? 'mobileView' : ''} ${showNav} `}>
      <Wrapper>
        <div className="app__header-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="logo img" />
        </div>

        <ul className="app__header-nav">
          <li className="app__header-navItem" onClick={() => navigate('/home')}>
            Home
          </li>
          <li className="app__header-navItem" onClick={() => navigationHandler('movie')}>
            Movies
          </li>
          <li className="app__header-navItem" onClick={() => navigationHandler('tv')}>
            TV Shows
          </li>
          <li className="app__header-navItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="app__header-mobileMenu">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </Wrapper>

      {showSearch && (
        <div className="app__header-searchBar">
          <Wrapper>
            <div className="app__header-searchBar_input">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={queryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default Header;
