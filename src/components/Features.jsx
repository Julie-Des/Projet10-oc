import FeatureItem from "./FeatureItem";
import featuresData from "../Data/featuresData.json"

function Features() {
	return (
		<section className="features">
			<h2 className="sr-only">Features</h2>
			{featuresData.map((feature, index) =>(
				<FeatureItem
				key={index}
				imageSrc={`/assets/${feature.image}`}
				imageAlt={feature.alt}
				title={feature.title}
				text={feature.text}
			/>
			))}
		</section>
	);
}

export default Features;
