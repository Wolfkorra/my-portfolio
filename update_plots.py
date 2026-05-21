import re
import os

files = [
    "public/analysis/telco-churn-report.html",
    "telco-churn-report.md",
    "churn_content.txt"
]

for filepath in files:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Remove preamble text
    content = re.sub(
        r"A prose-first Quarto report using Python,\s*pandas,\s*scikit-learn,[\s]*cross-validation,\s*and\s*ROC-AUC\.",
        "",
        content,
        flags=re.IGNORECASE
    )

    if filepath.endswith('.html'):
        # 2. Add interpretations to HTML
        content = re.sub(
            r'(<img[^>]*src="[^"]*roc-curve-output-1\.png"[^>]*>\s*</p>\s*</figure>\s*</div>\s*</div>\s*</div>)',
            r'\1\n<p><strong>ROC Curve on the test set:</strong> The ROC curve plots our true positive rate against the false positive rate. The curve shows that our model performs significantly better than random guessing (which would be a diagonal line), effectively distinguishing between customers who will churn and those who will stay. The large area under the curve (AUC) indicates a strong predictive capability.</p>',
            content
        )
        
        content = re.sub(
            r'(<img[^>]*src="[^"]*confusion-matrix-output-1\.png"[^>]*>\s*</p>\s*</figure>\s*</div>\s*</div>\s*</div>)',
            r'\1\n<p><strong>Confusion Matrix at 0.50 threshold:</strong> This matrix breaks down our model\'s predictions at a 50% cutoff. The model successfully identified a significant portion of actual churners, but also missed some. It correctly identified most loyal customers but flagged some who ended up staying. This highlights that at this specific threshold, the model leans slightly conservative in predicting churn, prioritizing precision over recall.</p>',
            content
        )
        
        content = re.sub(
            r'(<img[^>]*src="[^"]*threshold-plot-output-1\.png"[^>]*>\s*</p>\s*</figure>\s*</div>\s*</div>\s*</div>)',
            r'\1\n<p><strong>Threshold tradeoffs on the test set:</strong> This plot visualizes the delicate balance between precision and recall across different decision thresholds. As we lower the threshold to catch more potential churners (increasing recall), we inevitably flag more loyal customers by mistake (decreasing precision). Finding the right "sweet spot" on this graph is key to a cost-effective retention strategy.</p>',
            content
        )

        # 3. Update Conclusion HTML
        content = re.sub(
            r'(<h2 class="anchored" data-anchor-id="conclusion">Conclusion</h2>\s*)<p>This project walks through a complete journey of predicting customer churn:</p>[\s\S]*?(<p>To take this even further, we could fine-tune the model, dig deeper into which specific features are driving customer decisions, and look at other behavioral data that might be missing here\.</p>)',
            r'\1<p>This model empowers the business to shift from a reactive to a proactive customer retention strategy. By reliably predicting which customers are at risk of leaving, it allows us to focus our resources where they matter most.</p>\n<p>Instead of offering blanket discounts to everyone, the business should target interventions specifically at those flagged as high-risk by the model. Furthermore, since our earlier data exploration showed that month-to-month contracts are heavily associated with churn, retention strategies could focus on incentivizing these users to switch to longer-term plans. This targeted approach not only saves money but also improves the overall customer experience.</p>\n\2',
            content
        )

    else:
        # Markdown & TXT updates
        content = re.sub(
            r'(<img\s*src="[^"]*roc-curve-output-1\.png"[^>]*/>\s*</p>\s*</figure>\s*</div>\s*:::\s*:::)',
            r'\1\n\n**ROC Curve on the test set:** The ROC curve plots our true positive rate against the false positive rate. The curve shows that our model performs significantly better than random guessing (which would be a diagonal line), effectively distinguishing between customers who will churn and those who will stay. The large area under the curve (AUC) indicates a strong predictive capability.\n',
            content
        )
        
        content = re.sub(
            r'(<img\s*src="[^"]*confusion-matrix-output-1\.png"[^>]*/>\s*</p>\s*</figure>\s*</div>\s*:::\s*:::)',
            r'\1\n\n**Confusion Matrix at 0.50 threshold:** This matrix breaks down our model\'s predictions at a 50% cutoff. The model successfully identified a significant portion of actual churners, but also missed some. It correctly identified most loyal customers but flagged some who ended up staying. This highlights that at this specific threshold, the model leans slightly conservative in predicting churn, prioritizing precision over recall.\n',
            content
        )

        content = re.sub(
            r'(<img\s*src="[^"]*threshold-plot-output-1\.png"[^>]*/>\s*</p>\s*</figure>\s*</div>\s*:::\s*:::)',
            r'\1\n\n**Threshold tradeoffs on the test set:** This plot visualizes the delicate balance between precision and recall across different decision thresholds. As we lower the threshold to catch more potential churners (increasing recall), we inevitably flag more loyal customers by mistake (decreasing precision). Finding the right "sweet spot" on this graph is key to a cost-effective retention strategy.\n',
            content
        )

        # Update Conclusion Markdown
        content = re.sub(
            r'(## Conclusion \{#conclusion .anchored anchor-id="conclusion"\}\s*)This project walks through a complete journey of predicting customer churn:[\s\S]*?(To take this even further, we could fine-tune the model, dig deeper into which specific features are driving customer decisions, and look at other behavioral data that might be missing here\.)',
            r'\1This model empowers the business to shift from a reactive to a proactive customer retention strategy. By reliably predicting which customers are at risk of leaving, it allows us to focus our resources where they matter most.\n\nInstead of offering blanket discounts to everyone, the business should target interventions specifically at those flagged as high-risk by the model. Furthermore, since our earlier data exploration showed that month-to-month contracts are heavily associated with churn, retention strategies could focus on incentivizing these users to switch to longer-term plans. This targeted approach not only saves money but also improves the overall customer experience.\n\n\2',
            content
        )

        # Special fallback for churn_content.txt HTML conclusion
        content = re.sub(
            r'(<h2 class="anchored" data-anchor-id="conclusion">\s*Conclusion\s*</h2>\s*)<p>\s*This project walks through a complete journey of predicting customer churn:\s*</p>[\s\S]*?(<p>\s*To take this even further, we could fine-tune the model, dig deeper into which specific features are driving customer decisions, and look at other behavioral data that might be missing here\.\s*</p>)',
            r'\1<p>This model empowers the business to shift from a reactive to a proactive customer retention strategy. By reliably predicting which customers are at risk of leaving, it allows us to focus our resources where they matter most.</p>\n<p>Instead of offering blanket discounts to everyone, the business should target interventions specifically at those flagged as high-risk by the model. Furthermore, since our earlier data exploration showed that month-to-month contracts are heavily associated with churn, retention strategies could focus on incentivizing these users to switch to longer-term plans. This targeted approach not only saves money but also improves the overall customer experience.</p>\n\2',
            content
        )

    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes made to {filepath}")