import React from 'react'
import imgresponsiv from "../../assets/responsive.png"
import "./Sections.css"

const Section = () => {
  return (
    <section id="slider">
		<div className="conteneur flex-slider">
			<figure id="milieu-haut-gauche">
				<a href="/">
					<img src={imgresponsiv} alt="image qui represente plusieurs ecrans pour le responsive"
						title="responsive design"/>
				</a>
				<figcaption>
					<a href="/">Projets Responsive Design</a>
				</figcaption>
			</figure>
			<div id="milieu-haut-droit">
				<h2>Are you looking for a developer to manage your projects?</h2>
				<p>I can strengthen your team as much on the graphic part as on the development.</p>
				<p>Would you be ready to give me my chance?</p>
			</div>
		</div>
	</section>
  )
}

export default Section