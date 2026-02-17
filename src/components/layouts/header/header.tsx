import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Container,
  Button,
  Typography,
  IconButton,
  List,
  ListItemText,
  Collapse,
  Fade
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';

import { headerConfig } from "./headerConfig";
// import { CustomLink } from "../../Link/customLink";
import { CustomMenuItem, CustomPopper } from "../../menu/CustomMenu";

interface MobileMenuItemProps {
  item: HeaderConfig;
  activeSubmenu: string | null;
  handleMobileSubMenu: (label: string) => void;
  closeMobileMenu: () => void;
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const handleMobileSubMenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  }

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveSubmenu(null);
  }

  return (
    <HeaderWrapper>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="xl">
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', height: '50px', justifyContent: 'flex-end' }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <DeskTopMenuWrapper>
            {headerConfig.map((item) => (
              <DesktopMenuItem key={item.label} item={item} />
            ))}
          </DeskTopMenuWrapper>

        </Container>

        {/* Mobile Menu */}
        {!!mobileOpen && (
          <MobileMenuWrapper>
            {headerConfig.map((item) => (
              <MobileMenuItem key={item.label}
                activeSubmenu={activeSubmenu}
                handleMobileSubMenu={handleMobileSubMenu}
                closeMobileMenu={closeMobileMenu}
                item={item}
              />
            ))}
          </MobileMenuWrapper>
        )}
      </AppBar>
    </HeaderWrapper>
  );
};

const DesktopMenuItem = ({ item }: { item: HeaderConfig }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItemRef = useRef<any>(null);
  const [hoverState, setHoverState] = useState<boolean>(false);
  const [openPopper, setOpenPopper] = useState<boolean>(false);

  const handleLink = (to: string) => {
    navigate(to);
    setHoverState(false);
    setOpenPopper(false);
  }

  return (
    <Box sx={{ display: "flex" }}>
      {item.isChildren ? (
        <React.Fragment>
          <HeaderMenuItem ref={menuItemRef}
            onMouseOver={() => { setOpenPopper(true) }}
            onMouseLeave={() => { setOpenPopper(false) }}
            endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '18px !important' }} />}
            className={item.children?.some(child => location.pathname === child.href) ? 'active' : ''}
          >
            <Typography variant="h5">{item.label}</Typography>
          </HeaderMenuItem>

          <CustomPopper transition
            placement="bottom-start"
            anchorEl={menuItemRef.current}
            open={openPopper || hoverState}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={500}>
                <Box onMouseOver={() => { setHoverState(true) }} onMouseLeave={() => { setHoverState(false) }}>
                  {item.children?.map((child) => (
                    <CustomMenuItem key={child.label}
                      onClick={() => { handleLink(child.href || '#') }}
                      className={location.pathname === child.href ? 'active' : ''}
                    >
                      <Typography variant="h5">{child.label}</Typography>
                    </CustomMenuItem>
                  ))}
                </Box>
              </Fade>
            )}
          </CustomPopper>
        </React.Fragment>
      ) : (
        <HeaderMenuItem onClick={() => { handleLink(item.href || '#') }}
          className={location.pathname === item.href ? 'active' : ''}
        >
          <Typography variant="h5">{item.label}</Typography>
        </HeaderMenuItem>
      )}
    </Box>
  )
}

const MobileMenuItem = (props: MobileMenuItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, activeSubmenu, handleMobileSubMenu, closeMobileMenu } = props;

  const handleLink = (to: string) => {
    navigate(to);
    closeMobileMenu();
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {item.isChildren ? (
        <React.Fragment>
          <CustomMenuItem onClick={() => handleMobileSubMenu(item.label)}
            className={item.children?.some(child => location.pathname === child.href) ? 'active' : ''}
          >
            <ListItemText>
              <Typography variant="h5">{item.label}</Typography>
            </ListItemText>

            {activeSubmenu === item.label ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </CustomMenuItem>

          <Collapse in={activeSubmenu === item.label} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => (
                <CustomMenuItem sx={{ pl: 4 }}
                  onClick={() => { handleLink(child.href || '#') }}
                  className={location.pathname === child.href ? 'active' : ''}
                >
                  <ListItemText>
                    <Typography variant="h5">{child.label}</Typography>
                  </ListItemText>
                </CustomMenuItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ) : (
        <CustomMenuItem onClick={() => { handleLink(item.href || '#') }}
          className={location.pathname === item.href ? 'active' : ''}
        >
          <ListItemText>
            <Typography variant="h5">{item.label}</Typography>
          </ListItemText>
        </CustomMenuItem>
      )}
    </Box>
  )
}

const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 1000,
  position: 'fixed',
  top: 0, left: 0, right: 0,

  backgroundColor: theme.palette.common.headerBg,
  borderColor: theme.palette.common.headerBorderBg,
  borderWidth: '0 0 1px 0',
  borderStyle: 'solid',

  '& .MuiButton-root': {
    textTransform: 'none',
    fontSize: '0.9rem',
    padding: '8px 12px',
    whiteSpace: 'nowrap',
  },
}))

const HeaderMenuItem = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  minHeight: '50px',
  borderRadius: '0px',

  '& .MuiButton-endIcon': {
    margin: '0px 0px 0px 5px !important',
  },

  '&.active': {
    backgroundColor: theme.palette.common.menuActiveBg,
    '& h1, h2, h3, h4, h5, h6, p': {
      // fontWeight: 500,
      color: theme.palette.common.menuActiveColor,
    }
  },

  '&:hover': {
    backgroundColor: theme.palette.common.menuActiveBg,
    '& h1, h2, h3, h4, h5, h6, p': {
      // fontWeight: 500,
      color: theme.palette.common.menuActiveColor,
    }
  }
}))

const DeskTopMenuWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}))

const MobileMenuWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '500px',
  overflowY: 'auto',
  overflowX: 'hidden',

  borderColor: theme.palette.common.headerBorderBg,
  borderWidth: '1px 0 0 0',
  borderStyle: 'solid',

  [theme.breakpoints.up('md')]: {
    display: 'none',
  }
}))

export { Header };
