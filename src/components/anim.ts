// nav options animation props
export const cardVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      delay: 0.5 + i * 1, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
