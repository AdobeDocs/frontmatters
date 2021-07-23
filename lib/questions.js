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

const chalk = require('chalk');
const inquirer = require('inquirer');

module.exports = {
    askQuestions: () => {
        const questions = [
            {
                name: 'product',
                type: 'list',
                message: chalk.green(`Select the ${chalk.yellow('repo')} you want to frontmatter:`),
                choices: [
                    'after-effects',
                    'animate',
                    'audition',
                    'bridge',
                    'camera-raw',
                    'cc-developer-platform-pages',
                    'cc-libraries-api',
                    'cja-apis',
                    'creative-cloud-libraries',
                    'dreamweaver',
                    'fonts',
                    'illustrator',
                    'indesign',
                    'lightroom-classic',
                    'lightroom',
                    'photoshop-api',
                    'photoshop',
                    'premiere-pro',
                    'project-firefly',
                    'stock',
                    'uxp-photoshop',
                    'uxp-xd',
                    'xd',
                    'xmp',
                ],
                default: 'after-effects',
            },
            {
                name: 'markdownFolder',
                type: 'input',
                message: chalk.green(`Enter the path to the ${chalk.yellow('root folder')} for the repo's markdown files:`),
                default: 'src',
            },
            // May extend later to include different file types. Keeping it simple for now.
            // {
            //   name: 'fileExt',
            //   type: 'list',
            //   message: chalk.green(`Choose the ${chalk.yellow('file type')} to amend:`),
            //   choices: ['.md', '.mdx'],
            //   default: '.md',
            // },
        ];
        return inquirer.prompt(questions);
    },
};
