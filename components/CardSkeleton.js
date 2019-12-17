import ContentLoader from 'react-content-loader';

import { gteMedium, ltMedium } from '../theme/medias';

import {
  SMALL_IMAGE_SIZE,
  LARGE_IMAGE_SIZE,
  BORDER_RADIUS,
  PRIMARY_COLOR,
  SECONDARY_COLOR
} from './CardImageSkeleton';

const SMALL_CARD_HEIGHT = 188;
const LARGE_CARD_HEIGHT = 267;
const ARIA_LABEL = 'Loading pokemon';

const CardSkeleton = () => (
  <>
    <ContentLoader
      width={SMALL_IMAGE_SIZE}
      height={SMALL_CARD_HEIGHT}
      primaryColor={PRIMARY_COLOR}
      secondaryColor={SECONDARY_COLOR}
      ariaLabel={ARIA_LABEL}
      uniquekey="smallCardSkeleton"
      className="smallSkeleton"
    >
      <path d="M12 149h116v17H12z" />
      <path d="M12 172h76v16H12z" />
      <rect
        width={SMALL_IMAGE_SIZE}
        height={SMALL_IMAGE_SIZE}
        rx={BORDER_RADIUS}
      />
    </ContentLoader>

    <ContentLoader
      width={LARGE_IMAGE_SIZE}
      height={LARGE_CARD_HEIGHT}
      primaryColor={PRIMARY_COLOR}
      secondaryColor={SECONDARY_COLOR}
      ariaLabel={ARIA_LABEL}
      uniquekey="largeCardSkeleton"
      className="largeSkeleton"
    >
      <path d="M18 214h164v19H18z" />
      <path d="M18 245h98v22H18z" />
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

export default CardSkeleton;
