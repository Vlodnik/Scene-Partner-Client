export function required(value) {
  return value ? undefined : 'Required';
}

export function nonEmpty(value) {
  return value.trim() !== '' ? undefined : 'Cannot be empty';
}

export function isTrimmed(value) {
  return value.trim() === value ? undefined : 'Cannot start or end with whitespace';
}

export function correctLength(length) {
  return function(value) {
    if(length.min && value.length < length.min) {
      return `Must be at least ${ length.min } characters long`;
    }
    if(length.max && value.length > length.max) {
      return `Must be fewer than ${ length.max } characters long`;
    }
  }
}

export function matches(field) {
  return function(value, allValues) {
    if(field in allValues && value === allValues[field]) {
      return undefined;
    }
    return 'Does not match';
  }
}
