import {
  FooterWrapper, FooterList, FooterContainer, FooterWatermark
} from './styled'

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterList>
          <li><a href="!#">Electronic Records Act</a></li>
          <li><a href="!#">Equal Opportunity</a></li>
          <li><a href="!#">Privacy</a></li>
          <li><a href="!#">Site Map</a></li>
        </FooterList>
        <FooterList>
          <li><a href="!#">Electronic Records Act</a></li>
          <li><a href="!#">Equal Opportunity</a></li>
          <li><a href="!#">Privacy</a></li>
          <li><a href="!#">Site Map</a></li>
        </FooterList>
        <FooterList>
          <li><a href="!#">Electronic Records Act</a></li>
          <li><a href="!#">Equal Opportunity</a></li>
          <li><a href="!#">Privacy</a></li>
          <li><a href="!#">Site Map</a></li>
        </FooterList>
        <FooterList>
          <li><a href="!#">Electronic Records Act</a></li>
          <li><a href="!#">Equal Opportunity</a></li>
          <li><a href="!#">Privacy</a></li>
          <li><a href="!#">Site Map</a></li>
        </FooterList>
      </FooterContainer>
      <FooterWatermark>
        In order to protect everyone through social distancing,
        {' '}
        <br />
        <strong>IDES offices are closed to the public until further notice.</strong>
        {' '}
        <a href="https://www2.illinois.gov/ides/aboutides/Pages/Office_Locator.aspx" target="_blank" rel="noreferrer">Click for more information.</a>
        <br />
        <span>Copyright © 2020 Illinois Department of Employment Security</span>
      </FooterWatermark>
    </FooterWrapper>
  )
}

export default Footer
