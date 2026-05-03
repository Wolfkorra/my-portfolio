::: {#quarto-search-results}
:::

::: {#quarto-content .quarto-container .page-columns .page-rows-contents .page-layout-article .page-navbar}
::: {#quarto-margin-sidebar .sidebar .margin-sidebar}
## On this page {#toc-title}

-   [Introduction](#introduction){#toc-introduction .nav-link .active
    scroll-target="#introduction"}
-   [Data and setup](#data-and-setup){#toc-data-and-setup .nav-link
    scroll-target="#data-and-setup"}
-   [Exploratory data
    analysis](#exploratory-data-analysis){#toc-exploratory-data-analysis
    .nav-link scroll-target="#exploratory-data-analysis"}
-   [Feature engineering and
    preprocessing](#feature-engineering-and-preprocessing){#toc-feature-engineering-and-preprocessing
    .nav-link scroll-target="#feature-engineering-and-preprocessing"}
-   [Modeling](#modeling){#toc-modeling .nav-link
    scroll-target="#modeling"}
-   [Test-set
    performance](#test-set-performance){#toc-test-set-performance
    .nav-link scroll-target="#test-set-performance"}
-   [Performance
    analysis](#performance-analysis){#toc-performance-analysis .nav-link
    scroll-target="#performance-analysis"}
-   [Conclusion](#conclusion){#toc-conclusion .nav-link
    scroll-target="#conclusion"}
:::

::: {#quarto-document-content .content role="main"}
::: {#title-block-header .quarto-title-block .default}
::: quarto-title
# Customer Churn Modeling with Reproducible Machine Learning {#customer-churn-modeling-with-reproducible-machine-learning .title}
:::

<div>

::: description
A prose-first Quarto report using Python, pandas, scikit-learn,
cross-validation, and ROC-AUC.
:::

</div>

::: quarto-title-meta
<div>

::: quarto-title-meta-heading
Author
:::

::: quarto-title-meta-contents
Abdullah Korra
:::

</div>

<div>

::: quarto-title-meta-heading
Published
:::

::: quarto-title-meta-contents
April 23, 2026
:::

</div>
:::
:::

::: {#introduction .section .level2}
## Introduction {#introduction .anchored anchor-id="introduction"}

This report asks a practical question: **which customers are at the
highest risk of churn, and how well can that risk be predicted from
customer account information?** This is a good portfolio problem because
it naturally supports exploratory data analysis, preprocessing,
classification, cross-validation, and threshold-aware model evaluation.

The writeup is intentionally prose-forward. The goal is not to show
every possible model. The goal is to show a clean analytical workflow
that balances technical detail with readable decision support.
:::

::: {#data-and-setup .section .level2}
## Data and setup {#data-and-setup .anchored anchor-id="data-and-setup"}

The analysis uses the common Telco Customer Churn dataset. The code
below first looks for a local copy in `data/raw/`. If the file is not
present, it falls back to a public raw CSV URL so the document can still
render.

::: {#cell-imports-and-load .cell execution_count="1"}
Show code

::: code-copy-outer-scaffold
::: {#cb1 .sourceCode .cell-code}
``` {.sourceCode .python .code-with-copy}
from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_validate
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    roc_auc_score,
    confusion_matrix,
    ConfusionMatrixDisplay,
    RocCurveDisplay,
    precision_score,
    recall_score,
    accuracy_score,
)

DATA_DIR = Path("../data/raw")
LOCAL_PATH = DATA_DIR / "WA_Fn-UseC_-Telco-Customer-Churn.csv"
REMOTE_URL = "https://raw.githubusercontent.com/treselle-systems/customer_churn_analysis/master/WA_Fn-UseC_-Telco-Customer-Churn.csv"

if LOCAL_PATH.exists():
    churn = pd.read_csv(LOCAL_PATH)
else:
    churn = pd.read_csv(REMOTE_URL)

churn.head()
```
:::
:::

::: {#imports-and-load .cell-output .cell-output-display execution_count="1"}
<div>

      customerID   gender   SeniorCitizen   Partner   Dependents   tenure   PhoneService   MultipleLines      InternetService   OnlineSecurity   \...   DeviceProtection   TechSupport   StreamingTV   StreamingMovies   Contract         PaperlessBilling   PaymentMethod               MonthlyCharges   TotalCharges   Churn
  --- ------------ -------- --------------- --------- ------------ -------- -------------- ------------------ ----------------- ---------------- ------ ------------------ ------------- ------------- ----------------- ---------------- ------------------ --------------------------- ---------------- -------------- -------
  0   7590-VHVEG   Female   0               Yes       No           1        No             No phone service   DSL               No               \...   No                 No            No            No                Month-to-month   Yes                Electronic check            29.85            29.85          No
  1   5575-GNVDE   Male     0               No        No           34       Yes            No                 DSL               Yes              \...   Yes                No            No            No                One year         No                 Mailed check                56.95            1889.5         No
  2   3668-QPYBK   Male     0               No        No           2        Yes            No                 DSL               Yes              \...   No                 No            No            No                Month-to-month   Yes                Mailed check                53.85            108.15         Yes
  3   7795-CFOCW   Male     0               No        No           45       No             No phone service   DSL               Yes              \...   Yes                Yes           No            No                One year         No                 Bank transfer (automatic)   42.30            1840.75        No
  4   9237-HQITU   Female   0               No        No           2        Yes            No                 Fiber optic       No               \...   No                 No            No            No                Month-to-month   Yes                Electronic check            70.70            151.65         Yes

5 rows × 21 columns

</div>
:::
:::

::: {#cell-clean-data .cell execution_count="2"}
Show code

::: code-copy-outer-scaffold
::: {#cb2 .sourceCode .cell-code}
``` {.sourceCode .python .code-with-copy}
churn["TotalCharges"] = pd.to_numeric(churn["TotalCharges"], errors="coerce")
churn = churn.drop(columns=["customerID"])
churn = churn.dropna().copy()

churn["Churn"] = (churn["Churn"] == "Yes").astype(int)

churn.shape
```
:::
:::

::: {#clean-data .cell-output .cell-output-display execution_count="2"}
    (7032, 20)
:::
:::

The cleaned data contains customer demographics, service subscriptions,
contract details, and billing information. The outcome is whether the
customer churned.
:::

::: {#exploratory-data-analysis .section .level2}
## Exploratory data analysis {#exploratory-data-analysis .anchored anchor-id="exploratory-data-analysis"}

A good report does not flood the page with charts. The purpose here is
to identify a few patterns that matter for modeling and interpretation.

::: {#cell-target-rate .cell execution_count="3"}
::: {.cell-output .cell-output-display}
<div>

<figure class="figure">
<p><img
src="telco-churn-report_files/figure-html/target-rate-output-1.png"
id="target-rate" class="figure-img" width="514" height="376" /></p>
</figure>

</div>
:::
:::

::: {#cell-contract-churn .cell execution_count="4"}
::: {.cell-output .cell-output-display}
<div>

<figure class="figure">
<p><img
src="telco-churn-report_files/figure-html/contract-churn-output-1.png"
id="contract-churn" class="figure-img" width="597" height="403" /></p>
</figure>

</div>
:::
:::

::: {#cell-charges-vs-tenure .cell execution_count="5"}
::: {.cell-output .cell-output-display}
<div>

<figure class="figure">
<p><img
src="telco-churn-report_files/figure-html/charges-vs-tenure-output-1.png"
id="charges-vs-tenure" class="figure-img" width="593"
height="449" /></p>
</figure>

</div>
:::
:::

Three patterns stand out. First, churn is present but not dominant, so
the problem is somewhat imbalanced without being extreme. Second,
contract type appears strongly related to churn. Third, churn risk is
not likely to be captured by a single numeric variable alone, which
supports using a preprocessing pipeline that handles mixed data types.
:::

::: {#feature-engineering-and-preprocessing .section .level2}
## Feature engineering and preprocessing {#feature-engineering-and-preprocessing .anchored anchor-id="feature-engineering-and-preprocessing"}

The dataset includes both numeric and categorical variables. A clean way
to handle this is a column transformer inside a pipeline.

::: {#split-data .cell execution_count="6"}
Show code

::: code-copy-outer-scaffold
::: {#cb4 .sourceCode .cell-code}
``` {.sourceCode .python .code-with-copy}
X = churn.drop(columns="Churn")
y = churn["Churn"]

numeric_features = X.select_dtypes(include=["number"]).columns.tolist()
categorical_features = X.select_dtypes(exclude=["number"]).columns.tolist()

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.30,
    random_state=4025,
    stratify=y,
)

numeric_preprocess = Pipeline(
    steps=[
        ("imputer", SimpleImputer(strategy="median")),
        ("scaler", StandardScaler()),
    ]
)

categorical_preprocess = Pipeline(
    steps=[
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("onehot", OneHotEncoder(handle_unknown="ignore")),
    ]
)

preprocessor = ColumnTransformer(
    transformers=[
        ("num", numeric_preprocess, numeric_features),
        ("cat", categorical_preprocess, categorical_features),
    ]
)

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=4025)
```
:::
:::
:::
:::

::: {#modeling .section .level2}
## Modeling {#modeling .anchored anchor-id="modeling"}

A good portfolio report should compare a simple, interpretable baseline
with at least one stronger nonlinear model.

::: {#define-models .cell execution_count="7"}
Show code

::: code-copy-outer-scaffold
::: {#cb5 .sourceCode .cell-code}
``` {.sourceCode .python .code-with-copy}
logistic_model = Pipeline(
    steps=[
        ("preprocess", preprocessor),
        ("model", LogisticRegression(max_iter=2000)),
    ]
)

forest_model = Pipeline(
    steps=[
        ("preprocess", preprocessor),
        ("model", RandomForestClassifier(
            n_estimators=400,
            min_samples_leaf=5,
            random_state=4025,
        )),
    ]
)
```
:::
:::
:::

::: {#cell-cross-validation .cell execution_count="8"}
Show code

::: code-copy-outer-scaffold
::: {#cb6 .sourceCode .cell-code}
``` {.sourceCode .python .code-with-copy}
scoring = {
    "roc_auc": "roc_auc",
    "accuracy": "accuracy",
    "precision": "precision",
    "recall": "recall",
}

cv_results = []

for name, model in {
    "Logistic Regression": logistic_model,
    "Random Forest": forest_model,
}.items():
    scores = cross_validate(
        model,
        X_train,
        y_train,
        cv=cv,
        scoring=scoring,
        n_jobs=-1,
        return_train_score=False,
    )
    cv_results.append({
        "model": name,
        "cv_roc_auc_mean": scores["test_roc_auc"].mean(),
        "cv_accuracy_mean": scores["test_accuracy"].mean(),
        "cv_precision_mean": scores["test_precision"].mean(),
        "cv_recall_mean": scores["test_recall"].mean(),
    })

cv_df = pd.DataFrame(cv_results).sort_values("cv_roc_auc_mean", ascending=False)
cv_df
```
:::
:::

::: {#cross-validation .cell-output .cell-output-display execution_count="8"}
<div>

      model                 cv_roc_auc_mean   cv_accuracy_mean   cv_precision_mean   cv_recall_mean
  --- --------------------- ----------------- ------------------ ------------------- ----------------
  0   Logistic Regression   0.848566          0.810848           0.670438            0.567290
  1   Random Forest         0.846380          0.806584           0.680451            0.512986

</div>
:::
:::

The cross-validation table gives a balanced view of model quality before
looking at the held-out test set. ROC-AUC is the main ranking metric
because the business question is about ordering customers by risk, not
just making hard class calls at one threshold.
:::

::: {#test-set-performance .section .level2}
## Test-set performance {#test-set-performance .anchored anchor-id="test-set-performance"}

::: {#cell-fit-best-model .cell execution_count="9"}
Show code

::: code-copy-outer-scaffold
::: {#cb7 .sourceCode .cell-code}
``` {.sourceCode .python .code-with-copy}
best_model = logistic_model
best_model.fit(X_train, y_train)

y_prob = best_model.predict_proba(X_test)[:, 1]
y_pred = (y_prob >= 0.50).astype(int)

test_metrics = pd.DataFrame(
    {
        "metric": ["ROC-AUC", "Accuracy", "Precision", "Recall"],
        "value": [
            roc_auc_score(y_test, y_prob),
            accuracy_score(y_test, y_pred),
            precision_score(y_test, y_pred),
            recall_score(y_test, y_pred),
        ],
    }
)

test_metrics
```
:::
:::

::: {#fit-best-model .cell-output .cell-output-display execution_count="9"}
<div>

      metric      value
  --- ----------- ----------
  0   ROC-AUC     0.836333
  1   Accuracy    0.796682
  2   Precision   0.651376
  3   Recall      0.506239

</div>
:::
:::

::: {#cell-roc-curve .cell execution_count="10"}
::: {.cell-output .cell-output-display}
<div>

<figure class="figure">
<p><img
src="telco-churn-report_files/figure-html/roc-curve-output-1.png"
id="roc-curve" class="figure-img" width="445" height="449" /></p>
</figure>

</div>
:::
:::

::: {#cell-confusion-matrix .cell execution_count="11"}
::: {.cell-output .cell-output-display}
<div>

<figure class="figure">
<p><img
src="telco-churn-report_files/figure-html/confusion-matrix-output-1.png"
id="confusion-matrix" class="figure-img" width="433" height="393" /></p>
</figure>

</div>
:::
:::

The exact best model may change after tuning, but this structure already
supports a professional discussion. Logistic regression is often a
strong baseline in churn work because it is interpretable and stable. A
tree-based model is useful to check whether nonlinear interactions
meaningfully improve ranking performance.
:::

::: {#performance-analysis .section .level2}
## Performance analysis {#performance-analysis .anchored anchor-id="performance-analysis"}

For a professional writeup, this section should move past metric
reporting and explain tradeoffs.

-   **ROC-AUC** tells us how well the model separates higher-risk from
    lower-risk customers across thresholds.
-   **Precision** matters when retention outreach is expensive and false
    alarms are costly.
-   **Recall** matters when missing a likely churner is costly.
-   **Threshold choice** should depend on business constraints rather
    than habit.

A natural next step would be to compare several decision thresholds and
frame the tradeoff in operational terms.

::: {#cell-threshold-sweep .cell execution_count="12"}
::: {#threshold-sweep .cell-output .cell-output-display execution_count="12"}
<div>

      threshold   precision   recall     accuracy
  --- ----------- ----------- ---------- ----------
  0   0.20        0.481142    0.841355   0.716588
  1   0.25        0.524590    0.798574   0.754028
  2   0.30        0.551265    0.737968   0.770616
  3   0.35        0.570561    0.670232   0.778199
  4   0.40        0.594549    0.622103   0.786730
  5   0.45        0.618042    0.573975   0.792417
  6   0.50        0.651376    0.506239   0.796682
  7   0.55        0.668464    0.442068   0.793365

</div>
:::
:::

::: {#cell-threshold-plot .cell execution_count="13"}
::: {.cell-output .cell-output-display}
<div>

<figure class="figure">
<p><img
src="telco-churn-report_files/figure-html/threshold-plot-output-1.png"
id="threshold-plot" class="figure-img" width="589" height="413" /></p>
</figure>

</div>
:::
:::
:::

::: {#conclusion .section .level2}
## Conclusion {#conclusion .anchored anchor-id="conclusion"}

This project shows a complete and readable classification workflow:

1.  start with a clear prediction question,
2.  perform targeted exploratory analysis,
3.  build a preprocessing pipeline for mixed data,
4.  compare models with cross-validation,
5.  evaluate test-set performance with ROC-AUC and threshold-aware
    metrics,
6.  close with decision-oriented interpretation rather than code
    commentary.

For a stronger final version, I would add modest hyperparameter tuning,
feature importance or coefficient interpretation, and a short section on
limitations such as missing behavioral variables or possible temporal
leakage concerns.
:::
:::
:::
