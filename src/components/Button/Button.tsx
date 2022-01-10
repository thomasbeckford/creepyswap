import React, { ElementType } from 'react'

// import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from './StyledButton'
import { ButtonProps, scales, variants } from './types'

function Button<E extends ElementType = 'button'>(props: ButtonProps<E>) {
  const {
    startIcon,
    endIcon,
    // external,
    className,
    isLoading,
    disabled,
    children,
    ...rest
  } = props

  const isDisabled = isLoading || disabled
  const classNames = className ? [className] : []

  if (isLoading) {
    classNames.push('pancake-button--loading')
  }

  if (isDisabled && !isLoading) {
    classNames.push('pancake-button--disabled')
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(' ')}
      disabled={isDisabled}
      {...rest}
    >
      <>{children}</>
    </StyledButton>
  )
}

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
}

export default Button
