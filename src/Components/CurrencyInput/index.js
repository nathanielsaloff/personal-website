import React, { Component } from "react";
import { currencyInputFormatter } from "./currencyInput";

// const formatter = currencyInputFormatter('en-US-u-nu-arab', 'USD')
// debug 'JPY'(currencies without decimals and fraction), 'zh-Hans-CN-u-nu-hanidec' (foreign numbering systems whn typing outof bounds of the amount the value resets), 'ar-EG'
// 'en-USD'
// 'ar-EG'
// 'zh-Hans-CN-u-nu-hanidec'
const { onKeyDown, onClick, parseCurrencyString, placeholder, zeroValue } =
  currencyInputFormatter({
    // language locale
    locale: "zh-Hans-CN-u-nu-hanidec",
    // currency code
    desiredCurrency: "USD",
    // calback to pass a formatting error message
    onError,
    seperateCurrency: false,
    currencySpace: true,
    currencyRight: false,
    removeZero: true,
    // ' ', ',', '.'
    desiredGroupingChar: "",
    // ',', '.'
    desiredDecimalCharacter: "",
    // currencyFlag: symbolOnly,codeSymbol,currencyCode,name
    currencyFlag: "codeSymbol",
  });
// const formatter = currencyInputFormatter('en-US', 'USD')
console.log(`zeroValue: ${zeroValue}`);

function onError(err) {
  console.log(err);
}

function onChange(e) {
  // console.log('Handling value change')
  const { value } = e.target;
  console.log(parseCurrencyString(value));
  // console.log(parseCurrencyString(value))
  // console.log(currencyStringParser(e.target.value))
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  // ownProps are the props passed to the container
  // takes redux state of app and allows to pick what need
  // state is whole state tree
  // take just what component needs and return new state
  // can pass in ownProps as needed
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // points to basicly store.dispatch
  // return bindActionCreators({ increment, decrement, reset }, dispatch)
  return {
    // dskl: () => { dispatch('glerb') }
    //   INCREMENT: e => { dispatch(counter.INCREMENT({ e, payload: { statement: 'This is cool' } })) },
    //   DECREMENT: e => { dispatch(counter.DECREMENT(e)) },
    //   RESET: e => { dispatch(counter.RESET(e)) }
    // //   // emailEdit: e => { dispatch(emailEdit(e.target.value)) },
    // //   // passwordEdit: e => { dispatch(passwordEdit(e.target.value)) },
    // //   // login: e => { dispatch(login()) }
  };
};

function CurrencyInput(props) {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "16vmin",
        bottom: "0",
        right: "0",
        left: "0",
      }}
    >
      <input
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        style={{ textAlign: "center", fontFamily: "monospace", margin: "75px" }}
        type="text"
      />
      <div
        id="valuesDisplay"
        style={{
          background: "white",
          padding: "20px",
        }}
      >
        hello
      </div>
    </div>
  );
}

export default CurrencyInput;
