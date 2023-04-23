import React from 'react'
import "./Footer.css"
const Footer = (props) => {
  return (
    <footer>
		<div className="bouton">
			<a href="/">Imformation</a>-
			<a href="/">Legal Notice</a>-
			<a href="contact.html">contact</a>
		</div>
		<h3>© Copyright. 2023 Design and production by {props.name}. All rights reserved.</h3>
	</footer>
  )
}

export default Footer