import React from 'react';
import { Avatar, AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

let kendokaAvatar =
  'https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar style={{ backgroundColor: '#282E37' }}>
        <AppBarSection className="title">
         <img src='/logo.png' className='logo'/>
        </AppBarSection>
 
        <AppBarSpacer
          style={{
            width: 32
          }}
        />

        <AppBarSection>
          <ul>
            <li>
              <span className='heading' > Matter Ledger</span>
            </li>
            <li></li>
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="user-actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer style={{color:"white"}}>
              <span className="k-icon k-i-bell" />
              <Badge shape="dot" themeColor="info" size="small" position="inside"  />
            </BadgeContainer>
          </button>
          <span className="k-appbar-separator" />
        </AppBarSection>
        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="kendoavatar" />
          </Avatar>
          <span className="userName"> Hello Mark</span>
        </AppBarSection>
      </AppBar>
      <style>{`
          body {
              background: #dfdfdf;

          }.logo{
            width:30px;
            height:30px;
            padding:2px;
            margin-Left:2px
          }
          .title {
              font-size: 18px;
              margin: 0;
              color:white
          }
          .k-badge-container {
              margin-right: 8px;
          }
          ul {
              font-size: 14px;
              list-style-type: none;
              padding: 0;
              margin: 0;
              display: flex;  
           
          }
          li {
              margin: 0 9px;
              color:white;
              display:flex;
              border:2px solid red
              justifyContent:cente

          }
          li:hover {
              cursor: pointer;
              color: #84cef1;
          }
          .k-appbar-section {
              display: flex;
          }
          .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
              padding: 0 8px;
          }
          .content li {
              margin: 0;
              padding: 6px 5px;
          }
          .content ul {
              display: block;
          }
          .content {
              padding: 4px 8px;
          }
          .userName {
              padding: 4px 8px;
              color: #F6BA31
          }
          
          @media only screen and (max-width: 600px) {
              .appbar-items,
              .user-actions,
              .k-avatar,
              .k-appbar-separator {
                  display: none;
              }
              .overflow-button {
                  display: block;
              }
              .content ul li:last-child {
                  display: block;
                  color:white
              }
          }
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
              .appbar-items,
              .user-actions .k-badge-container,
              .k-avatar,
              .k-appbar-separator {
                  display: none;
              }
              .overflow-button {
                  display: block;
              }
              .content ul li:last-child {
                  display: none;
                  color:white
              }
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
              .appbar-items,
              .user-actions .k-badge-container,
              .k-appbar-separator,
              .k-avatar {
                  display: block;
              }
              .overflow-button {
                  display: none;
              }
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {}
          `}</style>
    </React.Fragment>
  );
};

export default Navbar;
