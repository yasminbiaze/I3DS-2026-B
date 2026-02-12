import React from 'react'

const SocialLink = ({ url, icon }) => {
  return (
    <a href={url}>
      <icon-icon name={icon}></icon-icon>
    </a>
  )
}

export default SocialLink
