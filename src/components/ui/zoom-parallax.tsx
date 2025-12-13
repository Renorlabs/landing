'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// Smooth the scroll progress for better integration with Lenis
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		mass: 0.5,
		restDelta: 0.001
	});

	// Center image (index 0) should reach full screen size first (scale to 4), then zoom out
	// 25vh * 4 = 100vh, so scale of 4 fills the screen height
	const centerImageScale = useTransform(smoothProgress, (progress) => {
		if (progress <= 0.6) {
			// Zoom in to fill screen: 1 to 4
			return 1 + (progress / 0.6) * 3;
		} else {
			// Continue zooming out: 4 to 5
			return 4 + ((progress - 0.6) / 0.4) * 1;
		}
	});
	
	// Other images zoom at different rates
	const scale5 = useTransform(smoothProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(smoothProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(smoothProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(smoothProgress, [0, 1], [1, 9]);

	const scales = [centerImageScale, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[200vh] w-full">
			<div className="sticky top-0 h-screen w-full overflow-hidden px-4 md:px-8">
				{images.map(({ src, alt }, index) => {
					// Each image gets a different zoom scale
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ 
								scale,
								transformOrigin: 'center center'
							}}
							className={`absolute top-0 left-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div className="relative h-[25vh] w-[25vw] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
									loading="lazy"
									decoding="async"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
