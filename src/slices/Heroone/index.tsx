import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Heroone`.
 */
export type HerooneProps = SliceComponentProps<Content.HerooneSlice>;

/**
 * Component for "Heroone" Slices.
 */
const Heroone = ({ slice }: HerooneProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for heroone (variation: {slice.variation}) Slices
    </section>
  );
};

export default Heroone;
