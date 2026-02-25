---
name: security-best-practices
description: Perform language and framework specific security best-practice reviews and suggest improvements. Trigger only when the user explicitly requests security best practices guidance, a security review/report, or secure-by-default coding help. Trigger only for supported languages (python, javascript/typescript, go). Do not trigger for general code review, debugging, or non-security tasks.
metadata:
  author: vercel/openai
  version: '1.0.0'
---

# Security Best Practices

## Overview

This skill provides a framework to identify the languages and frameworks used in the project and apply security best practices. It can be used to write secure-by-default code, passively detect major issues, or provide a detailed vulnerability report and suggest fixes.

## Workflow

1. **Identification**: Identify ALL languages and core frameworks (frontend and backend) in the project scope.
2. **Analysis**: Audit the code against well-known security principles for the detected stack (OWASP Top 10, CWE, etc.).
3. **Modes of Operation**:
    - **Secure Writing**: Proactively use information to write secure code from the start.
    - **Passive Detection**: Flag high-impact vulnerabilities or insecure defaults during development.
    - **Security Report**: Generate a prioritized `security_best_practices_report.md` with severity levels and impact statements.

## Report Format

When producing a report, write it to `security_best_practices_report.md` (unless otherwise specified).

- **Executive Summary**: High-level overview of the security state.
- **Delineation by Severity**: Group findings by Critical, High, Medium, and Low.
- **Reference Code**: Include file names and precise line numbers for all findings.
- **Impact Statement**: For critical findings, include a one-sentence impact description.

## Fixes

- Focus on fixing a single finding at a time to ensure stability.
- Add concise comments explaining why the fix is necessary for security.
- **Functionality First**: Ensure security fixes do not break existing features or regressions.

## Core Security Advice

### 1. ID Exposure (IDOR Prevention)
Avoid using auto-incrementing IDs for resources exposed to the internet. Use UUID4 or random hex strings instead to prevent resource guessing and data leakage.

### 2. TLS & Cookies
- Only set the "Secure" flag on cookies if the application is actually served over HTTPS.
- Avoid recommending HSTS unless requested, as it can cause permanent user lockout if misconfigured.
- Do not report lack of TLS in local development environments.

### 3. Input Validation & Sanitization
- Never trust user input. Use libraries like Zod, Yup, or Pydantic for strict schema validation.
- Sanitize data before rendering to prevent XSS.
- Use parameterized queries to prevent SQL Injection.

### 4. Secrets Management
- Never hardcode API keys, passwords, or tokens.
- Use environment variables (`.env`) or secret management services (AWS Secrets Manager, HashiCorp Vault).
- Ensure `.env` files are in `.gitignore`.
