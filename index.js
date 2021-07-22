#!/usr/bin/env node

/*
Copyright © Magento, Inc. All rights reserved.
See COPYING.txt for license details.
*/

const clear = require('clear');
const chalk = require('chalk');
const { textSync } = require('figlet');
const questions = require('./lib/questions');
const files = require('./lib/files');
const placeholders = require('./lib/placeholders');

// Clear terminal and display ASCII art
clear();
console.log(chalk.greenBright(textSync('FrontMaker', { horizontalLayout: 'fitted', font: 'Standard' })));

const start = async () => {
    try {
        const moduleAnswers = await questions.askFrontmatterQuestions();
        const { product, fileExt } = moduleAnswers;

        placeholders.setupPlaceholders(moduleAnswers, product);
        files.copyTemplate(product);
        files.replaceFileContentPlaceholders(fileExt);
    } catch (e) {
        console.log(`${chalk.red('Please correct the following errors noted above and try again.')}`);
        console.error(`${chalk.red(e)}`);
    } finally {
        console.log(`${chalk.white('✔ The frontmatter content needs to be inserted at the beginning of all files!')}`);
    }
};

start();
