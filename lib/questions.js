/*
Copyright © Magento, Inc. All rights reserved.
See COPYING.txt for license details.
*/

/*
 * Questions for user
 * --------------------
 * The answers to the following questions are stored
 * in the names of each question object defined below.
 * These names (in their uppercase form) are [placeholders]
 * in the template directories, file names, and file contents.
 * The placeholders are then replaced with the user answers.
 */

const chalk = require('chalk');
const inquirer = require('inquirer');

module.exports = {
  askFrontmatterQuestions: () => {

    // const pascalCase = new RegExp(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/);
    // const titleCase = new RegExp(/^\s*([A-Z]\w*\s*)*$/);

    const frontmatterQuestions = [
      {
        name: 'product',
        type: 'list',
        message: chalk.green(`Choose the ${chalk.yellow('Product your documentation supports')}:`),
        choices: ['Photoshop', 'XD', 'Illustrator'],
        default: 'Photoshop',
        // validate: thisAnswer => pascalCase.test(thisAnswer) ? true : 'Please use PascalCase.'
      },
      {
        name: 'fileExt',
        type: 'list',
        message: chalk.green(`Choose the ${chalk.yellow('file type')} to amend:`),
        choices: ['.md', '.mdx'],
        default: '.md',
        // validate: thisAnswer => pascalCase.test(thisAnswer) ? true : 'Please use PascalCase.'
      }
    ];
    return inquirer.prompt(frontmatterQuestions);
  }
}
