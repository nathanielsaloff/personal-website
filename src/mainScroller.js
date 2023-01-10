import { interpret, Machine, assign } from 'xstate'
import easyScroll from 'easy-scroll'

const scroll = () => {
  easyScroll({
    scrollableDomEle: window,
    // scrollableDomEle: document.getElementById('mySite') as HTMLElement,
    direction: 'bottom',
    duration: 500,
    easingPreset: 'easeOutQuad',
    // cubicBezierPoints: {},
    // onRefUpdateCallback: () => { console.log('something') },
    onAnimationCompleteCallback: () => { console.log('complete') },
    scrollAmount: 100
  })
}

// https://github.com/microsoft/TypeScript/issues/12815
// type PageScrollerEvent =
// | { type: 'SCROLL-END', currentSection:section}
// | {type:'PAGE-LOADED'}
// |{ type: 'SCROLL', section?: section, scrollTop?: number, scrollLeft?: number }

const PageScrollerMachineConfig = {
  id: 'PageScrollerMachine',
  version: '1.0',
  context: {
    scrolling: false,
    currentSection: null // start by detecting location, scrolling to home and setting section to home
    // previousScrollTop: null,
    // previousScrollLeft: null
  },

  initial: 'idle',
  states: {
    idle: { on: { SCROLL: { target: 'scrolling' } } },
    scrolling: {
      entry: assign({ scrolling: (context, event) => true }),
      exit: [
        assign((context, event) => {
          return {
            scrolling: false,
            previousScrollTop: document.body.scrollTop,
            previousScrollLeft: document.body.scrollLeft,
            currentSection: event.section ? event.section : context.currentSection // find out how to assign the current section
          }
        }),
        (context, event) => {
          document.body.style.overflow = 'scroll'
          console.log(document.body.style.overflow)
        }
      ],
      on: {
        'SCROLL-END': {
          actions:
              assign<PageScrollerContext, PageScrollerEvent>((context, event) => {
                return {
                  ...context,
                  currentSection: event.currentSection
                }
              }),
          target: 'idle'
        }
      },
      invoke: {
        src: (context, event) => (sendBack, onRecieve) => {
          console.log('event recieved')
          console.log(event)
          let targetElementId
          let scrollAmount
          let direction
          const parentElement = document.getElementById('mySite')

          const getDirectionAndScrollAmount = (startingX, startingY, destX, destY) => {
            console.log(startingX, startingY, destX, destY)
            let direction, scrollAmount

            const diffs = {
              diffX: destX - startingX,
              diffY: destY - startingY
            }
            console.log(JSON.stringify(diffs))
            const greaterDiff = diffs[Object.keys(diffs).filter(key => Math.abs(diffs[key]) === Math.max.apply(null, Object.values(diffs).map(Math.abs))).pop() as string]
            // calculating scroll amount
            // eslint-disable-next-line prefer-const
            scrollAmount = Math.abs(greaterDiff)
            // assigning direction
            if (greaterDiff === 0) {
              // why is there no diff when I scroll?
              // sendBack({ type: 'SCROLL-END', currentSection: event.section })
            }
            else if (diffs.diffX === greaterDiff) {
              console.log('x is diff')
              direction = greaterDiff > 0 ? 'right' : 'left'
            }
            else if (diffs.diffY === greaterDiff) {
              console.log('y is diff')
              direction = greaterDiff > 0 ? 'bottom' : 'top'
            }
            return { scrollAmount, direction }
          }
          if (event.section) {
            targetElementId = event.section
            // finding scrollAmount and direction from current scroll location and destinations position
            const { scrollX, scrollY } = window
            const { offsetLeft, offsetTop } = document.getElementById(targetElementId) as HTMLElement
            ({ scrollAmount, direction } = getDirectionAndScrollAmount(scrollX, scrollY, offsetLeft, offsetTop))
          }
          else {
            ({ scrollAmount, direction } = getDirectionAndScrollAmount(scrollX, scrollY, event.scrollLeft, event.scrollTop))
            console.log(scrollAmount, direction)
            // assigning target element from direction and contexts current element
            const sections = Array.prototype.slice.call(parentElement?.childNodes).map(node => node.id)
            if (direction === 'up' || direction === 'down') {
              targetElementId = direction === 'up' ? sections[sections.indexOf(context.currentSection) - 1] : sections[sections.indexOf(context.currentSection) + 1]
            }
            else {
              targetElementId = direction === 'left' ? sections[sections.indexOf(context.currentSection) - 1] : sections[sections.indexOf(context.currentSection) + 1]
            }
            console.log(targetElementId)

            // calculate scrollAmount
          }
          console.log(scrollAmount, direction)
          // figure something out with this
          easyScroll({
            scrollableDomEle: window,
            direction: direction, // top left bottom right
            duration: 1300,
            easingPreset: 'easeOutCubic',
            // cubicBezierPoints: {
            //   x1: 0.27,
            //   y1: 0.53,
            //   x2: 0.56,
            //   y2: 1
            // },
            // onRefUpdateCallback: () => {},
            onAnimationCompleteCallback: () => {
              // must somehow transition from initial to idle once initial scrolling is finished
              sendBack({ type: 'SCROLL-END', currentSection: event.section })
              console.log('complete')
              return 'done'
            },
            scrollAmount
          })
        },
        onDone: {
          target: 'idle',
          actions: [
            (dcontext, event) => {
              console.log('done triggered')
            }
          ]
        }
      }
    }
  }
}

