/**
 * @typedef {import("@prismicio/client").Content.ComoTrabalhamosSlice} ComoTrabalhamosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ComoTrabalhamosSlice>} ComoTrabalhamosProps
 * @param {ComoTrabalhamosProps}
 */
const ComoTrabalhamos = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for como_trabalhamos (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ComoTrabalhamos;
