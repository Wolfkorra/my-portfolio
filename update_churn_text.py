import re
import os

files = [
    "public/analysis/telco-churn-report.html",
    "telco-churn-report.md",
    "churn_content.txt"
]

html_replacements = {
    r"This report asks a practical question: <strong>which customers are at the highest risk of churn, and how well can that risk be predicted from customer account information\?<\/strong> This is a good portfolio problem because it naturally supports exploratory data analysis, preprocessing, classification, cross-validation, and threshold-aware model evaluation\.": r"We're looking to answer a straightforward question: <strong>Which customers are most likely to leave, and can we predict this based on their account information?</strong> We'll explore the data, prep it for analysis, and build a machine learning model to help flag these at-risk customers.",
    r"<p>The writeup is intentionally prose-forward\. The goal is not to show every possible model\. The goal is to show a clean analytical workflow that balances technical detail with readable decision support\.<\/p>\n*": "",
    r"A good report does not flood the page with charts\. The purpose here is to identify a few patterns that matter for modeling and interpretation\.": r"Instead of overwhelming you with charts, we're focusing on the key patterns that directly influence our model.",
    r"Three patterns stand out\. First, churn is present but not dominant, so the problem is somewhat imbalanced without being extreme\. Second, contract type appears strongly related to churn\. Third, churn risk is not likely to be captured by a single numeric variable alone, which supports using a preprocessing pipeline that handles mixed data types\.": r"Three main takeaways emerge from our data. First, while some customers do leave (churn), the majority stay, so our data is slightly lopsided. Second, the type of contract a customer has is a huge indicator of whether they'll stick around. Lastly, predicting churn isn't as simple as looking at a single number; we'll need a combination of different factors, which means our model needs to handle both numbers and text categories.",
    r"The dataset includes both numeric and categorical variables\. A clean way to handle this is a column transformer inside a pipeline\.": r"Our data is a mix of numbers (like monthly charges) and categories (like internet service type). To make sure our machine learning model can understand everything, we'll cleanly organize these into a structured pipeline before feeding them in.",
    r"A good portfolio report should compare a simple, interpretable baseline with at least one stronger nonlinear model\.": r"We're going to compare two approaches: a straightforward baseline model (Logistic Regression) that's easy to understand, and a more complex one (Random Forest) that might find hidden patterns.",
    r"The cross-validation table gives a balanced view of model quality before looking at the held-out test set\. ROC-AUC is the main ranking metric because the business question is about ordering customers by risk, not just making hard class calls at one threshold\.": r"The cross-validation table shows us how our models perform on average before we test them on our final, untouched dataset. We're mainly looking at the ROC-AUC score, which is a statistical measure that tells us how good our model is at distinguishing between customers who will leave and those who will stay. For this business case, ranking customers by their risk level is more important than just giving a strict 'yes' or 'no'.",
    r"The exact best model may change after tuning, but this structure already supports a professional discussion\. Logistic regression is often a strong baseline in churn work because it is interpretable and stable\. A tree-based model is useful to check whether nonlinear interactions meaningfully improve ranking performance\.": r"While we could spend more time perfectly tuning this model, the current results already give us a great starting point for business decisions. Logistic regression provides a solid baseline because it's transparent and reliable, while our tree-based model helps us see if more complex data interactions provide a better risk ranking.",
    r"For a professional writeup, this section should move past metric reporting and explain tradeoffs\.": r"Now, let's look beyond just the numbers and understand what these metrics mean for real-world decisions:",
    r"<strong>ROC-AUC<\/strong> tells us how well the model separates higher-risk from lower-risk customers across thresholds\.": r"<strong>ROC-AUC</strong> shows our model's overall ability to separate high-risk from low-risk customers.",
    r"<strong>Precision<\/strong> matters when retention outreach is expensive and false alarms are costly\.": r"<strong>Precision</strong> is crucial when offering retention discounts is expensive—we want to be sure a flagged customer was actually going to leave.",
    r"<strong>Recall<\/strong> matters when missing a likely churner is costly\.": r"<strong>Recall</strong> is more important when the cost of losing a customer is high, ensuring we don't miss anyone who's a flight risk.",
    r"<strong>Threshold choice<\/strong> should depend on business constraints rather than habit\.": r"<strong>Threshold choice</strong>: The cutoff for classifying a customer as 'at-risk' should be based on your specific business costs and goals, not just a default setting.",
    r"A natural next step would be to compare several decision thresholds and frame the tradeoff in operational terms\.": r"A practical next step would be to weigh these thresholds against the actual costs of your retention campaigns.",
    r"This project shows a complete and readable classification workflow:": r"This project walks through a complete journey of predicting customer churn:",
    r"1\.\s*start with a clear prediction question,": r"1. Asking a clear, business-focused question,",
    r"2\.\s*perform targeted exploratory analysis,": r"2. Exploring the data for meaningful patterns,",
    r"3\.\s*build a preprocessing pipeline for mixed data,": r"3. Preparing mixed data types for machine learning,",
    r"4\.\s*compare models with cross-validation,": r"4. Comparing different models,",
    r"5\.\s*evaluate test-set performance with ROC-AUC and threshold-aware metrics,": r"5. Evaluating the results with metrics that make sense for the business (like ROC-AUC),",
    r"6\.\s*close with decision-oriented interpretation rather than code commentary\.": r"6. Interpreting the outcomes to support real-world decisions.",
    r"For a stronger final version, I would add modest hyperparameter tuning, feature importance or coefficient interpretation, and a short section on limitations such as missing behavioral variables or possible temporal leakage concerns\.": r"To take this even further, we could fine-tune the model, dig deeper into which specific features are driving customer decisions, and look at other behavioral data that might be missing here."
}