const PageScrollerMachineOptions = {
  guards: {},
  actions: {},
  activities: {},
  services: {},
  delays: {}
}

const PageScrollerMachine = Machine(
  PageScrollerMachineConfig,
  PageScrollerMachineOptions
)

const pageScrollerInterpreter = interpret(PageScrollerMachine, PageScrollerMachineOptions).start()
export default pageScrollerInterpreter
export { scroll }
// export { PageScrollerMachine, PageScrollerInterpreter }

// interface PageScrollerStateSchema {
//   key?: string
//   initial: number
//   type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history'
//   history?: 'shallow' | 'deep'
//   invoke?: {} // invoke config?
//   entry?: {}
//   exit?: {}
//   onDone?: {}
//   after?: {}
//   always?: {}
//   activities?: {}
//   data?: {}
//   on?: {}
//   states: {
//     idle: {}
//     fetching: {}
//   }
// }

// interface MachineInit {
//   id: string
//   initial: string
//   version?: string
//   parallel?: boolean
//   key?: string
//   type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history'
//   history?: 'shallow' | 'deep' | boolean | undefined
//   invoke?: {}
// }

// example invoke api fetch
// invoke: {
//   src: (context, event) => (sendBack, onRecieve) => {
//     console.log('fetching...')
//     // const fetchUrl = `https://api.npms.io/v2/search/?q=${encodeURI(context.query)}`
//     // const cancelTokenSource = axios.CancelToken.source()
//     // const request = axios.get(fetchUrl, { cancelToken: cancelTokenSource.token })
//     // return request
//   },
//   onDone: {
//     target: 'idle',
//     actions: [
//       assign({
//         loading: (context, event) => false,
//         results: (context, event) => {
//           const returnedResults: {
//           package: { name: string; version: string }
//           score: { final: number }
//         }[] = event.data.data.results.slice(0, 10)
//           const formattedReturnedResults = returnedResults.map(result => {
//             const float = parseFloat(result.score.final.toFixed(2)) * 100
//             const formattedPackage = {
//               name: result.package.name,
//               version: result.package.version,
//               score: `${float.toFixed(0)}/100`
//             }
//             return formattedPackage
//           })
//           return formattedReturnedResults
//         }
//       })
//     ]
//   },
//   onError: {
//     target: 'idle',
//     actions: [
//       assign({
//         error: (context, event) => (context.query === '' ? {} : event.data),
//         loading: (context, event) => false
//       })
//     ]
//   }
// }

//  top level not state specific event listeners
// on: {
// GET_RESULTS: [
//   {
//     target: 'fetching',
//     cond: (context, event) => Boolean(context.query)
//   },
//   { actions: assign({ loading: (context, event) => false }) }
// ],
// UPDATE_QUERY: [
//   {
//     internal: true,
//     // target: 'fetching',
//     actions: [
//       assign({
//         loading: (context, event) => true,
//         error: (context, event) => ({}),
//         query: (context, event) => event.query,
//         results: (context, event) => (event.query === '' ? [] : [...context.results])
//       }),
//       (context, event) => {
//       // console.log(`event: ${JSON.stringify(event)}`)
//       // console.log(`context.query: ${context.query}`)
//       }
//     ]
//   }
// ]
// },
