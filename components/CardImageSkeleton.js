import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import { gteMedium, ltMedium } from '../theme/medias';

export const SMALL_IMAGE_SIZE = 140;
export const LARGE_IMAGE_SIZE = 200;
export const BORDER_RADIUS = 18;
export const PRIMARY_COLOR = '#dbe5f0';
export const SECONDARY_COLOR = '#c5d6e7';
const ARIA_LABEL = 'Loading image';

const CardImageSkeleton = ({ className }) => (
  <>
    <ContentLoader
      width={SMALL_IMAGE_SIZE}
      height={SMALL_IMAGE_SIZE}
      primaryColor={PRIMARY_COLOR}
      secondaryColor={SECONDARY_COLOR}
      ariaLabel={ARIA_LABEL}
      uniquekey="smallCardImageSkeleton"
      className={`smallSkeleton ${className ? className : ''}`}
    >
      <rect
        width={SMALL_IMAGE_SIZE}
        height={SMALL_IMAGE_SIZE}
        rx={BORDER_RADIUS}
      />
    </ContentLoader>

    <ContentLoader
      width={LARGE_IMAGE_SIZE}
      height={LARGE_IMAGE_SIZE}
      primaryColor={PRIMARY_COLOR}
      secondaryColor={SECONDARY_COLOR}
      ariaLabel={ARIA_LABEL}
      uniquekey="largeCardImageSkeleton"
      className={`largeSkeleton ${className ? className : ''}`}
    >
      <rect
        width={LARGE_IMAGE_SIZE}
        height={LARGE_IMAGE_SIZE}
        rx={BORDER_RADIUS}
      />
    </ContentLoader>

    <style jsx>{`
      @media (${ltMedium}) {
        :global(.largeSkeleton) {
          display: none;
        }
      }

      @media (${gteMedium}) {
        :global(.smallSkeleton) {
          display: none;
        }
      }
    `}</style>
  </>
);

CardImageSkeleton.propTypes = {
  className: PropTypes.string
};

export default CardImageSkeleton;
