# Contributing to Deep Research Agent

First off, thank you for considering contributing to Deep Research Agent! It's people like you that make this tool better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to:
- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Respect different viewpoints

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include error messages and stack traces**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the enhancement**
- **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests if available
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourname/deep-research-agent.git
cd deep-research-agent

# Install dependencies
npm install

# Set up environment
export TAVILY_API_KEY="your-api-key"

# Run tests
npm test
```

## Style Guidelines

### JavaScript Style Guide

- Use ES6+ features
- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Add trailing commas

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add support for custom output formats

- Add --format flag for JSON/HTML output
- Update documentation
- Add tests for new formats

Fixes #123
```

## Community

- GitHub Issues: Bug reports, feature requests
- Discussions: General questions, ideas
- Email: your@email.com

## Attribution

This Contributing Guide is adapted from the [Atom Contributing Guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).

Thank you for contributing! 🎉
