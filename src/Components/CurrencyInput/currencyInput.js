// © Nathaniel Saloff May 23 2020

// eslint-disable-next-line complexity
const currencyInputFormatter = ({
  locale,
  desiredCurrency,
  seperateCurrency,
  onError,
  currencySpace,
  currencyRight,
  desiredGroupingChar,
  symbolOnly,
  removeZero,
  desiredDecimalCharacter,
  currencyFlag,
}) => {
  if (seperateCurrency && (currencyRight || currencySpace))
    throw `You cannot select ${
      currencyRight && currencySpace
        ? "currencyRight and currencySpace"
        : currencyRight
        ? "currencyRight"
        : "currencySpace"
    } together with seperateCurrency`;
  let currencyDisplay = "symbol";
  if (currencyFlag === "symbolOnly") currencyDisplay = "narrowSymbol";
  if (currencyFlag === "codeSymbol") currencyDisplay = "symbol";
  if (currencyFlag === "currencyCode") currencyDisplay = "code";
  if (currencyFlag === "name") currencyDisplay = "name";

  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: desiredCurrency,
    currencyDisplay,
  });
  locale = Intl.Locale ? new Intl.Locale(locale) : locale;
  let parts = currencyFormatter.formatToParts(1234567890.5454);
  const isFractional = Boolean(
    parts.filter((part) => part.type === "decimal").length
  );
  if (!isFractional) parts = currencyFormatter.formatToParts(1234567890);
  let numbers = [];
  let currency,
    decimal = ".",
    group = "";
  parts.forEach((part) => {
    if (part.type === "integer") numbers.push(part.value);
    if (part.type === "currency") currency = part.value;
    if (part.type === "group")
      group = desiredGroupingChar ? desiredGroupingChar : part.value;
    if (part.type === "decimal")
      decimal = desiredDecimalCharacter ? desiredDecimalCharacter : part.value;
  });

  const placeholder = currency;
  numbers = numbers.join("").split("");
  numbers = [
    numbers[numbers.length - 1],
    ...numbers.slice(0, numbers.length - 1),
  ];
  const localeCurrencyRight = parts[0].type !== "currency";
  console.log(
    `currency: ${currency}, localeCurrencyRight: ${localeCurrencyRight}, group: ${group}, decimal: ${decimal}`
  );
  const currencyRegex = new RegExp(
    `${currency.replace(/[-\/\\^$*+?.()|[\]{}]/gu, "\\$&")}`,
    "gu"
  );

  const groupRegex = new RegExp(`${group.replace(".", "\\.")}`, "gu");
  const decimalRegex = new RegExp(`${decimal.replace(".", "\\.")}`, "gu");
  const amountRegex = new RegExp(
    `[${groupRegex.source}?${numbers.join("")}]+[\\s${[...numbers, group].join(
      ""
    )}]*`,
    "gu"
  );
  const fractionalRegex = isFractional
    ? new RegExp(`${decimalRegex.source}[${numbers.join("")}]{2}`, "gu")
    : "";
  const fullCurrencyStringRegex = currencyRight
    ? new RegExp(
        `(?<amount>${amountRegex.source})?${
          isFractional ? `(?<fractional>${fractionalRegex.source})?` : ""
        }\\s?(?<currency>${currencyRegex.source})?`,
        "gu"
      )
    : new RegExp(
        `(?<currency>${currencyRegex.source})?\\s?(?<amount>${
          amountRegex.source
        })?${isFractional ? `(?<fractional>${fractionalRegex.source})?` : ""}`,
        "gu"
      );
  const localizedFloatString = (x) =>
    x.replace(groupRegex, "").replace(decimalRegex, ".");
  const nativeValueString = (x) =>
    x
      .split("")
      .map((char) => (numbers[char] ? numbers[char] : char))
      .join("");
  const localizedValueString = (x) =>
    x
      .split("")
      .map((char) => (numbers.includes(char) ? numbers.indexOf(char) : char))
      .join("");
  const localizedNumberString = (x) =>
    numbers.includes(x) ? numbers.indexOf(x).toString() : x.toString();
  const isNumber = (x) => !isNaN(parseInt(x));

  const parseCurrencyString = (currencyString) => {
    if (!currencyString)
      throw new ReferenceError("currencyString is not defined");
    let {
      groups: { amount, fractional },
    } = new RegExp(fullCurrencyStringRegex.source, "gu").exec(currencyString);
    if (isFractional) amount = amount.concat(fractional);
    amount = amount
      .split("")
      .map((char) =>
        numbers.indexOf(char) !== -1 ? numbers.indexOf(char) : char
      )
      .join("");
    const localeFloatString = localizedFloatString(amount);
    const valueString = localeFloatString.replace(
      decimalRegex,
      isFractional ? "." : ""
    );
    const valueNumber = parseFloat(valueString);
    return {
      valueString,
      valueNumber,
      currency,
      nativeValueString: nativeValueString(valueString),
    };
  };

  // eslint-disable-next-line complexity
  const formatForPlacement = (value, zero) => {
    let {
      groups: { amount, fractional },
    } = new RegExp(fullCurrencyStringRegex.source, "gu").exec(value);
    amount =
      amount || amount === 0
        ? amount.concat(isFractional ? fractional : "")
        : "0".concat(isFractional ? fractional : "");
    const floatString = localizedValueString(localizedFloatString(amount));
    const floatValue = parseFloat(floatString);
    let formattedAmount = "",
      formattedCurrency,
      formattedValue = "";
    const parts = floatValue
      ? currencyFormatter.formatToParts(floatValue)
      : zero
      ? currencyFormatter.formatToParts(floatValue)
      : "";
    if (parts) {
      parts.forEach((part) => {
        if (part.type === "integer")
          formattedAmount = formattedAmount.concat(part.value);
        if (part.type === "currency") formattedCurrency = part.value;
        if (part.type === "group")
          formattedAmount = formattedAmount.concat(group);
        if (part.type === "decimal")
          formattedAmount = formattedAmount.concat(decimal);
        if (part.type === "fraction")
          formattedAmount = formattedAmount.concat(part.value);
      });
      formattedValue = seperateCurrency
        ? formattedAmount
        : currencyRight
        ? formattedAmount + (currencySpace ? " " : "") + formattedCurrency
        : formattedCurrency + (currencySpace ? " " : "") + formattedAmount;
    }
    return formattedValue;
  };

  const zeroValue = formatForPlacement(0, true);

  // eslint-disable-next-line complexity
  const onKeyDown = (e) => {
    e.persist();
    let { value } = e.target;
    const initialKeyPress = !value;
    value = localizedValueString(value);
    let { key, keyCode } = e;
    key = localizedNumberString(key);
    const keyIsNumber = isNumber(key);
    const initialLength = value.length;
    const initialPosition = e.target.selectionStart;
    let adjustedPosition = initialPosition;
    const initialDecimalPosition = value.split("").indexOf(decimal);
    const [formattedCurrencyString] = currency.match(currencyRegex);
    const numberStartIndex = seperateCurrency
      ? 0
      : currencyRight
      ? 0
      : formattedCurrencyString.length + (currencySpace ? 1 : 0);
    const numberEndIndex = seperateCurrency
      ? value.length
      : currencyRight
      ? value.length - formattedCurrencyString.length - (currencySpace ? 1 : 0)
      : value.length;
    let updatedNumberStartIndex = numberStartIndex;
    let updatedNumberEndIndex = numberEndIndex;
    const betweenInitialNumberIndexes =
      numberStartIndex <= initialPosition && initialPosition <= numberEndIndex;
    if (keyCode >= 48 || keyCode === 8) e.preventDefault();

    // BACKSPACING

    let previousCharacter;
    if (keyCode === 8) {
      previousCharacter = value.slice(initialPosition - 1, initialPosition);
      if (isNumber(previousCharacter)) {
        if (initialPosition > initialDecimalPosition) {
          value = [
            value.slice(0, initialPosition - 1),
            value.slice(initialPosition),
          ].join(isFractional ? "0" : "");
        } else
          value = [
            value.slice(0, initialPosition - 1),
            value.slice(initialPosition),
          ].join("");
      }
    }

    // ADDING INPUT VALUE

    if (keyIsNumber && initialPosition > initialDecimalPosition && isFractional)
      value = [
        value.slice(0, initialPosition),
        value.slice(initialPosition + 1),
      ].join(key);
    else if (keyIsNumber && betweenInitialNumberIndexes)
      value = [
        value.slice(0, initialPosition),
        value.slice(initialPosition),
      ].join(key);
    if (!value && keyIsNumber) value = key.toString();
    if ((!keyIsNumber && keyCode >= 48) || (key === decimal && !isFractional))
      onError("Please enter a number");

    // FORMATTING AND PLACEMENT
    let formattedValue = formatForPlacement(nativeValueString(value));
    if (
      (!formattedValue && !removeZero) ||
      (!formattedValue && key === decimal)
    )
      formattedValue = zeroValue;
    // if ()formattedValue = zeroValue
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set; // Needed because manual input value changes dont trigger reacts onChange
    nativeInputValueSetter.call(e.target, formattedValue);
    const event = new Event("change", { bubbles: true });
    e.target.dispatchEvent(event);

    // POSITION ADJUSTMENT

    const defaultPosition = isFractional
      ? formattedValue.split("").indexOf(decimal)
      : seperateCurrency
      ? formattedValue.length
      : currencyRight
      ? formattedValue.length -
        formattedCurrencyString.length -
        (currencySpace ? 1 : 0)
      : formattedValue.length;
    const newLength = formattedValue.length;
    updatedNumberStartIndex = seperateCurrency
      ? 0
      : currencyRight
      ? 0
      : formattedCurrencyString.length + (currencySpace ? 1 : 0);
    updatedNumberEndIndex = seperateCurrency
      ? newLength
      : currencyRight
      ? newLength - formattedCurrencyString.length - (currencySpace ? 1 : 0)
      : newLength;
    const valueDifference = newLength - initialLength;
    const formattedDecimalPosition = formattedValue.split("").indexOf(decimal);
    adjustedPosition += valueDifference;
    if (initialKeyPress) adjustedPosition = defaultPosition;
    if (
      (initialPosition > initialDecimalPosition &&
        isFractional &&
        !initialKeyPress) ||
      previousCharacter === group
    ) {
      if (keyCode === 8) adjustedPosition--;
      else if (keyIsNumber) adjustedPosition++;
    }
    if (key === decimal && isFractional)
      adjustedPosition = formattedDecimalPosition + 1;
    const betweenUpdatedNumberIndexes =
      updatedNumberStartIndex <= adjustedPosition &&
      adjustedPosition <= updatedNumberEndIndex;
    if (betweenUpdatedNumberIndexes)
      e.target.setSelectionRange(adjustedPosition, adjustedPosition);
    else if (adjustedPosition < updatedNumberStartIndex)
      e.target.setSelectionRange(
        updatedNumberStartIndex,
        updatedNumberStartIndex
      );
    else {
      if (keyCode >= 37 && keyCode <= 40) e.preventDefault();
      e.target.setSelectionRange(defaultPosition, defaultPosition);
    }
  };

  const onClick = (e) => {
    e.persist();
    const { value } = e.target;
    const initialPosition = e.target.selectionStart;
    const [formattedCurrencyString] = currency.match(currencyRegex);
    const numberStartIndex = seperateCurrency
      ? 0
      : currencyRight
      ? 0
      : formattedCurrencyString.length + (currencySpace ? 1 : 0);
    const numberEndIndex = seperateCurrency
      ? value.length
      : currencyRight
      ? value.length - formattedCurrencyString.length - (currencySpace ? 1 : 0)
      : value.length;
    const betweenInitialNumberIndexes =
      numberStartIndex <= initialPosition && initialPosition <= numberEndIndex;
    const defaultPosition = isFractional
      ? value.split("").indexOf(decimal)
      : numberEndIndex;
    if (betweenInitialNumberIndexes)
      e.target.setSelectionRange(initialPosition, initialPosition);
    else e.target.setSelectionRange(defaultPosition, defaultPosition);
  };

  return { onKeyDown, onClick, parseCurrencyString, placeholder, zeroValue };
};

export { currencyInputFormatter };
