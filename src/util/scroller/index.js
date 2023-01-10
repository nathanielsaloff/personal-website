/* eslint-disable complexity */
// https://github.com/tarun-dugar/easy-scroll

import EASINGS from './easings'
import getScrollTo from './bezier'

const getProgress = ({
  easingPreset,
  cubicBezierPoints,
  duration,
  runTime
}) => {
  const percentTimeElapsed = runTime / duration

  if (EASINGS.hasOwnProperty(easingPreset)) {
    return EASINGS[easingPreset](percentTimeElapsed)
  }
  else if (
    cubicBezierPoints &&
    !isNaN(cubicBezierPoints.x1) &&
    !isNaN(cubicBezierPoints.y1) &&
    !isNaN(cubicBezierPoints.x2) &&
    !isNaN(cubicBezierPoints.y2) &&
    cubicBezierPoints.x1 >= 0 &&
    cubicBezierPoints.x2 >= 0) {
    return getScrollTo({
      percentTimeElapsed,
      x1: cubicBezierPoints.x1,
      x2: cubicBezierPoints.x2,
      y1: cubicBezierPoints.y1,
      y2: cubicBezierPoints.y2
    })
  }
  console.error('Please enter a valid easing value')

  return false
}

const getTotalScroll = ({
  isWindow,
  scrollableDomEle,
  elementLengthProp,
  initialScrollPosition,
  isHorizontalDirection,
  scrollLengthProp,
  direction
}) => {
  let totalScroll

  if (isWindow) {
    const { documentElement } = document
    totalScroll = isHorizontalDirection ? documentElement.offsetWidth : documentElement.offsetHeight
  }
  else {
    totalScroll = scrollableDomEle[scrollLengthProp] - scrollableDomEle[elementLengthProp]
  }
  return ['left', 'top'].includes(direction) ? initialScrollPosition : totalScroll - initialScrollPosition
}

const easyScroll = ({
  scrollableDomEle,
  onAnimationCompleteCallback,
  direction,
  onRefUpdateCallback,
  duration,
  cubicBezierPoints,
  easingPreset,
  scrollAmount
}) => {
  let
    elementLengthProp = null,
    isHorizontalDirection = ['left', 'right'].indexOf(direction) > -1,
    isToBottomOrToRight = ['right', 'bottom'].indexOf(direction) > -1,
    isWindow = scrollableDomEle === window,
    scrollDirectionProp = null,
    scrollLengthProp = null,
    startTime = null

  if (isHorizontalDirection) {
    scrollDirectionProp = isWindow ? 'scrollX' : 'scrollLeft'
    elementLengthProp = isWindow ? 'innerWidth' : 'clientWidth'
    scrollLengthProp = 'scrollWidth'
  }
  else {
    scrollDirectionProp = isWindow ? 'scrollY' : 'scrollTop'
    elementLengthProp = isWindow ? 'innerHeight' : 'clientHeight'
    scrollLengthProp = 'scrollHeight'
  }

  const initialScrollPosition = scrollableDomEle[scrollDirectionProp]
  let totalScroll = getTotalScroll({
    isWindow,
    scrollableDomEle,
    elementLengthProp,
    initialScrollPosition,
    isHorizontalDirection,
    scrollLengthProp,
    direction
  })

  if (!isNaN(scrollAmount) && scrollAmount < totalScroll) {
    totalScroll = scrollAmount
  }

  const scrollOnNextTick = timestamp => {
    const runTime = timestamp - startTime
    const progress = getProgress({
      easingPreset,
      cubicBezierPoints,
      runTime,
      duration
    })

    if (!isNaN(progress)) {
      const scrollAmt = progress * totalScroll
      const scrollToForThisTick = (
        isToBottomOrToRight ?
          scrollAmt + initialScrollPosition :
          initialScrollPosition - scrollAmt
      )

      if (runTime < duration) {
        if (isWindow) {
          const xScrollTo = isHorizontalDirection ? scrollToForThisTick : 0
          const yScrollTo = isHorizontalDirection ? 0 : scrollToForThisTick
          window.scrollTo(xScrollTo, yScrollTo)
        }
        else {
          scrollableDomEle[scrollDirectionProp] = scrollToForThisTick
        }
        if (onRefUpdateCallback) {
          onRefUpdateCallback(requestAnimationFrame(scrollOnNextTick))
        }
        else {
          requestAnimationFrame(scrollOnNextTick)
        }
      }
      else {
        // Ensure 100% scroll completion
        const scrollAmt = totalScroll
        const scrollToForFinalTick = (
          isToBottomOrToRight ?
            scrollAmt + initialScrollPosition :
            initialScrollPosition - scrollAmt
        )
        if (isWindow) {
          const xScrollTo = isHorizontalDirection ? scrollToForFinalTick : 0
          const yScrollTo = isHorizontalDirection ? 0 : scrollToForFinalTick
          window.scrollTo(xScrollTo, yScrollTo)
        }
        else {
          scrollableDomEle[scrollDirectionProp] = scrollToForFinalTick
        }
        // Run callback
        if (onAnimationCompleteCallback) onAnimationCompleteCallback()
      }
    }
  }

  requestAnimationFrame(timestamp => {
    startTime = timestamp
    scrollOnNextTick(timestamp)
  })
}

export default easyScroll
