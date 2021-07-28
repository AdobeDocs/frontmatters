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

const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = {
    /**
     * Returns front matter text from file
     *
     * @param {string} productTemplate - frontmatter block for product family.
     */
    readFrontMatter(productTemplate) {
        const templateFile = `${path.join(__dirname, '../')}templates/${productTemplate.toLowerCase()}.txt`;

        if (fs.existsSync(templateFile)) {
            return fs.readFileSync(templateFile, 'utf8');
        } else {
            console.error(`${chalk.red('\nThe requested template was not found.')}`);
            process.exit(1);
        }
    },

    /**
     *  Adds front matter text to beginning of markdown files.
     *
     * @param frontmatter
     * @param markdownFolder
     */
    addFrontMatter(frontmatter, markdownFolder) {
        if (markdownFolder === undefined) {
            console.error(
                `${chalk.red('\nThe source path to your markdown files was not found.\nYou probably entered a path that does not exist. Try again.')}`
            );
            process.exit(1);
        }
        shell.ls('-R', `${markdownFolder}/**/*.md`).forEach(function (file) {
            // for each file, add the front matter to top of the file.
            try {
                let markdown = fs.readFileSync(`${file}`).toString().split('\n');

                // if a frontmatter section is present in the source file
                if ('---' === markdown[0]) {
                    // add the front matter section to beginning of existing one
                    markdown.splice(0, 1, frontmatter.split('\n').slice(0, -2).join('\n'));
                } else {
                    // else add the front matter section to beginning of the source file
                    markdown.splice(0, 0, frontmatter);
                }
                const markdownWithFrontmatter = markdown.join('\n');

                fs.writeFile(`${file}`, markdownWithFrontmatter, function (error) {
                    if (error) return error;
                });
            } catch (error) {
                console.log(error);
            }
        });
        // TODO: Display this info to user before running script so they know what they are about to do
        console.log(`Front matter template applied:`);
        console.log(`\n`);
        console.log(`${chalk.yellow(frontmatter)}`);
    },
};
