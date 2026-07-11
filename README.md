# My Static Site - CI/CD Example

A simple HTML/CSS/JavaScript project with a full CI pipeline.

## 🔧 Built With

- HTML5, CSS3, JavaScript (Vanilla)
- **Testing**: Jest
- **Linting**: ESLint, Stylelint, HTML-validate
- **Formatting**: Prettier
- **Security**: npm audit + GitHub CodeQL

## 🚀 CI Workflow

The GitHub Actions workflow (`.github/workflows/ci.yml`) automatically runs on:

| Trigger          | Action                                       |
| ---------------- | -------------------------------------------- |
| **push**         | Validates every commit to `main`             |
| **pull_request** | Checks all PRs against `main`                |
| **schedule**     | Weekly vulnerability scan (Monday 03:00 UTC) |

### What It Checks

- ✅ HTML validity (`html-validate`)
- ✅ CSS best practices (`stylelint`)
- ✅ JavaScript code quality (`eslint`)
- ✅ Consistent formatting (`prettier --check`)
- ✅ Unit tests with coverage (`jest`)
- ✅ Dependency vulnerabilities (`npm audit`)
- ✅ Static code security analysis (`CodeQL`)

## 🛠 Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
