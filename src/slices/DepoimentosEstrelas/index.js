/**
 * @typedef {import("@prismicio/client").Content.DepoimentosEstrelasSlice} DepoimentosEstrelasSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DepoimentosEstrelasSlice>} DepoimentosEstrelasProps
 * @param {DepoimentosEstrelasProps}
 */

import TestimonialsRate from "../../components/ui/TestimonialsRate";

const DepoimentosEstrelas = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TestimonialsRate />
    </section>
  );
};

export default DepoimentosEstrelas;
