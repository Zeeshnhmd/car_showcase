/**
 * * we are using 'use client' here because nextJS is a server side rendering language and below we are using button onClick method which is client side so pervent the error we are using 'use client'
 */

'use client';

import { CustomerButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btnType,
	textStyles,
	rightIcon,
	isDisabled,
}: CustomerButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						alt="right icon"
						fill
						className="object-contain"
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
