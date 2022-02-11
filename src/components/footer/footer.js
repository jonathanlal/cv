import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaEnvelope, FaStackOverflow, FaFileDownload } from "react-icons/fa"
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../data/siteConfig'
import cv from '../../../static/Jonathan_Laliberte_CV.pdf'

const Link = styled(({ className, icon: Icon, color, ...props }) => (
  <a 
    className={className}
    target='_blank'
    rel="noopener noreferrer"
    {...props}
  >
    <Icon color={color} size={32} />
  </a>
)).attrs(props => ({ color: props.theme.colors.fontColor }))`
  & + & {
    margin-left: 24px;
  }
`;

const Footer = ({ className }) => {
  const {
    stackoverflow,
    github,
      email,

  } = siteConfig.social
  return (
    <footer className={className}>
      {`© ${new Date().getFullYear()} ${siteConfig.authorName} | CV`}
      <div>
        {stackoverflow && <Link href={stackoverflow} icon={FaStackOverflow} />}
        {github && <Link href={github} icon={FaGithub} />}
        {email && <Link href={`mailto:${siteConfig.social.email}`} icon={FaEnvelope} />}
        <Link icon={FaFileDownload} href={cv} download/>
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px; 
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`;
