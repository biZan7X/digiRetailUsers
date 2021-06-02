export const sectionAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},

	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 1,
		},
	},

	exit: {
		opacity: 0,
		y: 300,
		transition: { duration: 0.25 },
	},
};

export const userAnimation = {
	hidden: { y: 200 },
	show: {
		y: 0,
		transition: { duration: 1, ease: "easeOut" },
	},
};
