import { createReactComponent } from './create-component/create-component';
import { JSX } from '@snap-mobile/snap-ui/dist/types';

export const SnapMainNavigation = createReactComponent<
  JSX.SnapMainNavigation,
  HTMLSnapMainNavigationElement
>('snap-main-navigation');
export const SnapGlobalHeader = createReactComponent<
  JSX.SnapGlobalHeader,
  HTMLSnapGlobalHeaderElement
>('snap-global-header');
export const SnapLogo = createReactComponent<JSX.SnapLogo, HTMLSnapLogoElement>('snap-logo');
export const SnapSession = createReactComponent<JSX.SnapSession, HTMLSnapSessionElement>(
  'snap-session'
);
export const SnapOption = createReactComponent<JSX.SnapOption, HTMLSnapOptionElement>(
  'snap-option'
);
export const SnapCardGeneral = createReactComponent<
  JSX.SnapCardGeneral,
  HTMLSnapCardGeneralElement
>('snap-card-general');
export const SnapCardSubtitle = createReactComponent<
  JSX.SnapCardSubtitle,
  HTMLSnapCardSubtitleElement
>('snap-card-subtitle');
export const SnapCardSection = createReactComponent<
  JSX.SnapCardSection,
  HTMLSnapCardSectionElement
>('snap-card-section');
export const SnapFilter = createReactComponent<JSX.SnapFilter, HTMLSnapFilterElement>(
  'snap-filter'
);
export const SnapButton = createReactComponent<JSX.SnapButton, HTMLSnapButtonElement>(
  'snap-button'
);
export const SnapAppSwitcher = createReactComponent<
  JSX.SnapAppSwitcher,
  HTMLSnapAppSwitcherElement
>('snap-app-switcher');
export const SnapHeaderWrapper = createReactComponent<
  JSX.SnapHeaderWrapper,
  HTMLSnapHeaderWrapperElement
>('snap-header-wrapper');
export const SnapInput = createReactComponent<JSX.SnapInput, HTMLSnapInputElement>('snap-input');
export const SnapLink = createReactComponent<JSX.SnapLink, HTMLSnapLinkElement>('snap-link');
export const SnapIcon = createReactComponent<JSX.SnapIcon, HTMLSnapIconElement>('snap-icon');
export const SnapAvatar = createReactComponent<JSX.SnapAvatar, HTMLSnapAvatarElement>(
  'snap-avatar'
);