# The markdown uses newline wrapping and list structures differently.
markdown_replacements = {
    r"This report asks a practical question: \*\*which customers are at the\nhighest risk of churn, and how well can that risk be predicted from\ncustomer account information\?\*\* This is a good portfolio problem because\nit naturally supports exploratory data analysis, preprocessing,\nclassification, cross-validation, and threshold-aware model evaluation\.": r"We're looking to answer a straightforward question: **Which customers are most likely to leave, and can we predict this based on their account information?** We'll explore the data, prep it for analysis, and build a machine learning model to help flag these at-risk customers.",
    r"The writeup is intentionally prose-forward\. The goal is not to show\nevery possible model\. The goal is to show a clean analytical workflow\nthat balances technical detail with readable decision support\.\n*": "",
    r"A good report does not flood the page with charts\. The purpose here is\nto identify a few patterns that matter for modeling and interpretation\.": r"Instead of overwhelming you with charts, we're focusing on the key patterns that directly influence our model.",
    r"Three patterns stand out\. First, churn is present but not dominant, so\nthe problem is somewhat imbalanced without being extreme\. Second,\ncontract type appears strongly related to churn\. Third, churn risk is\nnot likely to be captured by a single numeric variable alone, which\nsupports using a preprocessing pipeline that handles mixed data types\.": r"Three main takeaways emerge from our data. First, while some customers do leave (churn), the majority stay, so our data is slightly lopsided. Second, the type of contract a customer has is a huge indicator of whether they'll stick around. Lastly, predicting churn isn't as simple as looking at a single number; we'll need a combination of different factors, which means our model needs to handle both numbers and text categories.",
    r"The dataset includes both numeric and categorical variables\. A clean way\nto handle this is a column transformer inside a pipeline\.": r"Our data is a mix of numbers (like monthly charges) and categories (like internet service type). To make sure our machine learning model can understand everything, we'll cleanly organize these into a structured pipeline before feeding them in.",
    r"A good portfolio report should compare a simple, interpretable baseline\nwith at least one stronger nonlinear model\.": r"We're going to compare two approaches: a straightforward baseline model (Logistic Regression) that's easy to understand, and a more complex one (Random Forest) that might find hidden patterns.",
    r"The cross-validation table gives a balanced view of model quality before\nlooking at the held-out test set\. ROC-AUC is the main ranking metric\nbecause the business question is about ordering customers by risk, not\njust making hard class calls at one threshold\.": r"The cross-validation table shows us how our models perform on average before we test them on our final, untouched dataset. We're mainly looking at the ROC-AUC score, which is a statistical measure that tells us how good our model is at distinguishing between customers who will leave and those who will stay. For this business case, ranking customers by their risk level is more important than just giving a strict 'yes' or 'no'.",
    r"The exact best model may change after tuning, but this structure already\nsupports a professional discussion\. Logistic regression is often a\nstrong baseline in churn work because it is interpretable and stable\. A\ntree-based model is useful to check whether nonlinear interactions\nmeaningfully improve ranking performance\.": r"While we could spend more time perfectly tuning this model, the current results already give us a great starting point for business decisions. Logistic regression provides a solid baseline because it's transparent and reliable, while our tree-based model helps us see if more complex data interactions provide a better risk ranking.",
    r"For a professional writeup, this section should move past metric\nreporting and explain tradeoffs\.": r"Now, let's look beyond just the numbers and understand what these metrics mean for real-world decisions:",
    r"\*\*ROC-AUC\*\* tells us how well the model separates higher-risk from\n\s*lower-risk customers across thresholds\.": r"**ROC-AUC** shows our model's overall ability to separate high-risk from low-risk customers.",
    r"\*\*Precision\*\* matters when retention outreach is expensive and false\n\s*alarms are costly\.": r"**Precision** is crucial when offering retention discounts is expensive—we want to be sure a flagged customer was actually going to leave.",
    r"\*\*Recall\*\* matters when missing a likely churner is costly\.": r"**Recall** is more important when the cost of losing a customer is high, ensuring we don't miss anyone who's a flight risk.",
    r"\*\*Threshold choice\*\* should depend on business constraints rather\n\s*than habit\.": r"**Threshold choice**: The cutoff for classifying a customer as 'at-risk' should be based on your specific business costs and goals, not just a default setting.",
    r"A natural next step would be to compare several decision thresholds and\nframe the tradeoff in operational terms\.": r"A practical next step would be to weigh these thresholds against the actual costs of your retention campaigns.",
    r"This project shows a complete and readable classification workflow:": r"This project walks through a complete journey of predicting customer churn:",
    r"1\.\s+start with a clear prediction question,": r"1. Asking a clear, business-focused question,",
    r"2\.\s+perform targeted exploratory analysis,": r"2. Exploring the data for meaningful patterns,",
    r"3\.\s+build a preprocessing pipeline for mixed data,": r"3. Preparing mixed data types for machine learning,",
    r"4\.\s+compare models with cross-validation,": r"4. Comparing different models,",
    r"5\.\s+evaluate test-set performance with ROC-AUC and threshold-aware\n\s*metrics,": r"5. Evaluating the results with metrics that make sense for the business (like ROC-AUC),",
    r"6\.\s+close with decision-oriented interpretation rather than code\n\s*commentary\.": r"6. Interpreting the outcomes to support real-world decisions.",
    r"For a stronger final version, I would add modest hyperparameter tuning,\nfeature importance or coefficient interpretation, and a short section on\nlimitations such as missing behavioral variables or possible temporal\nleakage concerns\.": r"To take this even further, we could fine-tune the model, dig deeper into which specific features are driving customer decisions, and look at other behavioral data that might be missing here."
}

for filepath in files:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
    with open(filepath, 'r') as f:
        content = f.read()

    original_content = content
    rep_dict = html_replacements if filepath.endswith('.html') else markdown_replacements
    
    for old, new in rep_dict.items():
        content = re.sub(old, new, content)
        
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes made to {filepath}")
