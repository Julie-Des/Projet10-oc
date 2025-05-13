import FeatureItem from "./FeatureItem";
import IconChat from "../assets/icon-chat.webp";
import IconMoney from "../assets/icon-money.webp";
import IconSecurity from "../assets/icon-security.webp";

function Features() {
	return (
		<section className="features">
			<h2 className="sr-only">Features</h2>
			<FeatureItem
				imageSrc={IconChat}
				imageAlt="Chat Icon"
				title="You are our #1 priority"
				text="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
			/>
            <FeatureItem
				imageSrc={IconMoney}
				imageAlt="Money Icon"
				title="More savings means higher rates"
				text="The more you save with us, the higher your interest rate will be!"
			/>
            <FeatureItem
				imageSrc={IconSecurity}
				imageAlt="Security Icon"
				title="Security you can trust"
				text="We use top of the line encryption to make sure your data and money
                is always safe."
			/>
		</section>
	);
}

export default Features;
