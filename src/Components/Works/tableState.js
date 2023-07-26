import { interpret, assign, createMachine } from "xstate";

const tableMachineConfig = {
  id: "tableMachine",
  version: "1.0",
  context: {
    displayTable: false,
  },

  initial: "hidden",
  states: {
    hidden: {
      on: {
        SHOW: {
          actions: assign((context, event) => {
            return {
              ...context,
              displayTable: true,
            };
          }),
          target: "shown",
        },
      },
    },
    shown: {
      on: {
        HIDE: {
          actions: assign((context, event) => {
            return {
              ...context,
              displayTable: false,
            };
          }),
          target: "hidden",
        },
      },
    },
  },
};
const tableMachine = createMachine(tableMachineConfig);
const tableInterpreter = interpret(tableMachine).start();

export default tableInterpreter;

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
