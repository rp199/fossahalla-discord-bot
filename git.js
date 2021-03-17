const env = require('./env.js')
const git = require('simple-git')(env.REPO_DIR);

const gitCommit = (git, commitMessage) => {
    return git.add('.').commit(commitMessage)
}

const gitPush = (git) => {
    return env.PUSH_ENABLED ? git.push() : git
}

const gitSave = (commitMessage, errorHandler) => {
    if (env.ENABLE_GIT_LOGS) {
        git.outputHandler((command, stdout, stderr) => {
            stdout.pipe(process.stdout);
            stderr.pipe(process.stderr);
        });
    }

    gitPush(gitCommit(git, commitMessage))
        .catch((err) => {
            errorHandler(err)
        });
}

exports.git = gitSave