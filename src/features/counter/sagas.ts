import { takeEvery } from "redux-saga/effects";

function* logSaga() {
  yield takeEvery("counter/incrementByAmount", () =>
    console.log("hey ho from logSaga")
  );
}

export default logSaga;
