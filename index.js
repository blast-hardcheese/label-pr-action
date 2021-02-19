// const core = require('@actions/core');
const github = require('@actions/github');

try {
  const filters = core.getInput('filters');
  console.log(`Filters: ${filters}`);
  github.issues.addLabels({
    issue_number: github.context.issue.number,
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    labels: ['chore']
  })
} catch (error) {
  core.setFailed(error.message);
}
