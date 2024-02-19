import Link from "next/link";
import { navItems } from "../../utilities/navItems";
import SubscribeModal from "./SubscribeModal";
import { TwitterLogo, InstagramLogo, SpotifyLogo } from "phosphor-react";

export default function Nav() {
	const linkClasses = "text-white menu-item-name";
	return (
        <div>
			<div className="hidden text-black-full mt-8 my-3 grid grid-cols-2 md:flex md:justify-center md:items-center md:gap-6">
				{navItems.map(function (item) {
					if (item.showOnDesktop) {
						return (
                            <Link key={item.name} shallow passHref href={item.link} legacyBehavior>
								<div className="relative">
									<a className={linkClasses}> {item.name} </a>
									<div className="bottom-line"></div>
								</div>
							</Link>
                        );
					} else {
						return null;
					}
				})}
				<a href="https://www.instagram.com/izem__music/" target="_blank">
					<InstagramLogo
						color="#efd3a2"
						className="relative social-icon"
						size={32}
					/>
				</a>
				<a
					href="https://open.spotify.com/artist/2dJpwMtmOBr9ad4D7vRf2r"
					target="_blank"
				>
					<SpotifyLogo
						color="#efd3a2"
						className="relative social-icon"
						size={32}
					/>
				</a>
				<a href="https://twitter.com/iZem" target="_blank">
					<TwitterLogo
						color="#efd3a2"
						className="relative social-icon"
						size={32}
					/>
				</a>
				<SubscribeModal />
			</div>
		</div>
    );
}

const ModalCustomStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
