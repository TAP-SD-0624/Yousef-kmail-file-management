export class ErrorOr {
  isSuccessful = true;
  data;
  errors = [];
  constructor(isSuccessful, data, errors) {
    this.isSuccessful = isSuccessful;
    this.data = data;
    this.errors = errors;
  }
}
