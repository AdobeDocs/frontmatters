#!/usr/bin/env node

/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const clear = require('clear');
const chalk = require('chalk');
const { textSync } = require('figlet');
const questions = require('./lib/questions');
const files = require('./lib/frontmatter');
const argv = require('minimist')(process.argv.slice(2));

// Clear terminal and display ASCII art
clear();
console.log(chalk.greenBright(textSync('FrontMatters', { horizontalLayout: 'fitted', font: 'Standard' })));

const start = async () => {
    try {
        let product, markdownFolder;
        if (argv.r && argv.s) {
            product = argv.r;
            markdownFolder = argv.s;
        } else {
            const answers = await questions.askQuestions();
            product = answers.product;
            markdownFolder = answers.markdownFolder;
        }
        const frontmatter = files.readFrontMatter(product);
        files.addFrontMatter(frontmatter, markdownFolder);
    } catch (e) {
        console.log(`${chalk.red('Correct the errors and try again.')}`);
        console.error(`${chalk.red(e)}`);
    }
};

start().then((r) => console.log('✔ The front matter template above was added to all your markdown files.'));
