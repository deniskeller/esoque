export enum LandingIcons {
  SELECT_ARROW = 'SELECT_ARROW',
  SEARCH = 'SEARCH',
  RIGHT = 'RIGHT',
  NOT_RIGHT = 'NOT_RIGHT',
}

export const landingIcons = {
  [LandingIcons.SELECT_ARROW]: (
    <>
      <path d='M7 0L13.9282 12H0.0717969L7 0Z' fill='#C4C4C4' />
    </>
  ),
  [LandingIcons.SEARCH]: (
    <>
      <path
        d='M13.4369 26.8738C16.7142 26.8738 19.6936 25.7119 22.0175 23.7455L32.4452 34.1732C32.6836 34.4116 32.9815 34.5308 33.3092 34.5308C33.637 34.5308 33.9349 34.4116 34.1732 34.1732C34.6499 33.6965 34.6499 32.9219 34.1732 32.4452L23.7455 22.0175C25.6821 19.6936 26.8738 16.6844 26.8738 13.4369C26.8738 6.0183 20.8555 0 13.4369 0C6.0481 0 0 6.0481 0 13.4369C0 20.8555 6.0481 26.8738 13.4369 26.8738ZM13.4369 2.44307C19.5148 2.44307 24.4307 7.38881 24.4307 13.4369C24.4307 19.5148 19.5148 24.4307 13.4369 24.4307C7.35901 24.4307 2.44307 19.485 2.44307 13.4369C2.44307 7.38881 7.38881 2.44307 13.4369 2.44307Z'
        fill='rgba(0, 0, 0, 0.39)'
      />
    </>
  ),
  [LandingIcons.RIGHT]: (
    <>
      <path
        d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
        fill='#E2F063'
      />
      <path
        d='M24.3197 9.59961L14.0797 21.1196L7.67969 15.9996'
        stroke='#1E1E1E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </>
  ),
  [LandingIcons.NOT_RIGHT]: (
    <>
      <path
        d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
        fill='#E891CF'
      />
      <path
        d='M16 6.3999V20.4799'
        stroke='white'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M16 23.6799V24.9599'
        stroke='white'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
    </>
  ),
};
