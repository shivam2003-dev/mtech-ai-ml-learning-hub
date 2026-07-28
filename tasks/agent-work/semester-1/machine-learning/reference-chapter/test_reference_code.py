"""Executable mirror of the Machine Learning reference chapter code."""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np
from numpy.typing import NDArray
from sklearn.dummy import DummyClassifier
from sklearn.metrics import accuracy_score

IntArray = NDArray[np.int64]
FloatArray = NDArray[np.float64]


def stratified_holdout_indices(
    y: IntArray, test_fraction: float = 0.25, seed: int = 17
) -> tuple[IntArray, IntArray]:
    """Return deterministic train/test indices with every class represented."""
    labels = np.asarray(y, dtype=np.int64)
    if labels.ndim != 1 or labels.size < 4:
        raise ValueError("y must be one-dimensional with at least four rows")
    if not 0.0 < test_fraction < 1.0:
        raise ValueError("test_fraction must lie strictly between zero and one")

    rng = np.random.default_rng(seed)
    train_parts: list[IntArray] = []
    test_parts: list[IntArray] = []
    for label in np.unique(labels):
        indices = np.flatnonzero(labels == label)
        if indices.size < 2:
            raise ValueError("each class needs at least two rows")
        shuffled = rng.permutation(indices)
        test_count = int(round(indices.size * test_fraction))
        test_count = min(max(test_count, 1), indices.size - 1)
        test_parts.append(shuffled[:test_count])
        train_parts.append(shuffled[test_count:])

    train = np.sort(np.concatenate(train_parts)).astype(np.int64)
    test = np.sort(np.concatenate(test_parts)).astype(np.int64)
    return train, test


@dataclass
class MajorityClassifier:
    """Constant classifier with the smallest numeric label as a tie-break."""

    majority_class_: int | None = None

    def fit(self, X: FloatArray, y: IntArray) -> "MajorityClassifier":
        features = np.asarray(X, dtype=np.float64)
        labels = np.asarray(y, dtype=np.int64)
        if features.ndim != 2 or labels.ndim != 1:
            raise ValueError("X must be 2D and y must be 1D")
        if features.shape[0] != labels.size or labels.size == 0:
            raise ValueError("X and y must contain the same non-zero row count")
        classes, counts = np.unique(labels, return_counts=True)
        self.majority_class_ = int(classes[np.argmax(counts)])
        return self

    def predict(self, X: FloatArray) -> IntArray:
        features = np.asarray(X, dtype=np.float64)
        if self.majority_class_ is None:
            raise RuntimeError("fit must be called before predict")
        if features.ndim != 2:
            raise ValueError("X must be 2D")
        return np.full(features.shape[0], self.majority_class_, dtype=np.int64)


def accuracy_scratch(y_true: IntArray, y_pred: IntArray) -> float:
    """Return the fraction of exactly matching labels."""
    truth = np.asarray(y_true, dtype=np.int64)
    prediction = np.asarray(y_pred, dtype=np.int64)
    if truth.ndim != 1 or truth.size == 0 or truth.shape != prediction.shape:
        raise ValueError("label arrays must be non-empty, 1D, and equal in shape")
    return float(np.mean(truth == prediction))


X = np.array(
    [
        [120.0, 2.1, 48.0], [132.0, 2.5, 50.0],
        [141.0, 3.0, 54.0], [155.0, 4.8, 67.0],
        [160.0, 5.1, 70.0], [118.0, 1.9, 47.0],
        [149.0, 3.4, 58.0], [171.0, 5.7, 73.0],
        [128.0, 2.2, 49.0], [166.0, 5.3, 71.0],
        [137.0, 2.8, 53.0], [152.0, 4.2, 64.0],
        [125.0, 2.0, 48.0], [174.0, 6.0, 75.0],
        [145.0, 3.1, 56.0], [158.0, 4.6, 66.0],
    ],
    dtype=np.float64,
)
y = np.array([0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])


def run_tests() -> None:
    train_a, test_a = stratified_holdout_indices(y, seed=17)
    train_b, test_b = stratified_holdout_indices(y, seed=17)

    assert np.array_equal(train_a, train_b)
    assert np.array_equal(test_a, test_b)
    assert set(train_a).isdisjoint(set(test_a))
    assert sorted(np.concatenate([train_a, test_a]).tolist()) == list(range(len(y)))
    assert set(y[train_a].tolist()) == set(y.tolist())
    assert set(y[test_a].tolist()) == set(y.tolist())

    fitted = MajorityClassifier().fit(X[train_a], y[train_a])
    expected = np.full(test_a.size, 0, dtype=np.int64)
    assert np.array_equal(fitted.predict(X[test_a]), expected)

    sklearn_model = DummyClassifier(strategy="most_frequent")
    sklearn_model.fit(X[train_a], y[train_a])
    assert np.array_equal(
        fitted.predict(X[test_a]),
        sklearn_model.predict(X[test_a]).astype(np.int64),
    )
    assert accuracy_scratch(y[test_a], expected) == 0.5
    assert float(accuracy_score(y[test_a], expected)) == 0.5

    try:
        stratified_holdout_indices(y, test_fraction=1.0)
        raise AssertionError("invalid test_fraction should fail")
    except ValueError:
        pass

    try:
        MajorityClassifier().predict(X)
        raise AssertionError("predict before fit should fail")
    except RuntimeError:
        pass


if __name__ == "__main__":
    train_idx, test_idx = stratified_holdout_indices(y)
    scratch = MajorityClassifier().fit(X[train_idx], y[train_idx])
    scratch_pred = scratch.predict(X[test_idx])
    library = DummyClassifier(strategy="most_frequent")
    library.fit(X[train_idx], y[train_idx])
    library_pred = library.predict(X[test_idx]).astype(np.int64)
    run_tests()
    print(f"train rows={train_idx.size}, test rows={test_idx.size}")
    print(f"majority class={scratch.majority_class_}")
    print(f"scratch accuracy={accuracy_scratch(y[test_idx], scratch_pred):.3f}")
    print(f"library accuracy={accuracy_score(y[test_idx], library_pred):.3f}")
    print("tests=passed")
