import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const MenuItem = ({ category, product: { image, price }, top, right }) => {
	return (
		<>
			<div className="category-menu-item">
				<div className="category-menu-text">Starting from:</div>
				<div className="category-menu-lowest-price">$ {price}</div>
				<div className="category-menu-bg-text">{category}</div>
				<h1>{category}</h1>
				<Link href={`/shop`}>

				<div className="category-menu-button-container">
					<BsArrowRightCircle className="category-arrow-icon" />
					<div className="category-menu-button-text">BROWSE</div>
				</div>
				</Link>

				<img
					src={urlFor(image && image[0])}
					className="category-item-image"
					alt=""
					style={{ right, top }}
				/>
			</div>
		</>
	);
};

const CategoryMenu = ({ categoryMenuItems }) => {
	return (
		<>
			<div className="category-menu-container">
				<MenuItem
					category={"Mouse"}
					product={categoryMenuItems[0]}
					top={65}
					right={-170}
				/>
				<MenuItem
					category={"Keyboard"}
					product={categoryMenuItems[1]}
					top={-10}
					right={-190}
				/>
				<MenuItem
					category={"Headset"}
					product={categoryMenuItems[2]}
					top={45}
					right={-100}
				/>
				<MenuItem
					category={"Mousepad"}
					product={categoryMenuItems[3]}
					top={65}
					right={-260}
				/>
			</div>
		</>
	);
};

export default CategoryMenu;