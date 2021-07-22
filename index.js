#!/usr/bin/env node

/*
Copyright © Magento, Inc. All rights reserved.
See COPYING.txt for license details.
*/

const clear = require('clear');
const chalk = require('chalk');
const { textSync } = require('figlet');
const questions = require('./lib/questions');
const files = require('./lib/frontmatter');

// Clear terminal and display ASCII art
clear();
console.log(chalk.greenBright(textSync('FrontMatters', { horizontalLayout: 'fitted', font: 'Standard' })));

const start = async () => {
    try {
        const answers = await questions.askQuestions();
        const { product, markdownFolder } = answers;
        console.log(markdownFolder);

        let frontmatter = files.readFrontMatter(product);
        files.addFrontMatter(frontmatter, markdownFolder);
    } catch (e) {
        console.log(`${chalk.red('Correct the errors and try again.')}`);
        console.error(`${chalk.red(e)}`);
    } finally {
        console.log(`${chalk.yellow(`Template applied:\n)}`)}`);
        console.log(`${chalk.yellow(`${frontmatter}\n\n)}`)}`);
    }
};

start().then((r) => console.log('✔ The front matter template above was added to all your markdown files.'));
