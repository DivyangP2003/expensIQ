import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function EmailTemplate({
  userName = "",
  type = "monthly-report",
  data = {},
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for {data?.month}:
            </Text>

            {/* Stats Block */}
            <Section style={styles.statsContainer}>
              <div style={styles.statsRow}>
                <div style={styles.statBox}>
                  <Text style={styles.label}>Total Income</Text>
                  <Text style={{ ...styles.amount, color: "#059669" }}>
                    ${data?.stats.totalIncome.toFixed(2)}
                  </Text>
                </div>
                <div style={styles.statBox}>
                  <Text style={styles.label}>Total Expenses</Text>
                  <Text style={{ ...styles.amount, color: "#dc2626" }}>
                    ${data?.stats.totalExpenses.toFixed(2)}
                  </Text>
                </div>
              </div>

              <div style={{ ...styles.statBox, margin: "24px auto 0" }}>
                <Text style={styles.label}>Net</Text>
                <Text style={{ ...styles.amount, color: "#059669" }}>
                  $
                  {(
                    data?.stats.totalIncome - data?.stats.totalExpenses
                  ).toFixed(2)}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                <table style={styles.table}>
                  <thead>
                    <tr style={styles.tableHeaderRow}>
                      <th style={styles.th}>Category</th>
                      <th style={{ ...styles.th, textAlign: "right" }}>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data?.stats.byCategory).map(
                      ([category, amount]) => (
                        <tr key={category}>
                          <td style={styles.td}>{category}</td>
                          <td style={{ ...styles.td, textAlign: "right" }}>
                            ${amount.toFixed(2)}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>ExpensIQ Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using ExpensIQ. Keep tracking your finances for
              better financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    const isOverBudget = data?.percentageUsed > 100;
    return (
      <Html>
        <Head />
        <Preview>{isOverBudget ? "Over Budget Alert" : "Budget Alert"}</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading
              style={{
                ...styles.title,
                color: isOverBudget ? "#dc2626" : styles.title.color,
              }}
            >
              {isOverBudget ? "🚨 Over Budget Alert!" : "Budget Alert"}
            </Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text
              style={{
                ...styles.text,
                fontWeight: isOverBudget ? "bold" : "normal",
                color: isOverBudget ? "#dc2626" : styles.text.color,
              }}
            >
              You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
              monthly budget.
            </Text>
            {isOverBudget && (
              <Text
                style={{
                  ...styles.text,
                  fontStyle: "italic",
                  color: "#b91c1c",
                }}
              >
                Consider reviewing your spending — you've gone over your limit.
              </Text>
            )}

            {/* Stats Block */}
            <Section style={styles.statsContainer}>
              <div style={styles.statsRow}>
                <div style={styles.statBox}>
                  <Text style={styles.label}>Budget Amount</Text>
                  <Text style={{ ...styles.amount, color: "#374151" }}>
                    ${data?.budgetAmount}
                  </Text>
                </div>
                <div style={styles.statBox}>
                  <Text style={styles.label}>Spent So Far</Text>
                  <Text style={{ ...styles.amount, color: "#dc2626" }}>
                    ${data?.totalExpenses}
                  </Text>
                </div>
              </div>

              <div style={{ ...styles.statBox, margin: "24px auto 0" }}>
                <Text style={styles.label}>Remaining</Text>
                <Text
                  style={{
                    ...styles.amount,
                    color:
                      data?.budgetAmount - data?.totalExpenses < 0
                        ? "#dc2626"
                        : "#059669",
                  }}
                >
                  ${data?.budgetAmount - data?.totalExpenses}
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
}

// ---------------------- STYLES ----------------------
const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "-apple-system, sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#1f2937",
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "0 0 20px",
  },
  heading: {
    color: "#1f2937",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 16px",
  },
  text: {
    color: "#4b5563",
    fontSize: "16px",
    margin: "0 0 16px",
  },
  section: {
    marginTop: "32px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    borderRadius: "5px",
    border: "1px solid #e5e7eb",
  },
  statsContainer: {
    margin: "32px 0",
    padding: "20px 0",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  statBox: {
    width: "180px",
    padding: "16px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  label: {
    fontSize: "16px",
    color: "#374151",
    marginBottom: "8px",
  },
  amount: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
  },
  tableHeaderRow: {
    backgroundColor: "#f2f2f2",
  },
  th: {
    textAlign: "left",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
};
