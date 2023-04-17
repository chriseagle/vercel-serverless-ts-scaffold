import inquirer from 'inquirer';
import { exec } from 'child_process';
inquirer
  .prompt([
    {
			name: 'runBuild',
			type: 'list',
			message: 'Building before commit is required. Run build script?',
			default: 'Yes',
			choices: ['Yes', 'No'],
		},
  ]).then((answers) => {
		console.log('answers', answers);
    if(answers.runBuild === 'Yes') {
			exec('npm run build');
		}
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });